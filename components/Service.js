import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
            <div className="_service">
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}
