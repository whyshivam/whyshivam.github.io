import React from "react"
import * as jumbodata from '../db/jumbo.json'

function JumboContent() {

    return (
        <div className="jumbotron">
            <h1>{jumbodata.head}</h1>
            <p>
                {jumbodata.message}
            </p>
            <p>
                
            </p>
        </div>



);




}

export default JumboContent;