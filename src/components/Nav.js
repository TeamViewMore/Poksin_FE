import React from "react";
import * as N from "../styles/components/NavStyle";

import right from "../img/right.png"

function Nav({ pagename, onClick }) {
    return (
        <N.NavBox onClick={onClick}>
            <div>{pagename}</div>
            <img src={right} alt='바로가기' />
        </N.NavBox>
    );
}

export default Nav;