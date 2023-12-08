import pb from "./pocketbase";
import '../App.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  function Button({ text, handleClick }) {
    return <button onClick={handleClick}>{text}</button>;
  }

  function handleLogout() {
    pb.authStore.clear();
    console.log("Logging out");
    window.location.reload(false);
  }

  return (
    <>
      <div className="Navbar">
        <div className="Left">
          <p>logo</p>
        </div>
        <div className="Right">
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          {pb.authStore.isValid ? <Button text="Logout" handleClick={handleLogout} /> : <Link to="/login">Login/Signup</Link>}
          {pb.authStore.isValid ? <a href="#userSec">User</a> : <></>}
        </div>
      </div>
    </>
  );
}
