import React, {useState, KeyboardEvent, useEffect} from 'react';
import style from './Select2.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select2(props: SelectPropsType) {

    let [active, setActive] = useState(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    let selectedItem = props.items.find(i => i.value === props.value)
    let hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])

    let toggleItems = () => setActive(!active)
    let onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    let onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown'|| e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    let pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        :props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }

                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }


    return (

        <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active && <div className={style.items}>
                    {props.items.map(i => <div className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}
                                               onMouseEnter={() => {
                                                   setHoveredElementValue(i.value)
                                               }}
                                               onClick={() => {
                                                   onItemClick(i.value)
                                               }}>{i.title}
                    </div>)}
                </div>
            }
        </div>
    )

}