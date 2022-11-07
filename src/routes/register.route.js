import React from 'react';
import { UserContext } from '../context/user/user.context';
import { login } from '../utils/backend/login.backend';

const Register = () => {
    const { setCurrentUser } = React.useContext(UserContext);
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const userResponse = await login(user.email, user.password);
        console.log(userResponse);
        userResponse.data.message ? alert(userResponse.data.message) : setCurrentUser(userResponse.data);
        
    };


    return (
        <div>
            <h1>Sign UP</h1>
            {/* form input>input */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register