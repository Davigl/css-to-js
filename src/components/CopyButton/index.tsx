import { useMain } from "~/contexts/MainContext";
import * as S from "./styles";

const CopyButton = (): JSX.Element => {
  const { copyButtonText, copyToClipboard } = useMain();

  return <S.Wrapper onClick={copyToClipboard}>{copyButtonText}</S.Wrapper>;
};

export default CopyButton;
