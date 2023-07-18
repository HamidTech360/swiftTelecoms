import styled from "styled-components";



export const NavList = styled.div.attrs({})`
  margin-top:100px;
  
`

export const FormArea = styled.div.attrs({
    className:'rounded-md px-7 sm:py-7 '
})`
  margin:auto;
  background-color:white;
  max-width:400px;
  min-height:500px;

  @media screen and (max-width:768px){
    padding-top:70px;
    max-height:100%;
    
  }
  
`
