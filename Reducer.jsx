import { ADD_TASK, SET_TASKS, DELETE_TASK, UPDATE_TASK } from './Action';

const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task)
      };
    default:
      return state;
  }
};

export default tasksReducer;
