import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLayout = () => {
    return ( 
        <div>
            <header>
                <h1>Wisdom Well</h1>
                <nav>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="students">Students</Link></li>
                        <li><Link to="books">Books</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default AdminLayout;