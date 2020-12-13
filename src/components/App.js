import React, { useEffect, useState } from "react";
import Router from 'components/Router';
import { authService } from 'fBase';

const App = (() => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }

  return (
    <div>
      {
        init 
        ? <Router refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} />
        : "Initializing..."
      }
      {/* <footer>&copy; {new Date().getFullYear()} Nwiiter</footer> */}
    </div>
  );
}) 

export default App;
