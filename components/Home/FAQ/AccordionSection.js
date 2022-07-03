import React, {useState} from "react";
import {IconContext} from "react-icons";
import {Data} from "./Data";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";




export default function Accordion() {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <IconContext.Provider value={{color: '#00ffb9', size: '25px'}}>
            <div className="AccordionSection">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div className="Wrap" onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                            </div>
                            {clicked === index ? (
                                <div className="Dropdown">
                                    <p className="answer">{item.answer}</p>
                                </div>
                            ) : null}
                        </>
                    )
                })}

            </div>
        </IconContext.Provider>
    )
}
