import { useContext } from "react";
import { UserContext } from "../UserContext";
import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    
    const Navigate = useNavigate();
    const { user } = useContext(UserContext);
    
    if( !user.role ) {
        Navigate("/login")
    }

    return ( 
        user.role === 'student' ? 
        <StudentDashboard /> :
        <AdminDashboard />
     );
}
 
export default Dashboard;