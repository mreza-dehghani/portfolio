import React, { Component } from 'react'
import Head from 'next/head'

import Nav from './components/Nav'

export default class Index extends Component {

    openPhone = () => {
        window.open('tel:09367515484')
    }

    openEmail = () => {
        
    }

    render() {
        return (
            <>
                <Head>
                    <title>Contact Me / Mohammadreza Dehghani</title>
                </Head>
                <Nav />
                <div className="container">
                    <div className="_contact_me">
                        <h1>
                            Thanks for taking the time to reach out.
                            How do you want to contact with me?
                        </h1>
                        <div className="_contact_me_tools">
                            <div className="box">
                                <button className="_contact_btn" onClick={this.openPhone} title="phone number...">
                                    <i className="fa fa-phone"></i><br />
                                    phone
                                </button>
                            </div>
                            <div className="box">
                                <a className="_contact_btn" href="mailto:mrezavlb@gmail.com" title="email address...">
                                    <i className="fa fa-envelope-o"></i><br />
                                    gmail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
