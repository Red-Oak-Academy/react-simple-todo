import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextIcon, MediaPlayIcon } from 'react-open-iconic-svg';
import "./TodoEntry.css";
import clsx from "clsx";

const progressNames = {
    "INITIAL": "Angelegt",
    "IN_PROGRESS": "In Bearbeitung",
    "DONE": "Erledigt"
}

class TodoEntry extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        deleteCallback: PropTypes.func.isRequired,
        statusChangedCallback: PropTypes.func.isRequired
    }

    render() {
        return (
                <div className="container shadow bg-white rounded">
                    <div className="row">
                        <div className="col flex-grow-1">

                            <span className={clsx({ "todo-status": true, "done": this.props.status === "DONE" })}>
                                {progressNames[this.props.status]}
                            </span>

                            <h4 className={clsx({ "todo-title": true, "done": this.props.status === "DONE", "active" : this.props.status === "IN_PROGRESS"})}>
                                {this.props.title}
                            </h4>

                        </div>
                        
                        <div className="col flex-grow-0 my-auto">
                            {this.props.status === "INITIAL" &&
                                <button type="button" className="btn btn-primary" onClick={() => this.props.statusChangedCallback("IN_PROGRESS")}>Beginnen</button>}

                            {this.props.status === "IN_PROGRESS" &&
                                <button type="button" className="btn btn-primary" onClick={() => this.props.statusChangedCallback("DONE")}>Abschließen</button>}

                            {this.props.status === "DONE" &&
                                <button type="button" className="btn btn-danger" onClick={this.props.deleteCallback}>Löschen</button>}
                        </div>
                    </div>
                </div>
        )
    }
}

export default TodoEntry