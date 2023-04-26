import React from 'react';
import not from "../images/not.svg"
const NotFound = () => {
    return (
        <div>
           <div className='w-1/2 mx-auto h-ahto mb-20'>
            <img src={not} alt="404" />
           </div>
        </div>
    );
};

export default NotFound;