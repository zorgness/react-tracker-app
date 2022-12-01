export const reducer = (state, action) => {
  switch (action.type) {
    case 'new':
      return {
        status: 'new',
        tracker: action.payload,
        disabledButtons: {btnSave: false, btnUp: true, btnDel: true},
        disabledInput: false,
        error: null,
      }
    case 'edit':
      return {
        ...state,
        status: 'edition',
        tracker: action.payload,
        disabledButtons: {btnSave: false, btnUp: false, btnDel: false},
        disabledInput: false,
        error: null,
      }
    case 'save':
      return {
        ...state,
        status: 'saved',
        disabledButtons: {btnSave: true, btnUp: true, btnDel: false},
        disabledInput: true,
        error: null,
      }
    case 'update':
      return {
        ...state,
        status: 'update',
        disabledButtons: {btnSave: false, btnUp: false, btnDel: false},
        disabledInput: false,
        error: null,
      }
    case 'delete':
      return {
        ...state,
        status: 'delete',
        disabledButtons: {btnSave: true, btnUp: true, btnDel: true},
        disabledInput: true,
        error: null,
      }
    case 'fail':
      return {
        status: 'fail',
        disabledButtons: {btnSave: true, btnUp: true, btnDel: true},
        disabledInput: true,
        error: action.error,
      }
    case 'trackerChange':
      return {
        ...state,
        tracker: action.payload,
        error: null,
      }
    default:
      throw new Error('Action non supporté')
  }
}
