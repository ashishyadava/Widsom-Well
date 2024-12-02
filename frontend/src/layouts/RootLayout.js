import { NavLink } from "react-router-dom";

const RootLayout = () => {
    return ( 
    <div className="root-layout">

        <header>
            <nav>
                <h1>Wisdom Well</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </header>
        
    </div> );
}
 
export default RootLayout;
