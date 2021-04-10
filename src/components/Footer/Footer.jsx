import React from 'react';
import "./style.css"
function Footer() {
    return (
        <React.Fragment>
            <div className="blog-footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 m-auto col-10">
                                <div className="newslatter">
                                    <div class="content">
                                        <h6 className="text-center mb-3 mt-5">SUBSCRIBE TO OUR NEWSLETTER</h6>
                                        <div class="input-group">
                                            <input type="email" class="form-control" placeholder="Enter your email" />
                                            <span class="input-group-btn">
                                                <button class="btn btn-default btn-subscribe" type="submit">Subscribe Now</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;