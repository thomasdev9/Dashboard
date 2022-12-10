import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
        font-size: 14px;
    }
    
    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 0.88rem;
        user-select: none;
        overflow-x: hidden;
        background: #f6f6f9;
    }

    img{
        display: block;
        width: 100%;
    }
    
    h1{
        font-weight: 800;
        font-size: 1.8rem !important;
    }
    
    h2{
        font-size: 1.4rem !important;
    }
    
    h3{
        font-size: 0.87rem !important;
    }
    
    h4{
        font-size: 0.8rem !important;
    }
    
    h5{
        font-size: 0.77rem !important;
    }
    
    small{
        font-size: 0.75rem !important;
    }

    .primary{
        color: #7380ec !important;
    }
    
    .danger{
        color: #ff7782 !important;
    }
    
    .success{
        color: #41f1b6 !important;
    }
    
    .warning{
        color: #ffbb55 !important;
    }
`