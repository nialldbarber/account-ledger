import styled from 'styled-components'

export const RowContainer = styled.div`
  display: flex; 
  flex-direction: column-reverse;
`

export const RowLine = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${props => props.theme.darkGrey};

  p {
    &:last-child {
      display: flex;
      justify-content: flex-end;
      font-weight: bold;
    }
  }
`
