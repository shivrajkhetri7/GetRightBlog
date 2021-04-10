import React from 'react';
import "./style.css"
// import Cards from "./cards/Card"
import JumboBox from "./JumboBox/JumboBox"
import BlogPost from "../PostBlogForm/PostBlog"
import BlogPostBtn from "../PostBlogForm/PostBlogButton/PostBlogButton"
// import ArchiveBtn from "../ArchiveButton/ArchiveBtn"
function Blogbody() {
    return (
        <React.Fragment>
            <div className="container-fluid blog-body">
                <div className="row">
                    <div className="col-md-9 col-12">
                        <div className="all-cards">
                            <JumboBox />
                            <JumboBox />
                            <JumboBox />
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="blog-post-section">
                            <BlogPostBtn />
                            {/* <ArchiveBtn/> */}
                            <BlogPost />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Blogbody;