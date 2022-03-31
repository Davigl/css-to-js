import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  overflow-y: auto;

  @media ( min-width: 900px ) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`
