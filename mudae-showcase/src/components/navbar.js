import pb from "./pocketbase";
import '../App.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  function Button({ text, handleClick }) {
    return <button className='nav-log'  onClick={handleClick}>{text}</button>;
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
          <img src="https://www.pngall.com/wp-content/uploads/13/Genshin-Impact-Logo-PNG-Picture.png" className='genshin-logo'/>
        </div>
        <div className="Right">
          <Link className="nav-button" to='/about'>About</Link>
          {pb.authStore.isValid ? <Link className="nav-button" to='/home'>{pb.authStore.model.email}</Link> : <></>}
          {pb.authStore.isValid ? <Button text="Logout" handleClick={handleLogout} /> : <Link className="nav-log" to="/login">Login/Signup</Link>}
        </div>
      </div>
    </>
  );
}
