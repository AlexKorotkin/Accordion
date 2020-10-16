import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}
function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>

    )
}

function Star() {
    return (
        <div>
            <span>Star</span>
        </div>
    )
}
function AppTitle() {
    return <>Какой-то текст</>
}
function AccordionTitle() {
    return (
        <h3>Меню</h3>
    )
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default App;
