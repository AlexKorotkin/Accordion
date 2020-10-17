import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Onoff2} from "./components/OnOff2/Onoff2";
import {Onoff} from "./components/OnOf/Onoff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {



    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            <Accordion titleValue= {'Меню'} collapsed = {true}/>
            <Accordion titleValue= {'Меню2'} collapsed = {false}/>
            <UncontrolledAccordion titleValue= {'UncontrolledMenu'}/>
            <UncontrolledRating />
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            {/*<Onoff2 on= {value} addValue = {addValue}/>*/}
            <Onoff />
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
