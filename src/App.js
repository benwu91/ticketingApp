import React, { Component } from "react"
import Header from "./Components/Header"
import MemberContent from "./MemberContent"
import HomePage from "./HomePage"

// modal for popups

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            username: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    // Need to implement proper login authorisation and logout
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogout(event) {
        event.preventDefault()
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            this.state.isLoggedIn ? 
                <div>
                    <Header state={this.state} handleLogout={this.handleLogout} />
                    <MemberContent state={this.state} />
                </div> :
                <div>
                    <Header state={this.state} handleSubmit={this.handleSubmit}/>
                    <HomePage />
                </div>
        )
    }
}

export default App