import React from 'react'

export default function Shape({ shape, count }) {
    return (
        <div className={shape}>{count}</div>
    )
}
