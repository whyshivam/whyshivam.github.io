import React, { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


function PageContent(props) {
    const [pagename] = useState(props.pagename);
    const [pageloc] = useState(props.pageloc);
    const [pageid] = useState(props.pageid)
    console.log(props.pageloc, props.pagename);
    return (
        <div id={pageid} className="page_content ">
            <div className="page_content_container container">
                <div className="page_content_header"> <h3>{pagename}</h3> </div>
                <div className="page_content_flexbox">
                    <div className="page_content_data">{pageloc}
                        loreumf dsf sdkfldsmkfdklsfjdngfjndslk ngkjdfnkgn dsnkjgnjd s
                        gdfngkj ngkjdfnkgn fdngj define
                    </div>
                    <div className="page_content_image">
                        <img src="src/logo.svg"></img>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default PageContent;