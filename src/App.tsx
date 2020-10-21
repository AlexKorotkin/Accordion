import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledOnoff} from "./components/OnOf/UnControlledOnoff";
/*import {UncontrolledAccordion} from "./components/UnControlledAccordion";*/
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Onoff} from "./components/OnOf/Onoff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, seAccordionCollapsed] = useState<boolean>(false)
    let[on, setOn] = useState(false)

    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            {/*<Accordion titleValue={'Меню'} collapsed={true}/>*/}
            <Accordion titleValue={'Меню2'} collapsed={accordionCollapsed} seAccordionCollapsed={seAccordionCollapsed}/>
            {/*<UncontrolledAccordion titleValue={'UncontrolledMenu'}/>*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
             <Onoff on ={on} setOn = {setOn}/>
            <UnControlledOnoff/>
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
