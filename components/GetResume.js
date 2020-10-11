import React, { Component } from 'react'

export default class GetResume extends Component {
    render() {
        return (
            <div className="container">
                <div className="_get_resume">
                    <div className="getResumeTitle">
                        <h3>Resume File</h3>
                    </div>
                    <div className="getResumeText">
                        <p>
                            Would you like to see my resume?
                        </p>
                    </div>
                    <div className="getResumeBtn">
                        <a href="#">Let's get this</a>
                    </div>
                </div>
            </div>
        )
    }
}
