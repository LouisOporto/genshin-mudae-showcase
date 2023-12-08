import pb from "./pocketbase";
import User from "./user";
//import Auth from "./Auth";
import {}
import { useState } from 'react';

function Button({ text, handleClick }) {
    return <button onClick={handleClick}>{text}</button>;
}


export default function Navbar() {
  function logOut() {
    console.log("Logging out");
    pb.authStore.clear();
    <Navigate />
  }

  // if (pb.authStore.isValid) {
    return (
      <>
        <div className="Navbar">
          <div className="Left">
            <p>logo</p>
          </div>
          <div className="Right">
            {!pb.authStore.valid ? <Button text="Login" handleClick={() => logIn()} /> : <Button text="Logout" handleClick={() => logOut()} />}
          </div>
        </div>
        {/* <User/ > */}
      </>
    );
}
//   } else {
//     return (
//       <>
//         <Auth />
//       </>
//     );
//   }
// }
