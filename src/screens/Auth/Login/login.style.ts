import styled from "styled-components";


export const AuthButton = styled.button.attrs({
    className:'rounded-md font-semibold text-md py-3 border-none h-12'
})`
    background:#7F56D9;
    color:white;
    width:100%;
    font-family:inter;

    &:disabled {
        opacity: 0.5;
    }
`