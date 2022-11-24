import React, { useState } from "react";
import Header from '../Components/Header';
import JumboContent from "../Components/JumboContent";
import PageContent from "../Components/PageContent";
import * as header_data from '../db/header.json' ;

function HomePage() {
    const [headers] = useState(header_data)
    return (
        <div>

            <Header header_data = {header_data}/>
            <JumboContent/>
            {   
                headers.map(elem => {
                    if(elem.head === "Blog")
                    return (<React.Fragment/>);

                    return(
                        <PageContent pagename = {elem.head}
                        pageloc={elem.loc}
                        pageid ={elem.key}/>
                    );
                })

            }
            

        </div>



    );

}
export default HomePage;