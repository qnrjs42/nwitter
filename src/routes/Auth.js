import { authService, firebaseInstance } from "fBase";
import React, { useState } from "react";

import AuthForm from '../components/AuthForm';

const Auth = () => {
  const onSocialClick = async (e) => {
    const { target: {name} } = e;
    let provider;

    if(name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if(name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }

  return (
    <>
    <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with gitHub</button>
      </div>
    </>
  );
};

export default Auth;
