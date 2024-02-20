import React from "react";
import './product-page.css';
import ProductTabs from "./ProductTab";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProducInfo";
function Inner() {
    return(
        <div className="container bootdey py-5">
            <div className="col-md-12">
            <section className="panel">
                <div className="panel-body row">
                    <ProductGallery />
                    <ProductInfo />
                    <ProductTabs />
                </div>
            </section>
            </div>
        </div>
    )
}

export default Inner