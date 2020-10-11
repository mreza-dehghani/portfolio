import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="_header">
                <header>
                    <h1>Front-end Developer</h1>
                    <p>
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.                    </p>
                    <div className="_img-wrapper">
                        <img src="/img/mf-avatar.svg" alt="mf-avatar" />
                    </div>
                    <div className="_img-wrapper">
                        <img src="/img/hero.svg" alt="hero" />
                    </div>
                </header>
            </div>
        )
    }
}
