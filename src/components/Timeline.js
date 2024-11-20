import React, {useState, useEffect} from 'react';
import './Timeline.scss';
import YearCont from './YearCont.js';

function Timeline(){
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect( () => {
        //just a function that determines if width is less than 768
        const handleResize = () => {
            //state is set to true if window width is less than 768
            setIsMobileView(window.innerWidth < 1100);
        };

        //continually check when window size changes and check if its less than 768
        window.addEventListener('resize', handleResize);

        //initial check
        handleResize();

        return() =>{
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    return (
        <div className="timecont">
            <div className="lefttimecont">
                <YearCont 
                yeartextholder="As an entrpreneuer, professor Tafolla begins 
                providing legal research and writing services to attorneys, shortly after graduating from the 
                University of San Francisco, School of Law." 
                yearcircholder="1990" 
                />

                {isMobileView && (
                    <div>
                        <YearCont 
                        yeartextholder="Tom beings teaching as an adjunct undergraduate professor of business for National Hispanic 
                        University (NHU) and continues in this role until NHU’s closing in 2015."
                        yearcircholder="1992" 
                        />  
                    </div>

                )}

                <YearCont 
                yeartextholder="Tom extends his teaching experience and 
                exclusively works at training international graduate students in MBA, engineering, and doctorate 
                programs. He is still actively involved in preparing students to enter and compete in technology and business-oriented job functions." 
                yearcircholder="2011" 
                />

                {isMobileView && (
                    <div>
                        <YearCont 
                        yeartextholder="Tom is responsible for co-founding a university business incubator. He works on this until 2019."
                        yearcircholder="2017" 
                        />    
                    </div>

                )}

                <YearCont 
                yeartextholder="Tom was the recipient of a fellowship from the 
                Lemelson Center for the Story of Invention and Innovation. A subnet of the Smithsonian Institution in Washington, D.C." 
                yearcircholder="2018" 
                />

                {/* Add new components from right side only if screen size is valid*/}
                

            </div>
            <div className="middlelinecont"></div>
            {!isMobileView && (

                <div className="righttimecont">
                    <YearCont 
                    yeartextholder="Tom beings teaching as an adjunct undergraduate professor of business for National Hispanic 
                    University (NHU) and continues in this role until NHU’s closing in 2015."
                    yearcircholder="1992" 
                    />

                    <YearCont 
                    yeartextholder="Tom is responsible for co-founding a university business incubator. He works on this until 2019."
                    yearcircholder="2017" 
                    />
                </div>
            )};
        </div>
    );
}

export default Timeline;