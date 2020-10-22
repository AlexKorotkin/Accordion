import React, {useState} from "react";
import {RatingValueType} from "./Rating";


export type UncontrolledRatingPropsType = {
    defaultValue: RatingValueType
    onChange: (value:RatingValueType) => void
}
type StarPropsType = {
    selected: boolean
    starValue: () => void



}


export function UncontrolledRating(props:UncontrolledRatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue? props.defaultValue: 0)
       return (
        <div>
            <Star selected={value > 0} starValue={() => {setValue(1); props.onChange(1)}} />
            <Star selected={value > 1} starValue={() => {setValue(2); props.onChange(2)}} />
            <Star selected={value > 2} starValue={() => {setValue(3); props.onChange(3)}} />
            <Star selected={value > 3} starValue={() => {setValue(4); props.onChange(4)}} />
            <Star selected={value > 4} starValue={() => {setValue(5); props.onChange(5)}} />
        </div>
    )

}

function Star(props: StarPropsType) {

    return <span onClick={()=>{props.starValue()
    }}>{props.selected ? <img src="https://c.radikal.ru/c36/2010/01/8b16e369f6a7.png" alt="logo"/> :
        <img src="https://b.radikal.ru/b08/2010/97/884fcf53c9b2.png" alt="logo"/>}</span>
}