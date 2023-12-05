import axios from 'axios';

// Action Types
export const ADD_TASK = 'ADD_TASK';
export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Action Creators
export const addTask = task => ({ type: ADD_TASK, task });
export const setTasks = tasks => ({ type: SET_TASKS, tasks });
export const deleteTask = id => ({ type: DELETE_TASK, id });
export const updateTask = task => ({ type: UPDATE_TASK, task });

// Thunk Action Creators
export const fetchTasks = () => {
  return dispatch => {
    axios.get('https://65643812ceac41c0761da64a.mockapi.io/api/v1/posts/')
      .then(response => dispatch(setTasks(response.data)))
      .catch(error => console.error(error));
  };
};

// Add Task to API and store
export const postTask = title => {
  return dispatch => {
    axios.post('https://65643812ceac41c0761da64a.mockapi.io/api/v1/posts/', { title })
      .then(response => dispatch(addTask(response.data)))
      .catch(error => console.error(error));
  };
};

// Delete Task from API and store
export const removeTask = id => {
  return dispatch => {
    axios.delete(`https://65643812ceac41c0761da64a.mockapi.io/api/v1/posts/${id}`)
      .then(() => dispatch(deleteTask(id)))
      .catch(error => console.error(error));
  };
};

// Update Task in API and store
export const putTask = (id, title) => {
  return dispatch => {
    axios.put(`https://65643812ceac41c0761da64a.mockapi.io/api/v1/posts/${id}`, { title })
      .then(response => dispatch(updateTask(response.data)))
      .catch(error => console.error(error));
  };
};
