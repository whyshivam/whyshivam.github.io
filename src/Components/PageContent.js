import React, { useState } from "react";
import right from "../assets/next-arrow.svg"
function PageContent(props) {
    //about the subsection passed in props
    const [pagename] = useState(props.pagename);
    const [pageloc] = useState(props.pageloc);
    const [pageid] = useState(props.pageid);
    //data of a particular subsection retrieved from the loc
    var datas = require('./../db/' + pageloc);
    const [subLen] = useState(datas.length);
    const [subPagenum, setSubPagenum] = useState(0);
    const incrementCount = () => {
        setSubPagenum((subPagenum + 1) % datas.length);
    }
    const decrementCount = () => {
        setSubPagenum((datas.length + subPagenum - 1) % datas.length);
    }
    const [subContent, setSubContent] = useState(datas[subPagenum].content) 
    console.log(subContent)
    return (
        <div id={pageid} className="page_content ">
            <div className="page_content_container container">
                <div className="page_content_header"> <h3>{pagename}</h3> </div>
                <div className="page_content_flexbox">
                    <div className="page_content_prev" onClick={decrementCount}>
                        <img className="page_content_icon" alt="" src={right} ></img>
                    </div>
                    <div className="page_content_data_container">
                        <div className="page_content_data" hidden={subLen > 1}>

                            {subContent}

                        </div>
                        {
                            datas.map(element => {
                                return (
                                <div className="page_content_image">
                                    <img src={require("../assets/logo.svg")} alt=""></img>
                                </div>);
                            })
                        }

                    </div>

                    <div className="page_content_next" onClick={incrementCount}>
                        <img className="page_content_icon" src={right} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default PageContent;