import { Outlet, Navigate, Link } from "react-router-dom";
import pb from "../components/pocketbase";
import Navbar from "../components/navbar";
import Auth from "../components/Auth";
import User from "../components/user";

const NoLoginRoutes = () => {
  console.log(pb.authStore.isValid);
  // function Login() {
  //   console.log("Logging In");
  //   return (
  //     <>
  //       <p>hi</p>
  //       <Navigate to="/login" />
  //     </>
  //   );
  // }

  // function Logout() {
  //   console.log("Logging Out");
  //   return (
  //     <>
  //       <p>hi</p>
  //       <Navigate to="/logout" />
  //     </>
  //   );
  // }

  return (
    !pb.authStore.isValid ? <Outlet/> : <Navigate to='/home'/>
  );
}

export default NoLoginRoutes;
