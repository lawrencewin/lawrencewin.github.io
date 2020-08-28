import React, { Component } from "react"
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Nav from "./components/Nav"
import Footer from "./components/Footer"

import routes from "./Routes"

// Adding icons for fontawesome

library.add(fas, fab)

class AnimatedRoutes extends Component {

    render () {
        const location = this.props.location
        return (
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fadeIn"
                    timeout={500}
                >
                    <Switch location={location}>
                        { routes.map((routeObj) => {
                            if (routeObj.isIndex) {
                                return (
                                    <Route exact path={routeObj.path}>
                                        { routeObj.child }
                                    </Route>
                                )
                            }
                            return (
                                <Route path={routeObj.path}>
                                    { routeObj.child }
                                </Route>
                            )
                        }) }
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )
    }

}

const MyRoutes = withRouter(AnimatedRoutes)

class App extends Component {

    render () {
        return (
            <Router>
                <Nav />
                <MyRoutes />
                <Footer />
            </Router>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))