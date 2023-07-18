
import styled from "styled-components"

export const FormContainer = styled.div.attrs({

})`
   
    width:100%;
    max-width:650px;
    margin:auto;
   
`
export const FormHeader = styled.div.attrs({
    className:'text-center font-bold lg:text-3xl text-2xl mb-3'
})`
    font-family:saliec;
`
export const FormSubHeader = styled.div.attrs({
    className:'text-center font-semibold lg:text-sm text-xs mb-7'
})`
    font-family:saliec;
`

export const Select = styled.select.attrs({
    className:'border outline-none rounded focus:outline-none appearance-none w-full h-12 lg:h-14 px-4 font-semibold'
})`
    background:#FFF8E1;
    border:1px solid lightgray;
    font-family:saliec;
`

export const Button = styled.button.attrs({
    className:'border-none rounded w-full h-14 tex-medium text-white font-semibold cursor-pointer'
})`
    font-family:saliec;
    background:#0D57A6;
    &:disabled{
        opacity:0.5;
    }
`

