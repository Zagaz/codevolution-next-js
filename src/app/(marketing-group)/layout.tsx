import React from 'react'

export default function Marketing({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h4>Marketing</h4>
            {children}
            <hr />
            <p>Marketing Footer</p>
        </>
    )
}
