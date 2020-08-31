import React from "react"
import Home from "./containers/Home"
import Food from "./containers/Food"
import Projects from "./containers/Projects"

function RouteObject (path, name, child, color, isIndex = false) {
    this.type = "internal"
    this.path = path
    this.name = name
    this.child = child
    this.color = color
    this.isIndex = isIndex
}

function LinkObject (name, url) {
    this.type = "external"
    this.name = name
    this.url = url
}

const routes = [
    new RouteObject("/", "Home", <Home />, "black", true),
    new RouteObject("/projects", "Projects", <Projects />, "red"),
    new RouteObject("/food", "My Food", <Food />, "yellow"),
    new LinkObject("My GitHub", "https://github.com/lawrencewin/"),
    new LinkObject("SWE Blog", "https://medium.com/cs373-fall-2020-larry-win")
]

export default routes