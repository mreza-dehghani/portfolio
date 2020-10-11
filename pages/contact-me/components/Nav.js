import React, { Component } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="_contact_me_navbar">
                    <nav className="_navbar_container container">
                        <div className="_logo">
                            <img src="/img/mf-logo.svg" alt="mf-logo" />
                        </div>
                        <div className="_avatar">
                            <img src="/img/mf-avatar.svg" alt="avatar" />
                        </div>
                        <div className="_back">
                            <Link href="/">
                                <a><i className="fa fa-close"></i></a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
