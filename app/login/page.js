"use client"

export default function Login() {
    return (
        <div className="login">
            <div>
                <label>Email</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
            </div>
            <button>Login</button>
        </div>
    );
}