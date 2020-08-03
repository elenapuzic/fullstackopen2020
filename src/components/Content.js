import React from 'react'
import Part from "./Part";

const Content = (props) => {
    return(
        <>
            {props.partArray.map((el, i) => <Part key={`part-${i}`} part={el.part} exercises={el.exercises}/>)}
        </>
    )
}

export default Content;