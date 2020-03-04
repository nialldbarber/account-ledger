import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    margin: 0;
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid black;
`
