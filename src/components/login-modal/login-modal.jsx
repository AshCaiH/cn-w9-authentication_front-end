import "./login-modal.css"

const LoginModal = (props) => {
    
    return (
        <div className="form">
            <div className="form-section start-section">
            <h2>Login</h2>
            <div className="form-item">Username<input></input></div>
            <div className="form-item">Password<input></input></div>
            <button>Log In</button>
            </div>

            <div className="divider"/>
            
            <div className="form-section end-section">
            <h2>Register</h2>
            <div className="form-item">Username <input></input></div>
            <div className="form-item">Email address <input></input></div>
            <div className="form-item">Password <input></input></div>
            <button>Register</button>
            </div>
        </div>
    )
}

export default LoginModal
