#!/usr/bin/env node

const fs = require('fs')
const inquirer = require('inquirer')
const {
  spawnSync,
  getExerciseBranches,
  getVariants,
  getExtraCreditTitles,
} = require('./scripts/utils')

const actions = {
  changeExercise,
  startExtraCredit,
}

const currentBranch = spawnSync('git rev-parse --abbrev-ref HEAD')

async function go() {
  if (currentBranch === 'main') {
    // if we're on main then you can't do anything else
    await changeExercise()
    return
  }

  const {action} = await inquirer.prompt([
    {
      name: 'action',
      message: `Que veux tu faire ?`,
      type: 'list',
      choices: [
        {name: 'Changer d\'exercise', value: 'changeExercise'},
        {name: 'Démmarrer les bonus', value: 'startExtraCredit'},
      ],
    },
  ])
  await actions[action]()
}

function getDisplayName(exerciseBranch) {
  const match = exerciseBranch.match(
    /exercises\/(?<number>\d\d)-(?<title>.*?)$/,
  )
  const title = match.groups.title.split('-').join(' ')
  const capitalizedTitle = title.slice(0, 1).toUpperCase() + title.slice(1)
  return `${match.groups.number}. ${capitalizedTitle}`
}

async function changeExercise() {
  const {branch} = await inquirer.prompt([
    {
      name: 'branch',
      message: `Sur quel exercice veux tu travailler ?`,
      type: 'list',
      default: currentBranch,
      choices: [
        {name: 'Returner sur la branche main', value: 'main'},
        ...getExerciseBranches().map(b => ({
          name: getDisplayName(b),
          value: b,
        })),
      ],
    },
  ])
  spawnSync('git add -A')
  spawnSync('git reset --hard HEAD')
  spawnSync(`git checkout ${branch}`)
  if (branch.startsWith('exercises/')) {
    spawnSync('node ./scripts/swap exercise')
  }
  console.log(`✅ Pret à travailler sur ${branch}`)
}

async function startExtraCredit() {
  const variants = getVariants()
  const maxExtra = Math.max(
    ...Object.values(variants)
      .reduce((acc, v) => [...acc, ...v.extras], [])
      .map(e => e.number),
  )

  const extraCreditTitles = getExtraCreditTitles()

  function getVariantDisplayName(variant) {
    if (variant === 'final') return 'Final'
    return `Bonus ${variant}: ${extraCreditTitles[variant - 1]}`
  }

  const {variant} = await inquirer.prompt([
    {
      name: 'variant',
      message: `Sur quelle partie veux tu travailler ?`,
      type: 'list',
      choices: [
        {name: 'Final', value: 'final'},
        ...Array.from({length: maxExtra}, (v, i) => ({
          name: getVariantDisplayName(i + 1),
          value: i + 1,
        })),
      ],
    },
  ])

  for (const {extras, exercise, final} of Object.values(variants)) {
    const availableECs = extras.map(e => e.number).filter(n => n < variant)
    const maxEC = Math.max(...availableECs)
    const maxExtra = extras.find(e => e.number === maxEC)

    if (variant === 'final' || (!maxExtra && !final)) {
      // reset the exercise to the original state
      spawnSync(`git checkout -- ${exercise.file}`)
    } else {
      const newExerciseContents = fs.readFileSync((maxExtra || final).file, {
        encoding: 'utf-8',
      })
      fs.writeFileSync(exercise.file, newExerciseContents)
    }
  }
  console.log(`✅  Pret à travailler sur ${getVariantDisplayName(variant)}`)
}

go()
