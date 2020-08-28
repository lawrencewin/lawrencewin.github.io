import React from "react"

import "../styles/Home.scss"
import me from "../assets/me.jpg"

const RESUME_LINK = "https://docs.google.com/document/d/1oGpQyAf58F5WoXOZeqRM758_MNwOcquLO0Pk3pWYSWM/edit?usp=sharing"

function Home () {

    return (
        <div className="body">
            <div className="hero">
               <div className="contentWrap">
                    <div className="hero__title">Hi, I'm Lawrence.</div>
                    <div className="hero__subtitle">(But Call Me Larry)</div>
                    <div className="divider dandelion"></div>
                    <p className="big white">You can download and view my resume by <a href={RESUME_LINK} rel="noopener noreferrer" target="_blank">clicking this link</a>.</p>
                </div> 
            </div>
            <div className="substance">
                <div className="contentWrap">
                    <h2>About Me</h2>
                    <div className="substance__flexWrap">
                        <div className="substance__text">
                            <p className="big">My full name is Lawrence Jefferson Win, but I tend to go by Larry. I study computer science at <span className="hookem">UT Austin <span role="img" aria-label="hookem emoji">🤘</span></span> and am a part of the class of 2022. I'm a full stack web developer with a few projects under my belt, and I'm open to learning tons of new technologies!</p>
                            <p className="big">In my free time, I'm a political junkie, an quarantine home cook (add me on instagram <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/larrys.lunch.house/">@larrys.lunch.house</a>), and a Gold 4 Rumble Main in League of Legends (add me @dehunter456)!</p>
                        </div>
                        <div className="substance__image">
                            <img src={me} alt="My beautiful face." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Home