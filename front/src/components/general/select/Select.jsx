
import React, { useEffect, useRef, useState } from "react"
import './Select.scss';
const Select = ({ onChange, className, value, list }) => {
    const [valueState, setValue] = useState(value)
    const [focused, setFocus] = useState(false)

    useEffect(() => {
        setValue(value)
    }, [value])

    const handleSelect = (e, item) => {
        setValue(item.key)
        onChange(e, item)
    }

    const handlerEnter = () => {
        setFocus(true)
    }

    const handleLeave = () => {
        setFocus(false)
    }
    return (
        <div onMouseEnter={handlerEnter} onMouseLeave={handleLeave} className={!focused ? "select " + className : "select select--focused " + className} >
            {list.map(item => (
                <p key={item.key} onClick={(e) => { handleSelect(e, item) }} className={valueState ? valueState === item.key ? "select__item select__item--selected" : "select__item" : "select__item"}>{item.name}</p>
            ))}
        </div>

    )
}

export default Select