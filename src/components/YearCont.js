import React from 'react';
import './YearCont.scss';

function YearCont({yeartextholder, yearcircholder}){
    return(
        <div className="singleyearcont">
            <p className="yeartext">
                {yeartextholder}
            </p>
            <div className="yearcircle">
                <p>{yearcircholder}</p>
            </div>
            <div className="yearline"></div>
        </div>
    );
}

export default YearCont;