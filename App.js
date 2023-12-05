// App.js
import React from 'react';
import DynamicForm from './DynamicForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <DynamicForm />
    </div>
  );
}

export default App;
























// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { UserProvider } from './UserContext';
// import LoginComponent from './LoginComponent';
// import SignupComponent from './SignupComponent';
// import HomeComponent from './Home';

// function App() {
//   return (
//     <UserProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<LoginComponent />} />
//           <Route path="/signup" element={<SignupComponent />} />
//           <Route path="/" element={<HomeComponent />} />
//         </Routes>
//       </Router>
//     </UserProvider>
//   );
// }

// export default App;
