import Link from 'next/link'
import React, { Component } from 'react'
import GetResume from './GetResume'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="_footer">
                    <GetResume />
                    <div className="container">
                        <div className="_logo">
                            <Link href="/">
                                <a>
                                    <img src="/img/mf-logo-white.svg" alt="mf-logo-white" />
                                </a>
                            </Link>                          
                        </div>
                        <h5>
                            {/* Living, learning, leveling up one day at a time. */}
                        </h5>
                        <div className="_link_wrapper">
                            <a href="https://twitter.com/mrezavlb" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/mreza_dehqani/" target="_blank"><i className="fa fa-instagram"></i></a>
                            <a href="mailto:mrezavlb@gmail.com" target="_blank"><i className="fa fa-envelope-o"></i></a>
                            <a href="https://github.com/mreza-dehghani" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="https://t.me/mrezavlb" target="_blank"><i className="fa fa-telegram"></i></a>
                        </div>
                        <p>developed by Mohammadreza</p>
                        <small>
                            <b>&copy; 2020</b>
                        </small>
                    </div>
                </footer>
            </div>
        )
    }
}
