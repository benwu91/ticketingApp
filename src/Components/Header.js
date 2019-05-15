import React, {Component} from "react"
import LoginRegisterBox from "./LoginRegisterBox"

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Ticketing App</h1>
                { this.props.state.isLoggedIn ? 
                    <button type="button" className="btn btn-primary" onClick={this.props.handleLogout}>Log out</button> :
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginRegisterBox">
                        Log in / Register
                    </button>
                }

                <div className="modal fade" id="loginRegisterBox" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <LoginRegisterBox handleSubmit={this.props.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;