import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NewEntry extends Component {
    static propTypes = {
        todoAddedCallback: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            currentTitle: ""
        }
    }

    onKeyPress = (e) => {
        if(e.key === "Enter" && this.state.currentTitle !== "") {
            this.props.todoAddedCallback({
                status: "INITIAL",
                title: this.state.currentTitle
            });
            this.setState({currentTitle: ""})
        }
    }

    render() {
        return (
            <input
                type="text"
                className="form-control shadow border-white"
                placeholder="Neues Todo anlegen"
                value={this.state.currentTitle}
                onChange={(e) => this.setState({ currentTitle: e.target.value })}
                onKeyPress={this.onKeyPress}
            />
        )
    }
}


export default NewEntry