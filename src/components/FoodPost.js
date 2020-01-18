import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { getFoodPostById} from "../Firebase"
import "../styles/Food.scss"

function parseContent (content) {
    return content.map((item, i) => {
        let result
        switch (item.type) {
            case "paragraph": {
                result = <p key={i}>{item.content}</p>
                break
            }
            case "header": {
                switch (item.level) {
                    case 1: {
                        result = <h1 key={i}>{item.content}</h1>
                        break
                    }
                    case 2: {
                        result = <h2 key={i}>{item.content}</h2>
                        break
                    }
                    case 3: {
                        result = <h3 key={i}>{item.content}</h3>
                        break
                    }
                    default: {
                        result = null
                        break
                    }
                }
                break
            }
            case "list": {
                if (item.ordered === true) {
                    result = (
                        <ol key={i}>
                            { item.items.map((listItem, i) => <li key={i}>{listItem}</li>) }
                        </ol>
                    )
                } else {
                    result = (
                        <ul key={i}>
                            { item.items.map((listItem, i) => <li key={i}>{listItem}</li>) }
                        </ul>
                    )
                }
                break
            }
            case "image": {
                result = (
                    <div className="imageWrap">
                        { item.items.map((image, i) => <div className="imageWrap__flexCon"><img src={image.src} alt={image.alt} /></div>) }
                    </div>
                )
                break
            }
            default: {
                return null
            }
        }
        return result
    })
}

function FoodPost () {
    const { id } = useParams()
    const [ post, setPost ] = useState(null)

    useEffect( () => {
        window.scrollTo(0, 0)
        getFoodPostById(id)
        .then(result => {
            setPost(result)
        })
    }, [id])

    if (post === null) return null

    return (
        <div className="body">
            <div className="contentWrap">
                <div className="backButton">
                    <Link to="/food">
                        <FontAwesomeIcon icon={"arrow-left"} />
                    </Link>
                </div>
                <div className="post">
                    <div className="post__header">
                        <div className="post__thumbnail">
                            <img src={post.thumbnail} alt="some food" />
                        </div>
                        <div className="post__head">
                            <div className="post__title">{post.title}</div>
                            <div className="post__author">By {post.author}</div>
                            <div className="post__date">{(new Date(post.date)).toLocaleDateString()}</div>
                        </div>
                    </div>
                    <div className="post__content">
                        { parseContent(post.content) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodPost