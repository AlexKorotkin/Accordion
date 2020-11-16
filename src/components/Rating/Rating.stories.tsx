import React, {useState} from 'react';

import {Rating, RatingValueType} from "./Rating";



export default {
    title: 'Rating stories',
    component: Rating

}

export let EmptyRatsing = ()=> <Rating value={0} onClick={x=>x}/>
export let Rating1 = ()=> <Rating value={1} onClick={x=>x}/>
export let Rating2 = ()=> <Rating value={2} onClick={x=>x}/>
export let Rating3 = ()=> <Rating value={3} onClick={x=>x}/>
export let Rating4 = ()=> <Rating value={4} onClick={x=>x}/>
export let Rating5 = ()=> <Rating value={5} onClick={x=>x}/>
export let RatingChanging = () => {
   let [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value = {rating} onClick={setRating}/>
}