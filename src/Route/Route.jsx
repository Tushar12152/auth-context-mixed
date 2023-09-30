import { Outlet } from "react-router-dom";
import NAv from "../component/nav/NAv";

const Route = () => {
    return (
        <div>
             <NAv></NAv>
             <Outlet></Outlet>
        </div>
    );
};

export default Route;