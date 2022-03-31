import { useMain } from "~/contexts/MainContext";
import CopyButton from "../CopyButton";
import GithubLink from "../GithubLink";
import TextAreaInput from "../TextArea";
import * as S from "./styles";

const CodeOutput = (): JSX.Element => {
  const { codeOutput } = useMain();

  return (
    <S.Wrapper>
      <span>CSS in JS</span>
      <TextAreaInput
        readOnly
        background="black"
        value={`{
${codeOutput}
}`}
      />
      <CopyButton />
      <GithubLink />
    </S.Wrapper>
  );
};

export default CodeOutput;
