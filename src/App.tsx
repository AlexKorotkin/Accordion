import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Onoff2} from "./components/OnOff2/Onoff2";
import {Onoff} from "./components/OnOf/Onoff";
/*import {UncontrolledAccordion} from "./components/UnControlledAccordion";*/
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, seAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={"This is APP components"}/>
            {/*<Accordion titleValue={'Меню'} collapsed={true}/>*/}
            <Accordion titleValue={'Меню2'} collapsed={accordionCollapsed} seAccordionCollapsed={() => {seAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<UncontrolledAccordion titleValue={'UncontrolledMenu'}/>*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Onoff2 on= {value} addValue = {addValue}/>*/}
            <Onoff/>
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
