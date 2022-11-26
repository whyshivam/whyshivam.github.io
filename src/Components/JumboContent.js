import React from "react"
import * as jumbodata from '../db/jumbo.json'

function JumboContent() {

    return (
        <div className="jumbo_content">
            <div className="jumbotron_content_container container" >
                <h1>{jumbodata.head}</h1>
                <div className="jumbotron_content">
                    {jumbodata.message}
                </div>
            </div>
        </div>



    );




}

export default JumboContent;