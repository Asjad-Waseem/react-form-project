// This is your CSS import

import './App.css';

// This is where we are importing React-Rouuter to manage our routing

import { BrowserRouter as Router, Route } from 'react-router-dom';

// This is where we are importing our developed components

import Profile from './pages/profile/Profile';

// This is your main App function

function App() {

  // This is where your UI is returned and displayed

  return (

    // You are enclosing your Application inside the router so that it follows the routes assigned

    <Router>

      {/* This is your main div of the application */}

      <div className="App">

        {/* This is your first route that you've created on "/" on the Profile component that we imported earlier */}

        <Route exact path="/" component={Profile} />
    
      </div>
    
    </Router>
  );
}

// This is where your main App component is being exported and is being imported and used in index.js which is the actual root file of the entire application

export default App;
