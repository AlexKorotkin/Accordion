import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


export type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}



export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick ={props.onClick} value = {1}/>
            <Star selected={props.value > 1} onClick ={props.onClick} value = {2}/>
            <Star selected={props.value > 2} onClick ={props.onClick} value = {3}/>
            <Star selected={props.value > 3} onClick ={props.onClick} value = {4}/>
            <Star selected={props.value > 4} onClick ={props.onClick} value = {5}/>
        </div>
    )

}


function Star(props: StarPropsType) {

    return <span onClick={() => {
        props.onClick(props.value)
    }}>{props.selected ? <img src="https://c.radikal.ru/c36/2010/01/8b16e369f6a7.png" alt="logo"/> :
        <img src="https://b.radikal.ru/b08/2010/97/884fcf53c9b2.png" alt="logo"/>}</span>
}