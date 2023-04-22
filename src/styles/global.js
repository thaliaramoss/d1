import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F3F5F7;
        font-family: 'Lexend Deca', sans-serif;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;
        &::-webkit-scrollbar{
            display: none;
        }
    }
`