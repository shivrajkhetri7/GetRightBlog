import React from 'react';
import "./style.css"
function PostBlogButton() {
    return (
        <React.Fragment>
            <div className="post-blog-btn">
                <button className="btn btn-default btn-post-blog">Latest Blog Posted</button>
            </div>
        </React.Fragment>
    );
}

export default PostBlogButton;