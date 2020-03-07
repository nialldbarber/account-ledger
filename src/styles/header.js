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
  padding: 0 1rem;
`

export const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;

  p {
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.black};
    margin-left: 1rem;
    background: ${props => props.theme.grey};
    padding: 0.5rem 1rem;
    border-top: 1px solid ${props => props.theme.white};
    border-left: 1px solid ${props => props.theme.white};
    border-right: 1px solid ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
    box-shadow: 1px 1px 0 ${props => props.theme.black};

    &.overdraft {
      background: ${props => props.theme.red};
      border: 1px solid ${props => props.theme.red};
    }

    &.available {
      background: ${props => props.theme.green};
      border: 1px solid ${props => props.theme.green};

    }
    
    &.target {
      background: ${props => props.theme.lighterBlue}; 
      border: 1px solid ${props => props.theme.lighterBlue};
    }
  }
`
