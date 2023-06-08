import React from "react";

function Header(props) {
    let linkName = props.linkName;
    let url = props.url;
    
    return (
            <span>
            {<a href={url}> | {linkName} | </a>}
            </span>
    )
}

export default Header;