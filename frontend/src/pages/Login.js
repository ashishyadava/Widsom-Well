import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";



const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const navigate = useNavigate();

    function handleSubmit(e) {
        
        e.preventDefault();
        if(username === 'test1' && password === 'password') {
            setUser({ name: 'Test Student', role: 'student'});
            navigate("/student-dashboard");
        } else if(username === 'test2' && password === 'password') {
            setUser({ name: 'Test Admin', role: 'admin'});
            navigate("/admin-dashboard");
        }
            else {
            alert("Invalid credentials");
        }

    }
    

    return ( 
        <div className="form-wrapper">
            
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                
                <br />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Login;