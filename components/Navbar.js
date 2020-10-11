import React, { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {

    render() {
        return (
            <div className="_navbar wrapper">
                <div className="_logo">
                    <div>
                        <Link href="/">
                            <a>
                                <img src='/img/mf-logo.svg' alt="mf-logo" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="_nav">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/contact-me"><a>Conatct me</a></Link>
                            </li>
                            {/* <li className="">
                                <Link href="#"><a>Tips</a></Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar