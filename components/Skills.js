import React, { Component } from 'react'

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: {
                languages: [
                    {lang: 'html5', skill_Level: 75},
                    {lang: 'css3', skill_Level: 75},
                    {lang: 'scss', skill_Level: 70},
                    {lang: 'javascript', skill_Level: 65},
                    {lang: 'typescript', skill_Level: 65}
                ],
                frameworks: [
                    {lang: 'bootstrap4', skill_Level: 80},
                    {lang: 'jquery', skill_Level: 70},
                    {lang: 'react js', skill_Level: 70},
                    {lang: 'redux', skill_Level: 65},
                    {lang: 'next js', skill_Level: 60}
                ],
                tools: [
                    {name: 'Git'},
                    {name: 'Github'},
                    {name: 'RWD(Responsive Web Design)'}
                ]
            }
        }
    }

    render() {
        return (
            <div className="_skills">
                <div className="container">
                    <section className="_skills_container">
                        <div className="row">
                            <div className="col-12 col-lg-5 mx-auto">
                                <div className="_content">
                                    <img src="/img/frontend.svg" />
                                    <h3>Languages</h3>
                                    <ul>
                                        {
                                            this.state.skills.languages.map(language => {
                                                return(
                                                    <li key={language.lang}>
                                                        <div className="progress">
                                                            <div className="progress-bar " style={{width: `${language.skill_Level}%`}}>
                                                                {language.lang}
                                                                <span>
                                                                    {language.skill_Level}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 mx-auto">
                                <div className="_content">
                                    <img src="/img/mentor.svg" />
                                    <h3>Frameworks & Librarys</h3>
                                    <ul>
                                        {
                                            this.state.skills.frameworks.map(framework => {
                                                return(
                                                    <li key={framework.lang}>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{width: `${framework.skill_Level}%`}}>
                                                                {framework.lang}
                                                                <span>
                                                                    {framework.skill_Level}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-lg-5 mx-auto">
                                <div className="_content">
                                    <img src="/img/tool.svg" />
                                    <h3>Develope tools</h3>
                                    <ul>
                                        {
                                            this.state.skills.tools.map(tool => {
                                                return(
                                                    <li key={tool.name}>
                                                        {tool.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        )
    }
}

export default Skills