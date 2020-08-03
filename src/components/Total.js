import React from 'react'

const Total = (props) => {
    return(
        <>
            <p>Number of exercises {props.numOfExercises.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue.exercises;
            },0)}</p>
        </>
    )
}

export default Total;