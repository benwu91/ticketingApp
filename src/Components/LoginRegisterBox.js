import React, {Component} from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

class LoginRegisterBox extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a 
                            className="nav-item nav-link active" 
                            id="login-tab" 
                            data-toggle="tab" 
                            href="#login" 
                            role="tab" 
                            aria-selected="true"
                        >
                            Log in
                        </a>
                        <a 
                            className="nav-item nav-link" 
                            id="register-tab" 
                            data-toggle="tab" 
                            href="#register" 
                            role="tab" 
                            aria-selected="false"
                        >
                            Register
                        </a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="login" role="tabpanel">
                        <LoginForm handleSubmit={this.props.handleSubmit}/>                    
                    </div>
                    <div className="tab-pane fade" id="register" role="tabpanel">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginRegisterBox