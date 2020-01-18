import React, { PureComponent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../styles/Footer.scss"

const EMAIL = "lawrence.j.win@gmail.com"
const ICONS = [
    { link: "https://github.com/lawrencewin", icon: ["fab", "github"] },
    { link: "https://www.linkedin.com/in/lawrence-win", icon: ["fab", "linkedin"] },
    { link: "https://www.instagram.com/larry.lose/", icon: ["fab", "instagram"] },
    { link: "https://twitter.com/larrywin1", icon: ["fab", "twitter"] }
]

class Footer extends PureComponent {

    render () {
        return (
            <div className="footer">
                <div className="footer_email">
                    <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                </div>
                <div className="footer__iconLinks">
                    { ICONS.map( (iconInfo, i) => <FooterIcon key={i} link={iconInfo.link} icon={iconInfo.icon} /> ) }
                </div>
            </div>
        )
    }

}

class FooterIcon extends PureComponent {

    render () {
        return (
            <a href={this.props.link} className="footer__iconLink" target="noreferrer noopener">
                <FontAwesomeIcon icon={this.props.icon} className="footer__icon" />
            </a>
        )
    }

}

export default Footer