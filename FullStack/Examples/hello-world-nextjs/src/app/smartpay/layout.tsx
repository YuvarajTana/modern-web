import React from 'react';

const SmartPayLayout = ({ children }: { children: React.ReactNode}) => {
    return <main>
        {/* <h1>It's Smart Pay Header</h1> */}
            <div>{ children }</div>
        {/* <h1>It's Smart Pay Footer</h1> */}
    </main>
};

export default SmartPayLayout;