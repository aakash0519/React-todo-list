import React from "react";

function ProductGallery() {
    return (
        <div className="col-md-6">
            <div className="pro-img-details">
                <img src="https://www.bootdey.com/image/550x380/FFB6C1/000000" alt="" />
            </div>
            <div className="pro-img-list">
                <a href="/">
                    <img src="https://www.bootdey.com/image/115x100/87CEFA/000000" alt="" />
                </a>
                <a href="/">
                    <img src="https://www.bootdey.com/image/120x100/20B2AA/000000" alt="" />
                </a>
                <a href="/">
                    <img src="https://www.bootdey.com/image/115x100/FF7F50/000000" alt="" />
                </a>
                <a href="/">
                    <img src="https://www.bootdey.com/image/115x100/20B2AA/000000" alt="" />
                </a>
            </div>
        </div>
    )
}

export default ProductGallery