import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Onoff} from "./components/OnOf/Onoff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, seAccordionCollapsed] = useState<boolean>(false)
    let[on, setOn] = useState(false)

    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
             <Onoff on ={on} setOn = {setOn}/>
             
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}


export default App;
