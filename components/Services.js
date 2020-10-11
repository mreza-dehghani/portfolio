import React, { Component } from 'react'
import Service from './Service'

export default class Services extends Component {
    constructor(  ) {
        super()
        this.state = {
            services: [
                {
                    title: "Front-end Developer",
                    description: "With no doubt, intuitive web interface adapted to users needs and expectations has enormous impact on the way potential customers perceive the product or the service. It can both make it sexy or kill it straight away. Using HTML, CSS, JavaScript and its frameworks, experienced frontend developers can truly make miracles!",
                    id: 1
                },
                {
                    title: "Web Developer",
                    description: "Fronted is all about what users see and can interact with. It focuses on building a clean user experience based on unrivalled, trendy and creative design of graphics and interfaces. On the other side, backend development is responsible for the server-side. It covers the part of the system users can’t interact with, meaning the business logic and architecture of the application behind the shiny frontend. It prepares and manages data that is to be presented.",
                    id: 2
                },
                {
                    title: "React-js Developer",
                    description: "React is one of the best frontend tools for building web user interfaces. It has a component-based architecture, which means we can reuse code and create component libraries. This saves significant time and money on web development.React, with its powerful composition model, allows us to reuse code for our applications. We create diverse and reusable components and assemble existing ones in various combinations. This strategy reduces software development time, making it faster and more affordable to release a web application.",
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div className="_services">
                <div className="container">
                    <h1>What can I do?</h1>
                    <div className="_service_container row">
                        {
                            this.state.services.map(serv => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4" key={serv.id}>
                                        <Service 
                                            title={serv.title}
                                            description={serv.description}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
