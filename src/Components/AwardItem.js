import React from 'react'
import styled from 'styled-components';

function AwardItem({icon, number, text}) {
    return (
        <AwardItemStyled>
            <img src={icon} alt="" />
            <p className="number">{number}</p>
            <p>{text}</p>
        </AwardItemStyled>
    )
}

const AwardItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .number{
        padding: 1rem 0;
        color: #6BBE92;
    }
    p:nth-child(2){
        color: #F24E1E;
    }
`;

export default AwardItem;
