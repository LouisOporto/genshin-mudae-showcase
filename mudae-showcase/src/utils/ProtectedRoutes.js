import { Outlet, Navigate } from "react-router-dom";
import pb from "../components/pocketbase";

const PrivateRoutes = () => {

    return (
      pb.authStore.isValid ? <Outlet/> : <Navigate to='/'/>
    );
}

export default PrivateRoutes;
