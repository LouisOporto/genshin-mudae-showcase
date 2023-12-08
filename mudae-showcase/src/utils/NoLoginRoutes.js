import { Outlet, Navigate, Link } from "react-router-dom";
import pb from "../components/pocketbase";
import Navbar from "../components/navbar";
const NoLoginRoutes = () => {
console.log(pb.authStore.isValid);
    return (
        <>
            <Navbar />
            {!pb.authStore.isValid ? <Navigate to="/home"/> : <Link to="/home">Go</Link>}
            <Outlet />
        </>
    );
}

export default NoLoginRoutes;