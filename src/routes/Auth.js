import { authService } from "fBase";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (e) => {
    const { target: {name, value} } = e;

    if(name === 'email') setEmail(value);
    else if(name === 'password') setPassword(value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;
      if(newAccount) {
      // create Account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // Log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with gitHub</button>
      </div>
    </>
  );
};

export default Auth;
