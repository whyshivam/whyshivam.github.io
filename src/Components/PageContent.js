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
    const [imgView, setImgView] = useState(subLen>1)
    const incrementCount = () => {
            setSubPagenum((subPagenum + 1) % datas.length);
    }
    const decrementCount = () => {
            setSubPagenum((datas.length + subPagenum - 1) % datas.length);
    }
    const subImageClick =(idx) =>{
        setSubPagenum(idx);
        setImgView (false); 
    }
    return (
        <div id={pageid} className="page_content ">
            <div className="page_content_container container">
                <div className="page_content_header"> <h3>{pagename}</h3> </div>
                <div className="page_content_flexbox">
                    <div className="page_content_prev" onClick={decrementCount}>
                        <img className="page_content_icon" alt="" src={require("../assets/next-arrow.svg")} ></img>
                    </div>
                    <div className="page_content_data_container">
                        <div className="page_content_data" hidden={imgView}>

                            {datas[subPagenum].content}

                        </div>
                        {
                            datas.map((element,index) => {
                                var isHidden =false ;
                                if(!imgView){
                                    isHidden = (index!=subPagenum);
                                }
                                var activePage = subPagenum + 3 < subLen? subPagenum : subLen-3;
                                if(index>=activePage && index<activePage+3)
                                    return (
                                    <div className="page_content_image" hidden={isHidden} onClick={()=>subImageClick(index)}>
                                        <img src={"/assets/"+element.pics} alt=""></img>
                                    </div>);
                            })
                        }
                    </div>

                    <div className="page_content_next" onClick={incrementCount}>
                        <img className="page_content_icon" src={require("../assets/next-arrow.svg")} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default PageContent;