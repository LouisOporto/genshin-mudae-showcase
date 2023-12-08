import pb from './pocketbase';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Navbar from "../components/navbar";


export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [mode, setMode] = useState("Log In:");
  const [changer, setChanger] = useState("Create an account?")
  const [control, setControl] = useState("Login");

  function handleAuth() {
    if (mode == "Log In:") {
      setMode("Sign Up");
      setChanger("Nevermind");
      setControl("Signup");
    } else {
      setMode("Log In:");
      setChanger("Create an account?");
      setControl("Login");
    }
  }

  async function Authenticate(data) {
    if (mode == "Log In:") {
      const authData = await pb.collection("users").authWithPassword(data.email, data.password);
      console.log(authData);
      window.location.reload(false);
    } else {
      const newAcc = await pb.collection("users").create({
        email: `${data.email}`,
        password: `${data.password}`,
        passwordConfirm: `${data.password}`,
      });
      const authData = await pb.collection("users").authWithPassword(data.email, data.password);
      console.log(authData);
      window.location.reload(false);
    }
  }

  return (
    <>
      <Navbar/>
      <div className="App">
        <h1>{mode}</h1>

        <form onSubmit={handleSubmit(Authenticate)}>
          <input type="text" placeholder="email" {...register("email")} />
          <input type="password" placeholder="password" {...register("password")} />

          <button type="submit">{control}</button>
        </form>
        <button id="createAccount" onClick={() => handleAuth()}>{changer}</button>

      </div>
    </>
  );
}
