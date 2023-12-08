import pb from "./pocketbase";
import User from "./user";
import Auth from "./Auth";
import { useState } from 'react';

function Button({ text, handleClick }) {
    return <button onClick={handleClick}>{text}</button>;
}


export default function Navbar() {
  const [loading, setLoading] = useState(true);
  function logOut() {
    console.log("Logging out");
    pb.authStore.clear();
    setLoading(false);
  }

  if (pb.authStore.isValid) {
    return (
      <>
        <div className="Navbar">
          <div className="Left">
            <p>logo</p>
          </div>
          <div className="Right">
            {/* <Button text="My page"/> */}
            {/* <Button text="Showcase"/> */}
            <Button text="Login" />
            <Button text="Logout" handleClick={() => logOut()} />
          </div>
        </div>
        <User/ >
      </>
    );
  } else {
    return (
      <>
        <Auth />
      </>
    );
  }
}
