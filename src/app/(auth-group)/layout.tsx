import React from 'react'

export default function Auth({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h4>Auth header</h4>
            
            {children}
        
            <h4>Auth Footer</h4>
        </>
    )
}
