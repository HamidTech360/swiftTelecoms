import styled from 'styled-components'

export const Banner = styled.div.attrs({
  className: 'font-bold pt-50',
})`
    background-image: url('../../assets/banner1.png');
    // font-size:30px;
    color:red;
    height:100vh;
    background-color:#1D1E26;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    text-align:center
   padding: 5px;

    
`

export const ParaOne = styled.p.attrs({
  className:
    'text-[#D7634E]   font-bold text-sm px-4 m-auto py-3  rounded-full w-fit ',
})`
  background: rgba(215, 99, 78, 0.13);
`

// color: ;
// text-align: center;
// font-family: Montserrat;
// font-size: 48px;
// font-style: normal;
// font-weight: 700;
// line-height: 139.4%; /* 66.912px */

// color: #7E8290;

// text-align: center;
// font-family: Montserrat;
// font-size: 18px;
// font-style: normal;
// font-weight: 500;
// line-height: 199.4%;
