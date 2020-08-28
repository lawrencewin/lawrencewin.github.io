import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLoader } from "react-spinners"

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
    const [ loaded, setLoaded ] = useState(false)
    
    // Equivalent to componentDidMount
    useEffect(() => {
        getFoodPosts()
        .then(result => {
            setPosts(result)
            setLoaded(true)
        })
        // Get the posts from the api
    }, [])

    if (!loaded) {
        return <HashLoader css={{ margin: "auto" }} size={60} loading={true} color="#AA7639" />
    } 
    return (
        <div className="foodPosts">
            { posts.map((post, i) => (
            <PostThumb 
                    title={post.title} 
                    thumbnail={post.thumbnail} 
                    id={post.id}
                />
            )) }
        </div>
    )

}

export default FoodPostList