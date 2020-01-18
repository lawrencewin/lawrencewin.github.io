import React from "react"

import Resume from "../components/Resume"
import "../styles/Home.scss"

function Projects () {

    return (
        <div className="body">
            <div className="hero red">
               <div className="contentWrap">
                    <div className="hero__title">My Projects</div>
                    <div className="divider dandelion"></div>
                    <p className="big white">A list of projects I like showing off. Basically a super fancy resume that doesn't kill trees.</p>
                </div> 
            </div>
            <div className="substance">
                <div className="contentWrap">
                    <Resume />
                </div>
            </div>
        </div>
    )

}

export default Projects