import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Onoff} from "./components/OnOf/Onof";

function App() {
    let[value, setValue] = useState(false)

    function addValue(){
        setValue(!value)
    }
    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            <Accordion titleValue= {'Меню'} collapsed = {true}/>
            <Accordion titleValue= {'Меню2'} collapsed = {false}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <Onoff status = {value} addValue = {addValue}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}
function PageTitle(props:PageTitleType) {
    return <h1>{props.title}</h1>
}


export default App;
