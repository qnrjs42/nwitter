import React, { useState } from "react";
import Router from 'components/Router';
import { authService } from 'fBase';

const App = (() => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <div>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwiiter</footer>
    </div>
  );
}) 

export default App;
