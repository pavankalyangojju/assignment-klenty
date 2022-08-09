import React from "react"
import "./homepage.css"
import Comments  from "../comments/Comments"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <Comments/>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage