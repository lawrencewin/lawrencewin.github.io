import React, { Component } from "react"
import PropTypes from "prop-types"

import { getResumeItems } from "../Firebase.js"
import "../styles/Resume.scss"

const PRESENT = { present: "PRESENT" }

function formatDate (date) {
    if (date === PRESENT ) {
        return "Present"
    }
    return date.toLocaleDateString("en", {
        year: "numeric",
        month: "long"
    })
}

function ResumeItem (props) {
    let itemClassName = "resumeItem"
    if (props.appendedClasses) {
        itemClassName += " " + props.appendedClasses.reduce((prev, curr) => {
            (prev)
            (curr)
            return `${prev} ${curr}`
        })
    }
    let dateString
    if (props.date1 && props.date2) {
        // Put date range here
        dateString = `${formatDate(props.date1)} — ${formatDate(props.date2)}`
    } else {
        // Put single date here
        dateString = `${formatDate(props.date1)}`
    }
    return (
            <div className={ itemClassName } >
                <div className="resumeItem__header">
                    <div className="resumeItem__title">{props.title}</div>
                    <div className="resumeItem__date">{dateString}</div>
                </div>
                <div className="resumeItem__body">
                    {props.children}
                </div>
            </div>
    )
}

ResumeItem.propTypes = {
    appendedClasses: PropTypes.array,
    date1: PropTypes.object,
    date2: PropTypes.object,
    title: PropTypes.string.isRequired
}

function ProjectItem (props) {
    return (
        <ResumeItem
            title={props.title}
            date1={props.date}
            appendedClasses={["project"]}
        >
            <div className="resumeItem__blurb">
                <div>{props.blurb}</div>
                { props.projectLink ? <a href={props.projectLink} target="noreferrer noopener">View Project</a> : null }
            </div>
        </ResumeItem>
    )
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    blurb: PropTypes.string.isRequired,
    projectLink: PropTypes.string
}

function ExperienceItem (props) {
    return (
        <ResumeItem
            title={props.title}
            date1={props.start}
            date2={props.end ? props.end : null}
            appendedClasses={["experience"]}
        >
            <div className="resumeItem__blurb">{props.blurb}</div>
            { props.projectLink ? <a href={props.projectLink} target="noreferrer noopener">View Project</a> : null }
        </ResumeItem>
    )
}

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    start: PropTypes.object.isRequired,
    end: PropTypes.object,
    blurb: PropTypes.string.isRequired,
    projectLink: PropTypes.string
}

function EducationItem (props) {
    return (
        <ResumeItem
            title={props.school}
            date1={props.start}
            date2={props.end ? props.end : null}
            appendedClasses={["education"]}
        >
            <div className="resumeItem__blurb">
                <div className="education__gpa">Cumulative GPA: {props.gpa}</div>
                <div className="education__classes">Classes: {props.classes.reduce((prev, curr) => prev + ", " + curr)}</div>
            </div>
        </ResumeItem>
    )
}

EducationItem.propTypes = {
    school: PropTypes.string.isRequired,
    start: PropTypes.object.isRequired,
    end: PropTypes.object,
    gpa: PropTypes.number.isRequired,
    classes: PropTypes.array.isRequired
}

class Resume extends Component {

    constructor (props) {
        super(props)
        this.state = {
            experiences: [],
            projects: [],
            organizations: [], 
            education: []
        }
    }

    async componentDidMount () {
        const items = await getResumeItems()
        this.setState({
            experiences: items.filter(item => item.type === "experience").sort((a, b) => b.start - a.start),
            projects: items.filter(item => item.type === "project").sort((a, b) => b.date - a.date),
            organizations: items.filter(item => item.type === "organization").sort((a, b) => b.start - a.start),
            education: items.filter(item => item.type === "education").sort((a, b) => b.start - a.start)
        })
    }

    render () {
        const { experiences, projects, organizations, education } = this.state
        return (
            <div className="resume">
                { education.length > 0 ? (<div className="resume__education">
                    <h2>Education</h2>
                    { education.map((education, i) => {
                        return (
                        <EducationItem
                            key={i} 
                            school={education.school}
                            start={education.start} 
                            end={education.end}
                            gpa={education.gpa} 
                            classes={education.classes}
                        />)
                    }) }
                </div>) : null }
                { experiences.length > 0 ? (<div className="resume__experience">
                    <h2>Work Experience</h2>
                    { experiences.map((exp, i) => {
                        return (
                        <ExperienceItem 
                            key={i} 
                            title={exp.title}
                            start={exp.start} 
                            end={exp.end ? exp.end : PRESENT}
                            blurb={exp.blurb} 
                            projectLink={exp.projectLink}
                        />)
                    }) }
                </div>) : null}
                { projects.length > 0 ? (<div className="resume__projects">
                    <h2>Projects</h2>
                    { projects.map((project, i) => {
                        return (
                        <ProjectItem 
                            key={i} 
                            title={project.title}
                            date={project.date} 
                            blurb={project.blurb} 
                            projectLink={project.projectLink}
                        />)
                    }) }
                </div>) : null }
                { organizations.length > 0 ? (<div className="resume__experience">
                    <h2>Organizations</h2>
                    { organizations.map((exp, i) => {
                        return (
                        <ExperienceItem 
                            key={i} 
                            title={exp.title}
                            start={exp.start} 
                            end={exp.end ? exp.end : PRESENT}
                            blurb={exp.blurb} 
                            projectLink={exp.projectLink}
                        />)
                    }) }
                </div>) : null }
            </div>
        )
    }

}

export default Resume