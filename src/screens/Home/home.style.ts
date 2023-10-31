import styled from 'styled-components'

export const Banner = styled.div.attrs({
  className: 'font-bold pt-50 text-center ',
})`
  background-image: url('../../assets/banner1.png');
  // font-size:30px;
  color: red;
  min-height: 100vh;
  height: fit-content;
  background-color: #1d1e26;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px;
  /* width: 10%; */
  @media screen and (max-width: 768px) {
    background-position: 70%;
  }
`

export const TopText = styled.p.attrs({
  className:
    'text-[#D7634E]   font-bold text-sm px-4 m-auto py-3  rounded-full w-fit ',
})`
  background: rgba(215, 99, 78, 0.13);
`

export const BodyText = styled.p.attrs({
  className:
    'text-[#CFDDFF] text-center font-bold text-3xl mt-14 md:text-4xl leading-normal mb-8 md:mb-16 ',
})`
    line-height:50px;
`

export const SubText = styled.p.attrs({
  className:
    'text-[#7E8290] text-center w-11/12 md:w-6/6 text-xs md:text-lg m-auto leading-7 ',
})``

export const About = styled.div.attrs({
  className:
    ' bg-[#1D1E26] text-white p-5 md:p-10 lg:p-40 md:grid grid-cols-2 ',
})`
  /* min-height: 40vh; */
  height: fit-content;
  font-family: Montserrat;
`

// color: var(--Theme-Orange, #D7634E);
// font-family: Montserrat;
// font-size: 12px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
