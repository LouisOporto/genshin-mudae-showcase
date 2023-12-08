import { Outlet, Navigate } from "react-router-dom";
import pb from "../components/pocketbase";

const NoLoginRoutes = () => {

    return (
        !pb.authStore.isValid ? <Outlet/> : <Navigate to='/home'/>
    );
}

export default NoLoginRoutes;