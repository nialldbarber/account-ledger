import styled from 'styled-components'

export const RowLine = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  padding: 1rem 2rem;
  border-bottom: 1px solid #9c9b9b;

  p {
    &:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
`
