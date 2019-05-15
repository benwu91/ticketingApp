import React, {Component} from "react"
import EVENTS from "../data/events"
import Event from "./Event"

class UpcomingEventsList extends Component {
    render() {
        return(
            <div>
                <div>
                    {
                        EVENTS.map(EVENT => {
                            return(
                                <Event 
                                    key={EVENT.id} 
                                    event={EVENT} 
                                    isLoggedIn={this.props.state.isLoggedIn}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UpcomingEventsList