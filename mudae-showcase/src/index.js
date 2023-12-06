import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import pb from './components/pocketbase';

//Use this method to login users, but not here (somewhere after login and before website content)
//const USERNAME = 'USER_EMAIL'; 
//const PASSWORD = 'USER_PASSWORD';

//const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
//console.log(authData);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
