import React, {Component} from "react"

class AddEventForm extends Component {
    render() {
        return(
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Event Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Event Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="text" className="form-control" id="date" placeholder="DD/MM/YYYY" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="date">Time (24HR)</label>
                        <input type="text" className="form-control" id="beginTime" placeholder="Event Start - 00:00" />
                        <input type="text" className="form-control" id="endTime" placeholder="Event End - 23:59" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Street Address, Suburb" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Event Description</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEventForm