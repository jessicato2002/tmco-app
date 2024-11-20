import React from 'react';
import './Quote.scss';

function Quote({children}){
    return(
        <div className="quotecont">
            <div className="line"></div>
            <p className="quote">
                {children}
            </p>
        </div>
    );
}

export default Quote;