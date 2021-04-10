import React from 'react';
import "./style.css"
function Card() {
    return (
        <div>
            <div className="blog-card">
                <div className="blog-img">

                </div>
                <div className="blog-title">
                        <p>Card Title</p>
                </div>
                <div className="blog-text">
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in </p>
                </div>
                <div className="blog-footer">
                    <button className="btn btn-info">Read All</button>
                </div>
            </div>
        </div>
    );
}

export default Card;