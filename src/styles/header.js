import styled from 'styled-components'

export const Header = styled.h1`
  position: absolute;
  top: -6rem;
  left: 50%;
  transform: translateX(-50%) skewX(-10deg) rotate(14deg);
  width: 340px;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  border-bottom: 1px solid ${props => props.theme.grey};
`

export const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;

  p {
    border: 1px solid black;
    margin-left: 1rem;
    background: #C0C0C0;
    padding: .5rem 1rem;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    box-shadow: 1px 1px 0 #000;
    margin-left: 1rem;
  }
`
