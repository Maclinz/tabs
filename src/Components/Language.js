import React from 'react'
import styled from 'styled-components'

function Language({icon, icon2, icon3, text1, text2, text3, title}) {
    return (
        <LanguageStyled>
            <h4>{title}</h4>
            <div className="social-content">
                <div className="s-icons">
                    <img src={icon} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                </div>
                <div className="s-text">
                    <span>{text1}</span>
                    <span>{text2}</span>
                    <span>{text3}</span>
                </div>
            </div>
        </LanguageStyled>
    )
}

const LanguageStyled = styled.div`
    background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
    backdrop-filter: blur(9px);
    padding: 2rem 1rem;
    border-radius: 15px;
    width: 48%;
    h4{
        padding-bottom: 2.5rem;
    }

    .social-content{
        display: grid;
        grid-template-columns: 24px 1fr;
    }

    .s-icons{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img{
            padding: .8rem 0;
        }
    }
    
    .s-text{
        padding-left: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span{
            padding: 0.8rem 0 ;
        }
    }
`;

export default Language
