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
