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
                yeartextholder="In his first experience as an entrepreneur, Tom provided legal research
                services to solo practice attorneys and small law firms in San Jose after
                graduating from law school in 1989 (USF)." 
                yearcircholder="1990" 
                />

                {isMobileView && (
                    <div>
                        <YearCont 
                        yeartextholder="Tom was hired by Dr. Roberto Cruz, the founder and President of the National Hispanic University. The first classes he taught were in Business Law and general business administration. He continued teaching for NHU in East San Jose, off and on, until the school’s closure in 2015."
                        yearcircholder="1992" 
                        />  
                    </div>

                )}

                <YearCont 
                yeartextholder="In this year, Tom began a long career of teaching graduate-level foreign
                students in the areas of business and engineering. He still teaches and
                trains students from around the world to compete in Silicon Valley and
                other tech-oriented environments." 
                yearcircholder="2011" 
                />

                {isMobileView && (
                    <div>
                        <YearCont 
                        yeartextholder="Under the leadership of Dr. Gregory O’Brien, the former Chancellor of the
                        University of New Orleans, Tom and Dr. O’Brien co-founded a business
                        incubator to nurture tech-oriented startup ideas."
                        yearcircholder="2017" 
                        />    
                    </div>

                )}

                <YearCont 
                yeartextholder="Tom received a Lemelson Center fellowship to do patent research at the
                National Museum of American History, a division of the Smithsonian
                Institution, the world’s largest museum, education, and research complex
                located in Washington, D.C." 
                yearcircholder="2018" 
                />

                {/* Add new components from right side only if screen size is valid*/}
                

            </div>
            <div className="middlelinecont"></div>
            {!isMobileView && (

                <div className="righttimecont">
                    <YearCont 
                    yeartextholder="Tom was hired by Dr. Roberto Cruz, the founder and President of the National Hispanic University. The first classes he taught were in Business Law and general business administration. He continued teaching for NHU in East San Jose, off and on, until the school’s closure in 2015."
                    yearcircholder="1992" 
                    />

                    <YearCont 
                    yeartextholder="Under the leadership of Dr. Gregory O’Brien, the former Chancellor of the
                    University of New Orleans, Tom and Dr. O’Brien co-founded a business
                    incubator to nurture tech-oriented startup ideas."
                    yearcircholder="2017" 
                    />
                </div>
            )};
        </div>
    );
}

export default Timeline;