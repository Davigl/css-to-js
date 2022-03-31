import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  background-color: var(--primary);

  span {
    font-size: 3rem;
    font-weight: 700;
    position: absolute;

    bottom: 0;
    left: 0;

    opacity: 0.2;
    padding: 1.2rem;
    color: white;
  }
`
