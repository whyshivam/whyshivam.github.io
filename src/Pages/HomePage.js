import React from "react";
import JumboContent from "../Components/JumboContent";
import PageContent from "../Components/PageContent";

function HomePage(props) {
    
    return (
        <div>

            <JumboContent/>
            {   
                props.headers.map(elem => {
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