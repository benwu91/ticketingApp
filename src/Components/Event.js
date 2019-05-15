import React, {Component} from "react"

class Event extends Component {
    render() {
        const { id, title, description, date, beginTime, endTime, address } = this.props.event

        return(
            <div className="card">
                <a 
                    data-toggle="collapse" 
                    href={"#collapseEvent"+id}
                    role="button" 
                    aria-expanded="false"
                ><h5 className="card-header">{title}</h5>
                </a>
                <div className="card-body">
                    <h6 className="card-title">{date}</h6>
                </div>
                <div className="collapse" id={"collapseEvent"+id}>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <p>Time: {beginTime}-{endTime}</p>
                        <p>Address: {address}</p>
                        {this.props.isLoggedIn && <button className="btn btn-primary">Book</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Event