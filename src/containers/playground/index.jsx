import React, {useEffect, useState} from "react";

import './styles.scss'
import Timer from "../../components/timer";
import Field from "../field";

const Playground = () => {
    return (
        <main className='playground'>
            <section className='playground-header'>
                <div className='bombs-indicator'>30</div>
                <div className='boomberman'>&#128520;</div>
                <Timer/>
            </section>
            <Field />
        </main>
    )
}

export default Playground
