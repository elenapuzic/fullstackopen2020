import React from 'react'
import Part from "./Part";

const Content = (props) => {
    return(
        <>
            {
                props.partArray.map((el, i) =>
                    <Part
                        name={el.name}
                        exercises={el.exercises}
                    />)
            }
        </>
    )
}

export default Content;