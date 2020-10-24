import React from 'react';

type ItemType = {
    title: string
    value: number
}

export type SelectPropsType = {
    value: string
    collapsed: boolean
    on: boolean
    setOn: (value: boolean) => void
    setCollapsed: (value: boolean) => void
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {
    let divStyle = {
        width: '50px',
        border: '1px solid black',
        borderRadius: '2px'
    }

    return (

        <div>
            <div style={divStyle} onClick={() => {
                props.setCollapsed(false)
            }}>{props.value}</div>
            {!props.collapsed && <div style={divStyle}>{props.items.map(i => <div
                onMouseOver={(e) => {
                    e.currentTarget.style.cssText = `color:white; 
                                                      background-color: #26AAFB;
                                                      cursor: pointer`;
                    }
                }
                onMouseOut={(e) => {
                    e.currentTarget.style.cssText = `color:black; 
                                                      background-color: white`;
                }}
                onClick={() => props.onChange(i.value)}>{i.title}</div>)}</div>}
        </div>
    )

}