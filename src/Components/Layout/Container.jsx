import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-screen-2xl mt-2 mx-auto'>
            {children}
        </div>
    );
};

export default Container;