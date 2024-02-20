import React from "react";

function Cart() {
    return (
    <div className="cart-container">
        <button type="button" className="btn btn-dark position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    </div>
    )
}
export default Cart