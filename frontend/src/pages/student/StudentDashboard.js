import { Outlet } from "react-router-dom";


const StudentDashboard = () => {
    return ( 
        <div>
            <Outlet />
            <h1>Your borrowed books go here!</h1>
        </div>
     );
}
 
export default StudentDashboard;