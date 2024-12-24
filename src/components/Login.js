import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login form submission logic here
        console.log('User logged in:', form);
    };

    return (
        <div><center>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
                <br /><br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <br /><br />
                <button type="submit">Login</button>
            </form></center>
        </div>
    );
}

export default Login;
