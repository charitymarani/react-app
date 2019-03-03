import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/" className="active">Home</Link>
            {" | "}
            <Link to="/about" className="active">About Us</Link>
            {" | "}
            <Link to="/contact" className="active">Contact Us</Link>
        </nav>
    );
};

export default Header;