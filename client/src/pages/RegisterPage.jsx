import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                email,
                name,
                password
            });
            alert('Registration successfully. Now can log in.')
        } catch (e) {
            alert('Registration failed. Please try again later.')
        }
    }
    return (
        <div className="mt-8 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" 
                        placeholder='John Doe' 
                        className="m-2"
                        value={name} 
                        onChange={ev => setName(ev.target.value)}/>
                    <input type="email" 
                        placeholder='Your@email.com' 
                        className="m-2"
                        value={email} 
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" 
                        placeholder='Password' 
                        className="m-2" 
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}/>
                    <button type="" className="primary m-4">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link className="underline text-black" to={"/login"}>Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}