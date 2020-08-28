import React from "react"
import Home from "./containers/Home"
import Food from "./containers/Food"
import Projects from "./containers/Projects"

class RouteObject {
    constructor (path, name, child, color, isIndex = false) {
        this.path = path
        this.name = name
        this.child = child
        this.color = color
        this.isIndex = isIndex
    }
}

const routes = [
    new RouteObject("/", "Home", <Home />, "black", true),
    new RouteObject("/projects", "Projects", <Projects />, "red"),
    new RouteObject("/food", "My Food", <Food />, "yellow")
]

export default routes