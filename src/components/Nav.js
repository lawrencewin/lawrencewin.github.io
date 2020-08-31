import React, { Component } from "react"
import { NavLink as Link, withRouter } from "react-router-dom"

import routes from "../Routes"
import "../styles/Nav.scss"

class Nav extends Component {

    constructor (props) {
        super(props)
        const location = this.props.location
        let curr
        if (location.pathname === "/") {
            curr = routes[0]
        } else {
            curr = routes.find((routeObj, i) => {
                if (i > 0) {
                    return location.pathname.includes(routeObj.path)
                } else {
                    return false
                }
            })
        }
        this.state = {
            curr: curr,
            expanded: false
        }
    }

    handleLinkClick (info) {
        this.setState({ curr: info, expanded: false })
    }

    handleHamburgerClick () {
        const prev = this.state.expanded
        this.setState({ expanded : !prev })
    }

    render () {
        const { curr, expanded } = this.state
        return (
            <div className={`nav ${curr.color}`}>
                <div className="nav__flexCon">
                    <div className="nav__hamburgerCon">
                        <div className={ expanded ? "nav__hamburger on" : "nav__hamburger" } onClick={() => this.handleHamburgerClick()}>
                            <div className="nav__hamburgerBar"></div>
                            <div className="nav__hamburgerBar"></div>
                            <div className="nav__hamburgerBar"></div>
                        </div>
                    </div>
                    <div className={ expanded ? "nav__options expanded" : "nav__options"}>
                        {routes.map((routeObj, i) => {
                            if (routeObj.type === "internal")
                                return <Link key={i} to={routeObj.path} onClick={() => this.handleLinkClick(routeObj)}>{routeObj.name}</Link>
                            else if (routeObj.type === "external")
                                return <a key={i} href={routeObj.url} rel="noopener noreferrer" target="_blank">{routeObj.name}</a>
                            else
                                return null
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Nav)