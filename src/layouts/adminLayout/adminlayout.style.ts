import styled from "styled-components";

interface INav {
    active?:boolean;
}

export const P = styled.div.attrs({})`

`

export const NavItem = styled.div.attrs({
    className:"font-semibold rounded px-3 cursor-pointer"
})<INav>`
    background:${(props)=>props.active?'#F2EEFB':''};
    color:${(props)=>props.active?'#7F56D9':'#737373'};
    padding-top:13px;
    padding-bottom:13px;
    text-decoration:none;

`

export const SideGrid = styled.div.attrs({
    className:'hidden py-7 px-10 flex-col  md:flex'
})`
    width:300px;
    maxHeight:100vh;
    overflowY:hidden; 
    paddingBottom:20px;
    border-right:1px solid lightgray;
    
    @media screen and (max-width:1000px) and (min-width:768px){
        width:230px;
    }

`

export const Badge = styled.div.attrs({
    className:'text-sm font-bold'
})`
    width:15px;
    height:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:white;
    border-radius:50%;
    margin-left:-20px;
    //margin-top:-10px;
`