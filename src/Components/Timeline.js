import React from 'react'
import styled from 'styled-components';

function Timeline({name, qualification, text}) {
    return (
        <TimelineStyled >
            <ul className="Timeline">
                <li className="TimelineItem">
                    <div className="TimelineLeft">
                        <h5>{name}</h5>
                    </div>
                    <div className="TimelineRight">
                        <div className="TimeLineContent">
                            <div className="TlText">
                                <h5>{qualification}</h5>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </TimelineStyled >
    )
}

const TimelineStyled = styled.div`
    h5{
        font-weight: 500;
        font-size: 1.2rem;
        color: black;
    }

    .TimelineItem{
        display: grid;
        grid-template-columns: 25% 75%;

        .TimelineRight{
            padding-left: 2rem;
            border-left: 2px solid #fff;
            position: relative;
            .TlText{
                padding-bottom: 3rem;
            }

            h5::before{
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                background-color: #fff;
                border-radius: 4px;
                border:2px solid #f56692;
                left: -10px;
                top: 5px;
            }
        }
    }
`;
export default Timeline;
