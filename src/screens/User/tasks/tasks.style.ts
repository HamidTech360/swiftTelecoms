import styled from 'styled-components'

interface ITaskNav {
  active?: boolean
}

export const TaskNav = styled.div.attrs({
  className: 'mr-5 flex items-center text-sm font-semibold px-2 cursor-pointer',
})<ITaskNav>`
  border-bottom: ${(props) => (props.active ? '2px solid #7F56D9' : '')};
  color: ${(props) => (props.active ? '#7F56D9' : '#737373')};
`

export const ModalContent = styled.div.attrs({
  className:'sm:px-10 px-4 sm:py-7 py-3'
})`
  background-color: #fbf8fc;
  height:50vh;
  width:30%;
  border-radius: 5px;
 


  @media screen and (max-width: 768px) {
    width: 87%;
    overflow-y: scroll;
    height:80vh;
  }

`

export const TextArea = styled.textarea.attrs({
  className:'outline-none '
})`

  width:100%;
  border:1px solid lightgray;
`