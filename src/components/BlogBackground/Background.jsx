import React from 'react';
import "./style.css"
function Background() {
    return (
        <React.Fragment>
            <div className="blog-background-main-div">
                <div className="blog-background">
                </div>
                <div className="blog-background-inner-div">
                    <div className="inner-div-title">
                    <div className="blog-title">
                            <p
                                className="header__logo"
                                style={{
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    marginTop: "10px",
                                }}><span
                                    style={{
                                        color: "#4bd80a",
                                        marginTop: "0px",
                                        fontSize: "50px",
                                        marginRight: ".15rem",
                                    }}
                                >G</span>
                                <span className="header_name" style={{
                                    color: "white",
                                }}>etRightProperty.Com</span>
                            </p>
                        </div>
                        {/* <div className="blog-title">Get Right Property</div> */}
                        <div className="blog-quets mt-3">"The more you learn, the more you earn.” And if “there’s no better way to learn than to do"</div>
                        <button className="btn  blog-click-btn">Click Me</button>
                    </div>
                
                </div>
            </div>
        </React.Fragment>
    );
}

export default Background;