import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";
import {UncontrolledRating} from "./UncontrolledRating";



export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating

}
const callback = action('re-re')

export let Rating1 = ()=> <UncontrolledRating defaultValue={1} onChange = {callback}/>
export let Rating2 = ()=> <UncontrolledRating defaultValue={2} onChange = {callback}/>
export let Rating3 = ()=> <UncontrolledRating defaultValue={3} onChange = {callback}/>
export let Rating4 = ()=> <UncontrolledRating defaultValue={4} onChange = {callback}/>
export let Rating5 = ()=> <UncontrolledRating defaultValue={5} onChange = {callback}/>
export let RatingChanging = () => {
   let [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value = {rating} onClick={setRating}/>
}