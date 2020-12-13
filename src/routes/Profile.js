import { authService, dbService } from "fBase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  useEffect(() => {
    getMyNweets();
  }, []);
  
  const onLogOutClick = () => {
    authService.signOut();
    // authService.currentUser.uid
    history.push('/');
  };

  const getMyNweets = async () => {
    const nweets = await dbService
    .collection("nweets")
    .where("creatorId", "==", userObj.uid)
    .orderBy("createdAt")
    .get();

    console.log(nweets.docs.map(doc => doc.data()));
  }

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if(userObj.displayName !== newDisplayName) {
     await userObj.updateProfile({
        displayName: newDisplayName,
      });

      refreshUser();
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          type="text" 
          placeholder="Display Name" 
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
};

export default Profile;
