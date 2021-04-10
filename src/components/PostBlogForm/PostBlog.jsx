import React from 'react';
import "./style.css"
function PostBlog() {
    return (
        <React.Fragment>
            <div className="blog-post-form">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Blog Title" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="6" cols="10" />
                    </div>
                    <form>
                        <div class="form-group">
                        <small  class="form-text text-muted">Please Upload Your Picture </small>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </form>

                    <button type="submit" class="btn btn-primary">Blog Post</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default PostBlog;