import React from "react";
import FooterLinks from "./FooterLinks";
import Copyright from "./Copyright";

function Footer() {
    return(
        <footer className="py-5 container-fluid bg-body-tertiary pb-0">
            <FooterLinks />
            <Copyright />
        </footer>
    )
}

export default Footer