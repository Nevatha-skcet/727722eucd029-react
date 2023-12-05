import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './Store';
// import TaskComponent from './TaskComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignupComponent/>}></Route>
    <Route path="/login" element={<LoginComponent/>}></Route>
    </Routes>
  </BrowserRouter>
  // <Provider store={store}>
  //   <TaskComponent />
  // </Provider>
);

export default App;
