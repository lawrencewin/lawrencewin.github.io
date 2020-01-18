import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"

import FoodPostList from "../components/FoodPostList"
import FoodPost from "../components/FoodPost"

import "../styles/Home.scss"

function Food () {

    const { path } = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path}>
                <FoodDefault />
            </Route>
            <Route path={`${path}/:id`}>
                <FoodPost />
            </Route>
        </Switch>
    )

}

function FoodDefault () {
    return (
        <div className="body">
            <div className="hero yellow">
               <div className="contentWrap">
                    <div className="hero__title">Food Pictures</div>
                    <div className="divider dandelion"></div>
                    <p className="big white">Food I've eaten that I really really enjoy.</p>
                </div> 
            </div>
            <div className="substance">
                <div className="contentWrap">
                    <FoodPostList />
                </div>
            </div>
        </div>
    )
}

export default Food