import styled from "styled-components";

interface INav {
    active:boolean;
}

export const P = styled.div.attrs({})`

`

export const Header = styled.div.attrs({
    className:'px-7 flex items-center'
})`
    background-color:#0D57A6;
    height:10vh;
`

export const Divider = styled.div.attrs({
    className:'md:mr-14 mr-7 ml-7 md:ml-14'
})`
    border-right:2px solid whitesmoke;
    height:30px;
`

export const Select = styled.select.attrs({
    className:'rounded text-black py-2 px-4 ml-7 font-semibold '
})`
    background-color:#33BDDD;
`

//#B8E5EE light

export const NavBar = styled.div.attrs({
    className:'rounded-md py-7 flex-1 box-border'
})`
    background-color:#F9F9F9;
    border:1px solid #33BDDD;
    
`

export const Circle = styled.div.attrs({
    className:'mx-auto'
})`
    height:72px;
    width:72px;
    border-radius:50%;
    border:6px solid #33BDDD;
    background-color:#B8E5EE;
`

export const NavItem = styled.div.attrs({
    className:"font-medium cursor-pointer"
})<INav>`
    background:${(props)=>props.active?'#FCE087':''};
    border-bottom:${(props)=>props.active?'3px solid #33BDDD':''};
    padding-left:${(props)=>props.active?'15px':''};
    padding-top:13px;
    padding-bottom:13px;
    text-decoration:none;

`

export const SideGrid = styled.div.attrs({
    className:'hidden px-10 flex-col mb-5 md:flex'
})`
    width:300px;
    maxHeight:90vh;
    overflowY:hidden; 
    paddingBottom:20px;
    
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