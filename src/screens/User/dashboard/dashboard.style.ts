import styled from "styled-components";

export const Header = styled.div.attrs({
    className:'font-bold text-2xl sm:text-3xl'
})`

`
export const Avatar = styled.img.attrs({
    className:'sm:h-8 sm:w-8 h-7 w-7'
})`
    
    border-radius:50%;
    object-fit:cover;
`

export const Card = styled.div.attrs({
    className:'sm:h-28 h-20 px-3 py-5 rounded-xl flex flex-col'
})`
    border:1px solid lightgray;
`