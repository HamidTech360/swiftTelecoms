import styled from "styled-components";

interface ISmallCircle {
    isVerified?:boolean;
}
export const SmallCircle = styled.div.attrs({className:'mr-2'})<ISmallCircle>`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:${(props)=>props.isVerified?'#5cb85c':'#F3F1F1'};
    display:flex;
    justify-content:center;
    align-items:center;
`