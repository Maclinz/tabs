import React from 'react'
import styled from 'styled-components';

function ProgressBar({name, image, progress, bg, desc}) {
    return (
        <ProgressBarStyled>
            <div className="skill">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="progress-con">
                    <p>{name} <span>{progress}</span></p>
                    <div className="progress-bar" style={{background: 'white'}}>
                        <div className="progress" style={{background: bg, width: progress}}></div>
                    </div>
                </div>
            </div>
        </ProgressBarStyled>
    )
}



const ProgressBarStyled = styled.div`
    .skill{
        display: flex;
        align-items: center;
        .image{
            width: 60px;
            img{
                width: 100%;
            }
        }
    }

    .progress-con{
        flex: 1;
        padding-left: 1.5rem;
        p{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        .progress-bar{
            width: 100%;
            height: .6rem;
            background-color: white;
            border-radius: 15px;
            .progress{
                height: 100%;
                border-radius: 15px;
            }
        }
    }
`;

export default ProgressBar;
