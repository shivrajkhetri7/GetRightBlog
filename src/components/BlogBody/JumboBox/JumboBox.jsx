import React from 'react';
import "./style.css"
import facebook from "./Assets/facebook.png"
import twitter from "./Assets/twitter.png"
import googleplus from "./Assets/google-plus.png"
import instagram from "./Assets/instagram.png"
import imgsrc from "./Assets/blog-img.jpg"
function JumboBox() {
    return (
        <React.Fragment>
            <div className="Jumbo-card">
                <div className="Jumbo-img">
                    <img src={imgsrc} className="jumbo-card-image" alt="lorem image"></img>
                </div>
                <div className="jumbo-inner-container">
                    <div className="Jumbo-title">
                        Get Right Property
                </div>
                    <div className="jumbo-links">
                        <small class="form-text text-muted">Posted On : 09 <sup>th</sup> Apr 2021</small>
                        <small class="form-text text-muted">Posted by : R P clan</small>
                        <div className="social-media">
                            <a href="/"> <img src={facebook} alt="facebook" title="facebook" /></a>
                            <a href="/"><img src={twitter} alt="twitter" title="twitter" /></a>
                            <a href="/"><img src={googleplus} alt="googleplus" title="googleplus" /></a>
                            <a href="/"><img src={instagram} alt="instagram" title="instagram" /></a>
                        </div>
                    </div>

                    <div className="Jumbo-text">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                </div>
                    <div className="Jumbo-footer">
                        <button className="btn jumbo-box-blog-btn">Read All</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default JumboBox;