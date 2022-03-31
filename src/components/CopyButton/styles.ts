import styled from 'styled-components'

export const Wrapper = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;

  width: 140px;

  height: 44px;
  border-radius: 50rem;

  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .2rem;

  text-align: center;
  color: white;

  background: linear-gradient(345deg, rgb(73, 12, 176) 0%, rgb(155, 52, 239) 33%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100%) 99% 50% / 400% 400%;
  background-size: 400% 400%;
  transition: all .5s ease 0s;
  border: 2px solid transparent;

  font-family: 'IBM Plex Mono', monospace;

  &:hover {
    background-position: 1% 50%;

    border: 2px solid var(--primary);
  }

  @media ( min-width: 900px ) {
    top: inherit;
    right: inherit;

    bottom: 24px;
    right: 14px;

    min-width: 240px;
    padding: 0 1rem;

    letter-spacing: .1rem;
  }
`
