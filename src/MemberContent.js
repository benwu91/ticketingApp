import React, {Component} from "react"
import UpcomingEventsList from "./Components/UpcomingEventsList"
import AddEventForm from "./Components/AddEventForm"
import MyEventsList from "./Components/MyEventsList"

class MemberContent extends Component {
    render() {
        return(
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a 
                            className="nav-link active" 
                            id="upcoming-events-tab" 
                            data-toggle="tab" 
                            href="#upcoming-events" 
                            role="tab"
                            aria-selected="true"
                        >
                            Upcoming Events
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className="nav-link" 
                            id="my-events-tab" 
                            data-toggle="tab" 
                            href="#my-events" 
                            role="tab" 
                            aria-selected="false"
                        >
                            My Events
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className="nav-link" 
                            id="add-events-tab" 
                            data-toggle="tab" 
                            href="#add-events" 
                            role="tab" 
                            aria-selected="false"
                        >
                            Add Event
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="upcoming-events" role="tabpanel" aria-labelledby="upcoming-events-tab">
                        <UpcomingEventsList state={this.props.state}/>
                    </div>
                    <div className="tab-pane fade" id="my-events" role="tabpanel" aria-labelledby="my-events-tab">
                        <MyEventsList state={this.props.state}/>
                    </div>
                    <div className="tab-pane fade" id="add-events" role="tabpanel" aria-labelledby="add-events-tab">
                        <AddEventForm state={this.props.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberContent