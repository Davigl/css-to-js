import { FaGithub } from "react-icons/fa";

import * as S from "./styles";

const GithubLink = (): JSX.Element => (
  <S.Wrapper>
    <p>Star</p>
    <a
      href="http://github.com/davigl/css-to-js"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </S.Wrapper>
);

export default GithubLink;
