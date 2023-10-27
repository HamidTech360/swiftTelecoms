import styled from "styled-components";

export const Banner = styled.div.attrs({
    className:'  '
})`
    background-image: url('../../assets/banner1.png');
    height: fit-content;
    min-height: 100vh;
    background-color:#1D1E26;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
 

    @media screen and (max-width:768px){
        background-position: 70%;
    }
`