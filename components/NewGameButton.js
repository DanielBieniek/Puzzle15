import React, { Component } from 'react'

export default class NewGameButton extends Component {
    render() {
        return (
            <div className="NewGameButton" onClick={this.props.onClick}>
                New Game
            </div>
        )
    }
}
