import React, {useEffect, useState} from "react";

import './styles.scss'
import Timer from "../../components/timer";
import Field from "../field";
import {useSelector} from "react-redux";

const Playground = () => {
    const numberOfFlags = useSelector(({numberOfFlags}) => numberOfFlags)

    return (
        <main className='playground'>
            <section className='playground-header'>
                <div className='bombs-indicator'>Flags: {numberOfFlags}</div>
                <div className='boomberman'>&#128520;</div>
                <Timer/>
            </section>
            <Field/>
        </main>
    )
}

export default Playground
