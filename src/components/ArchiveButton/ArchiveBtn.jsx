import React from 'react';
import "./style.css"
import { CgSearch } from "react-icons/cg";
function ArchiveBtn() {
    return (
        <div>
            <div class="input-group search-blog-btn">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control search-input" placeholder="search"/>
                </div>
                <button type="button" class="btn btn-primary btn-search">
                <CgSearch/>
                </button>
            </div>
        </div>
    );
}

export default ArchiveBtn;