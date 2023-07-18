import styled from "styled-components";

export const SideBar = styled.div.attrs({
    className:'py-7 px-5'
})`
    background-color:#0D57A6;
    width:400px;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const MainContent = styled.div.attrs({})`
   flex:1;
   padding:7rem 2rem 1rem 2rem;
   overflow-y:scroll;
   
   @media screen and (max-width:768px){
    padding:5rem 1rem 1rem 1rem;
   }
`

export const NavList = styled.div.attrs({})`
  margin-top:100px;
  
`
