import styled from 'styled-components'

export const BannerImg = styled.img.attrs({})`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

export const FormArea = styled.div.attrs({
  className: 'rounded-md py-7 px-6 md:px-10',
})`
  background-color: #1f222d;
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
  min-height: 300px;
`
