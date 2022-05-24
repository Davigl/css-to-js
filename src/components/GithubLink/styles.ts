import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  display: flex;
  align-items: center;

  > a {
    font-size: 40px;
    color: #fff;
    opacity: 0.8;
    transition: all 0.25s linear;
  }

  > p {
    opacity: 0;
    transition: all 0.25s linear;
  }

  svg {
    fill: var(--secondary);
  }

  &:hover {
    > a {
      opacity: 1;
      color: #fff;
    }

    > p {
      opacity: 1;
      margin-right: 20px;
      color: #fff;
    }
  }

  @media ( min-width: 900px ) {
    top: 0;
    bottom: inherit;
  }
`
