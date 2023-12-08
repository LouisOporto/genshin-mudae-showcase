import pb from './pocketbase';
import { useForm } from 'react-hook-form';
//import Navbar from './navbar';

export default function Auth() {
  const { register, handleSubmit } = useForm();
  
  async function Authenticate(data) {

    const authData = await pb.collection("users").authWithPassword(data.email, data.password);
    console.log(authData);
    window.location.reload(false);
  }

  return (
    <>
      <div className="App">
        <h1>Log In:</h1>

        <form onSubmit={handleSubmit(Authenticate)}>
          <input type="text" placeholder="email" {...register("email")} />
          <input type="password" placeholder="password" {...register("password")} />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
