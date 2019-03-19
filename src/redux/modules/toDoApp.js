const ADD_ITEM = 'ADD_ITEM';
const INPUT_CHNAGED = 'INPUT_CHANGED';
const DELETE_ITEM = 'DELETE_ITEM';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const DONE_ITEM = 'DONE_ITEM';

const initialState = {
  list: [{
    item: 'defaultThing1',
    done: false
  }],
  newToDo: ''
};

export function inputChange(newToDo) {
  return {
    type: INPUT_CHNAGED,
    newToDo
  }
}

export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  }
}

export function listItemDelete(index) {
  return {
    type: DELETE_ITEM,
    index
  }
}

export function listItemClick(index) {
  return {
    type: DONE_ITEM,
    index
  }
}

export default function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({},
        state, {
          list: [...state.list, {item: state.newToDo, done: false}]
        }
      )
    case INPUT_CHNAGED:
      return Object.assign({},
        state, {
          newToDo: action.newToDo
        }
      )
    case DELETE_ITEM:
      return Object.assign({},
        state, {
          list: [
            ...state.list.slice(0, action.index),
            ...state.list.slice(action.index + 1)
          ]
        }
      )
    case DONE_ITEM: 
      return Object.assign({}, 
        state, {
          list: [
            ...state.list.slice(0, action.index),
            Object.assign({}, {item: state.list[action.index].item, done: !state.list[action.index].done}),
            ...state.list.slice(action.index+1)
          ]
        }
      )
    case INPUT_SUBMIT:
      return Object.assign({},
        state, {
          list: [...state.list, {
            item: state.newToDo,
            done: false
          }],
          newToDo: ''
        })

    default:
      return state;
  }
}