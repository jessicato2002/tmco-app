import React from 'react';
import './OrangeButton.scss';

function OrangeButton({width ='150px', children}){
    return(
	<button className="orangebutton" style={{width}}>
            {children}
        </button>
    );
}

export default OrangeButton;