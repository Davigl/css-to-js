import { useMain } from "~/contexts/MainContext";
import TextAreaInput from "../TextArea";
import * as S from "./styles";

const CodeInput = (): JSX.Element => {
  const { codeInput, setCodeInput } = useMain();

  return (
    <S.Wrapper>
      <span>CSS</span>
      <TextAreaInput
        value={codeInput}
        background="linear-gradient(42deg, var(--primary) 30%, var(--secondary) 100%);"
        onChange={(e) => setCodeInput(e.target.value)}
      />
    </S.Wrapper>
  );
};

export default CodeInput;
