import React, { useState } from "react";
function PageContent(props) {
    //about the subsection passed in props
    const [pagename] = useState(props.pagename);
    const [pageloc] = useState(props.pageloc);
    const [pageid] = useState(props.pageid);
    //data of a particular subsection retrieved from the loc
    const [datas] = useState(require('./../db/' + pageloc));
    const [subLen] = useState(datas.length);
    const [subPagenum, setSubPagenum] = useState(0);
    const [viewType, setViewType] = useState(subLen > 1 ? "imageView" : "textView")
    const incrementCount = () => {
        setSubPagenum((subPagenum + 1) % datas.length);
    }
    const decrementCount = () => {
        setSubPagenum((datas.length + subPagenum - 1) % datas.length);
    }
    const subImageClick = (event, idx) => {
        console.log(event);
        setSubPagenum(idx);
        setViewType("textView");
    }
    const getPics = (activePage) => {
        var picloc = datas[activePage].pics;
        return (
            <div className="page_content_image" onClick={(event) => subImageClick(event, activePage)}>
                <img src={"/assets/" + picloc} alt=""></img>
            </div>
        );
    }
    return (
        <div id={pageid} className="page_content ">
            <div className="page_content_container container">
            <div className="page_content_header">
                        <h3>{pagename}</h3>
                        <div className="page_content_header_icons">
                            {
                                ["text", "multi", "image"].map((element) => {
                                    var name = element + "View"
                                    var isDisabled = (viewType === name ? " activeIcon" : " disabledIcon") + " "
                                    var assetURL = "/assets/" + name + ".svg"
                                    return (
                                        <img className={name + "_icon" + isDisabled} src={assetURL} 
                                            onClick={()=>setViewType(name)} alt={name} />
                                    );
                                })
                            }

                        </div>
                    </div>
                <div className="page_content_flexbox">
                    <div className="page_content_prev" onClick={decrementCount}>
                        <img className="page_content_icon" alt="" src="/assets/next-arrow.svg" ></img>
                    </div>
                    <div className="page_content_data_container">
                        <div className="page_content_data" hidden={viewType !== "textView"}>

                            {datas[subPagenum].content}

                        </div>
                        {(viewType === "imageView") ? [...Array(subLen>3?3:subLen).keys()].map((element, index) => {
                            var activePage = (subPagenum + index) % subLen;
                                  return getPics(activePage)
                        }) : getPics(subPagenum)
                        }

                    </div>

                    <div className="page_content_next" onClick={incrementCount}>
                        <img className="page_content_icon" src="/assets/next-arrow.svg" alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default PageContent;