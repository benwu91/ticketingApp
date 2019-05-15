import React, {Component} from "react"

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="loginUsername">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="loginUsername" 
                        placeholder="Username"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="loginPassword">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="loginPassword" 
                        placeholder="Password" 
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Log in                
                </button>
            </form>
        )
    }
}

export default LoginForm