import React from "react";

const Post = (props) => {
        return(
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/640/480/any" alt="" />
                </div>
                <div className="content">
                    <div className="title">{props.data.title}</div>
                    <div className="desc">{props.data.body}</div>
                    <button className="btn-remove" onClick={() => props.delete(props.data.id)}>Delete</button>
                    <button className="btn-update" onClick={() => props.update(props.data)}>Update</button>
                </div>
            </div>
        )
}

///kalau ikut yg biasa -> {props.title},{props.desc}
export default Post;