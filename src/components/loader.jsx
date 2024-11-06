import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-x-2 border-t-2 border-[#9083D5]"></div>
            <h1 className='text-[#9083D5]'>Loading data...</h1>
        </div>
    );
};

export default Loader;
