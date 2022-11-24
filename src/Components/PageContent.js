import React, { useState } from "react";


function PageContent(props) {
    const [pagename ] = useState(props.pagename);
    const [pageloc] = useState(props.pageloc);
    const [pageid] =   useState(props.pageid)
    console.log(props.pageloc, props.pagename);
    return ( 
        <div id = {pageid} className="content_container">
            <div className="content_header">{pagename} to change it to dynamic</div>
            <div className="content_data">{pageloc} What is this and why is this about me and also make it dynamic</div>
        </div>
    ) ;

}

export default PageContent;