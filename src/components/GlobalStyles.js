import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
   
    @media screen and (max-width: 768px) {	
        width:70%;  
	}
}

html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
		background: white;
	}
}
body{
    
    font-family: 'Montserrat' , sans-serif;
    width: 100%;
    background-color: #181a1b;
   
}
h2{
    font-size:3rem;
    font-family: 'Abril Fatface' , cursive;
    font-weight: lighter;
    color:#E8E6E3;
}
h3{
    font-size: 1.3rem;
    color:#333;
    padding:1.5rem 0rem;
    color:#E8E6E3;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color:#E8E6E3;
    
}
a{
    text-decoration: none;
    color:#333;
}
img{
    display:block;
}
`;

export default GlobalStyles;
