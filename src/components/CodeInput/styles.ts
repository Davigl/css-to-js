import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

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

export const TextArea = styled.textarea.attrs(() => ({
  name: '',
  placeholder: 'Insert your css here...'
}))`
  width: 100%;
  height: 100%;

  color: white;
  font-size: 1.2rem;
  padding: 1.2rem;
  overflow-y: auto;

  background-color: var(--secondary);
`;
