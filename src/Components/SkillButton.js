import React from 'react'

function SkillButton({name, number, bg}) {
    return (
        <div>
            <div className="skill" style={{background: bg}}>
                <div className="skills-btn"><span>{number}</span> <span>{name}</span></div>
            </div>
        </div>
    )
}

export default SkillButton
