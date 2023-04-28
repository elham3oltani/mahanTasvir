import React from 'react';
import not from "../images/404not.svg"
const NotFound = () => {
    return (
        <div>
           <div className='lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto h-ahto mb-20 relative '>
            <img src={not} alt="404" />
           </div>
        </div>
    );
};

export default NotFound;