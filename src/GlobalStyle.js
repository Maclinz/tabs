import { createGlobalStyle } from "styled-components";
import bg from './img/bg.svg';

const GloablStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

    }

    body{
        min-height: 100vh;
        background-position: center;
        background-size: cover;
        color: #222260;
        background: url(${bg});
    }

    p{
        line-height: 1.9rem;
    }

    h4{
        font-weight: 500;
        font-size: 1.5rem;
    }

    .active-btn{
        opacity: 1 !important;
        border-bottom: 2px solid #000 !important;
    }
`;

export default GloablStyle;