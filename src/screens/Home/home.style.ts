import styled from 'styled-components'

export const TestDiv = styled.div.attrs({
  className: 'font-bold',
})`
  font-size: 30px;
  color: red;
`

export const BannerDiv = styled.div`
  background-image: url('../../assets/banner.jpg');
  color: white;
  height: fit-content;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #1d1e26;
  padding-bottom: 40px;
`
