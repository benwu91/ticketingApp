import React, {Component} from "react"

class RegisterForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="registerUsername">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="registerUsername" 
                        placeholder="Username"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="registerEmail">
                        Email address
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="registerEmail" 
                        placeholder="Email@address.com" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="registerPassword">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="registerPassword" 
                        placeholder="Password" 
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Register               
                </button>
            </form>
        )
    }
}

export default RegisterForm