import React from 'react'
import Timeline from './Timeline';

function Education() {
    return (
        <div>
            <div className="TimelineCon">
                <Timeline name={'September, 2021'} text={'University of Birmingham'} qualification={'PhD of Science in computer Science'} />
                <Timeline name={'June, 1994'} text={'London Metropolitan University'} qualification={'Bachelors Science in computer Science'} />
                <Timeline name={'August, 1990'} text={'Hull City School'} qualification={'High School Diploma'} />
                <Timeline name={'January, 2006'} text={'University of Manchester'} qualification={'Masters in Mathematics'} />
            </div>
        </div>
    )
}

export default Education;
