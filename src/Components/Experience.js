import React from 'react'
import Timeline from './Timeline';

function Experience() {
    return (
        <div>
            <div className="TimelineCon">
                <Timeline name={'2015 - 2016'} text={'Total : 1.5 + years of experience'} qualification={'Software Enginner At Microsoft'} />
                <Timeline name={'2015 - present'} text={'Total : 4.5 + years of experience'} qualification={'Software Enginner At Alphabet Inc.'} />
                <Timeline name={'2010 - 2016'} text={'Total : 6 + years of experience'} qualification={'Front-End Developer At Google'} />
                <Timeline name={'2006 - present'} text={'Total : 10 + years of experience'} qualification={'Seniour Software Enginner At Google'} />
            </div>
        </div>
    )
}

export default Experience;
