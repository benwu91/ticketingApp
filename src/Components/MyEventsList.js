import React, {Component} from "react"
import MY_EVENTS from "../data/myEvents"
import Event from "./Event"

class MyEventsList extends Component {
    render() {
        return(
            <div>
                <div>
                    {
                        MY_EVENTS.map(EVENT => {
                            return(
                                <Event key={EVENT.id} event={EVENT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MyEventsList