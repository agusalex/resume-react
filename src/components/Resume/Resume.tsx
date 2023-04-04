import React, {useEffect, useState} from "react";
import {Markup} from "interweave";
import "./Resume.css"

interface Props {
    name: string
}

function Resume(props: Props) {
    const [getResume, setResume] = useState(<div></div>)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/agusalex/agusalex/main/README.md")
            .then(response => {
                response.text().then(responseText => {
                        const content = responseText.replaceAll("---", "").replace("Agustin Alexander", "").replaceAll("h3", "h2")
                        setResume(
                            <div id="content" className="content">
                            <h1>{props.name}</h1>
                            <Markup content={content}/>
                            </div>
                        )
                    }
                )
            })
    }, [])

    return getResume


}

export default Resume
