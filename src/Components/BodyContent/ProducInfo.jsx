import React from "react";

function ProductInfo() {
    return (
        <div className="col-md-6">
            <h4 className="title">
                <a href="/" className="">
                    Leopard Shirt Dress
                </a>
            </h4>
            <p>
                Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
            </p>
            <div className="product_meta">
                <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="/">Jackets</a>, <a rel="tag" href="/">Men</a>, <a rel="tag" href="/">Shirts</a>, <a rel="tag" href="/">T-shirt</a>.</span>
                <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="/">mens</a>, <a rel="tag" href="/">womens</a>.</span>
            </div>
            <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">$544</span>  <span className="pro-price"> $300.00</span></div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="quantiy" placeholder="1" className="form-control quantity" />
            </div>
            <p>
                <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
            </p>
        </div>
    )
}

export default ProductInfo