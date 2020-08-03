import React from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
    const course = 'Half Stack application development'
    const contentText = [
        { part: 'Fundamentals of React', exercises: 10 },
        { part: 'Using props to pass data', exercises: 7 },
        { part: 'State of a component', exercises: 14 }
    ];

    return (
        <div>
            <Header courseName={course} />
            <Content partArray={contentText}/>
            <Total numOfExercises={contentText} />
        </div>
    )
}

export default App;