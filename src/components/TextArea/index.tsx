import * as S from "./styles";
import { TextAreaProps } from "./types";

const TextArea = ({
  background,
  ...rest
}: TextAreaProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element => (
  <S.Wrapper background={background} {...rest} />
);

export default TextArea;
