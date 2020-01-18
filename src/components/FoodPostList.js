import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getFoodPosts } from "../Firebase"
import "../styles/Food.scss"

// Need a FoodPosts component and individual post component
// Post links to variable route


function PostThumb (props) {

    return (
        <Link to={`/food/${props.id}`} className="foodPostThumb">
            <img src={props.thumbnail} className="foodPostThumb__image" alt={`thumbnail of ${props.title}`} />
            <div className="foodPostThumb__label">{props.title}</div>
        </Link>
    )

}

function FoodPostList (props) {

    const [ posts, setPosts ] = useState([])
    
    // Equivalent to componentDidMount
    useEffect(() => {
        getFoodPosts()
        .then(result => {
            setPosts(result)
        })
        // Get the posts from the api
    }, [])

    return (
        <div className="foodPosts">
            {posts.map((post, i) => {
                return <PostThumb 
                        title={post.title} 
                        thumbnail={post.thumbnail} 
                        id={post.id}
                        />
            })}
        </div>
    )

}

export default FoodPostList