import React from 'react';
import img from './funny-404-error-page-GIF-klizo-solutions.gif'


const NotFound = () => {
    return (
        <div className='notfound'>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default NotFound;