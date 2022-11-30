<<<<<<< HEAD
# Formulaire d'édition avancé
### 💡 Formulaire d'édition avancé
=======
# 01-composant-parent

### 💡 Préparer le composant parent
>>>>>>> exercises/01-composant-parent

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

<<<<<<< HEAD
La logique peut vite devenir complexe à gérer lorsque l'on a des états et des transitions. Exemple de Diagram de transition sur des boutons 
=======
Le but du composant de plus haut niveau `<TrackersApp />` est de contenir tout
le fonctionnement de l'application Tracker. (il pourrait y avoir d'autres
applications dans notre site). `TrackersApp` sera donc le composant principale
qui contiendra les composants enfants. `TrackersApp` contiendra

- les données (une liste de trackers),
- un texte de recherche (pour filtrer les tracker)
- un `selectedTracker` qui nous permettra de savoir si 'un tracker est
  sélectionné (pour édition par exemple)

> Note : Les données initiales sont stockées en dur dans un `array` du fichier
> `data.js`

> Note : pour le moment il n'y a pas de persistance de données (les données sont
> réinitialisée a chaque fois)
>>>>>>> exercises/01-composant-parent

```jsx
![Tux, the Linux mascot](/state-transition.png
```

imaginons nous souhaitons gérer plus finement les états de nos boutons , Nouveau, Ajouter, Supprimer Mettre à jour. On pourrait gérer des Boolean de la manière suivante.

<<<<<<< HEAD
```jsx
const disabled = tracker.id === '' ? true : false
const disabledButonNew = //logique à implementer
const disabledButonAdd = //logique à implementer
const disabledButonUpdate = //logique à implementer
const disabledButonDelete = //logique à implementer
const disabledLabel = //logique à implementer
//etc..
```

Cette manière fonctionne mais peut vite devenir compliquer à maintenir par la multiplication des boolean. A la place il est possible d'utiliser un reducer qui permet de gerer l'état en cours, les données, les états des bouton et des champs inputs (et tout autre future états a gérer )

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "new":
      return {
        status: "new",
        tracker: action.payload,
        activeButtons: { btnSave: true, btnUp: false, btnDel: false },
        activeInput: true,
        error: null,
      };
    case "edit":
    //etc ...
    default:
      throw new Error("Action non supporté");
  }
};
const [state, dispatch] = React.useReducer(reducer, {
    tracker: selectedTracker,
    error: null,
    status: "idle",
    activeButtons: { btnSave: false, btnUp: false, btnDel: false },
  });
=======
Dans cet exercice tu vas devoir préparer ce composant l'afficher à l'écran dans
App.js (le fichier principal de Create React App). Dans un premier temps on va
juste afficher le nombre de tracker contenu dans notre base de données virtuelle
(qui n'est juste qu'un simple `Array` pour le moment)

```jsx
import {TrackersApp} from './components/TrackersApp'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <TrackersApp />
    </div>
  )
}
>>>>>>> exercises/01-composant-parent
```

## Exercice

👨‍✈️ Hugo le chef de projet nous demande d'implémenter la logique suivante :

- Au démarrage, dans l'état initial, tous les champs input sont désactivés
- Au démarrage, dans l'état initial, tous les boutons sont désactivé à l'exception de  "Nouveau Tracker"

Lors d'un clique sur "Nouveau Tracker"

- Les champs input sont actifs
- Le bouton 'Ajouter'  s'active et permet d'ajouter le tracker

Lors d'un clique sur "Ajouter"

- Le tracker est ajouté en base de données et seul le bouton "Nouveau Tracker" est actif

Lors d'un clique sur une des ligne du tableau 

- Le bouton "Ajouter" est désactivé
- Le bouton 'Nouveau tracker', 'Supprimer' et 'Mettre à jour'  son actifs

Dans cet exercice tu vas devoir implémenter cela avec le reducer 

## Bonus

### 1. 🚀 Exporter le comportement dans un hook custom

Dans cet exercice tu vas devoir créer une hook personnalisé. L'idée est de pouvoir réutiliser la logiques d'états / Buttons / Champs.

Créé un hook `useEditTracker` qui retourne toutes ces propriétés : 

```jsx
function useEditTracker({defaultTracker}) {
  const [state, dispatch] = React.useReducer(reducer, {
    tracker: defaultTracker,
    error: null,
    status: 'idle',
    activeButtons: {btnSave: false, btnUp: false, btnDel: false},
  })
 //todo

  return {
    tracker,
    error,
    status,
    activeButtons,
    activeInput,
    setTracker,
    editTracker,
    saveTracker,
    updateTracker,
    deleteTracker,
    newTracker,
  }
}
```

<<<<<<< HEAD
Creer dans ce hook les fonctions suivantes 
=======
Affiche tous les noms de trackers en plus de "il y a 6 trackers" en parcourant
notre database.
>>>>>>> exercises/01-composant-parent

- setTracker
- editTracker
- saveTracker
- updateTracker
- deleteTracker
- newTracker

<<<<<<< HEAD
qui font appel au dispatch avec les bonne valeurs.
=======
📑 Le lien vers la doc de
[Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
>>>>>>> exercises/01-composant-parent

Utilise le ensuite de la manière suivante  dans le composant

<<<<<<< HEAD
```jsx
const {
    tracker,
    activeButtons,
    activeInput,
    setTracker,
    editTracker,
    saveTracker,
    updateTracker,
    deleteTracker,
    newTracker,
  } = useEditTracker(selectedTracker)
```
=======
Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=01-composant-parent)
>>>>>>> exercises/01-composant-parent
