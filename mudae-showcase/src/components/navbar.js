import pb from "./pocketbase";
import '../App.css';

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
          <a href="#landingSec">Home</a>
          <a href="#aboutSec">About</a>
          {pb.authStore.isValid ? <Button text="Logout" handleClick={handleLogout} /> : <></>}
          {pb.authStore.isValid ? <a href="#userSec">User</a> : <></>}

        </div>
      </div>
    </>
  );
}
