import React, { useState } from 'react'

function Main() {
    const [ib, setIb] = useState('Click the button below to get started!')

    const array = ['Ice-breaker 1', 'Ice-breaker 2', 'Ice-breaker 3']

    const getIcebreaker = () => {
        return (
            <div>
                <h1>{setIb(array[Math.floor(Math.random() * array.length)])}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{ib}</h1>
            <button onClick={() => getIcebreaker()}>Find an Ice Breaker!</button>
        </div>
    )
}

export default Main
