import styled from 'styled-components'
import { TextAreaProps } from './types'

export const Wrapper = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.2rem;
  padding: 1.2rem;
  overflow-y: auto;
  background: ${({ background }) => background };
`
