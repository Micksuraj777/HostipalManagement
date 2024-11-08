import React from 'react';

const Loader = ({ message = "Loading data..." }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-x-2 border-t-2 border-[#9083D5]"></div>
            <h1 className="text-[#9083D5]">{message}</h1>
        </div>
    );
};

export default Loader;
