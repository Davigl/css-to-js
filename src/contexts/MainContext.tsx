import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const MainContext = createContext({} as MainContextData);

type MainContextData = {
  codeInput: string;
  codeOutput: string;
  copyButtonText: string;

  setCodeInput(text: string): void;
  copyToClipboard(): void;
};

type MainContextProviderProps = {
  children: JSX.Element;
};

const startCode = `width: 100%;
height: 100vh;
border: 0;
resize: none;
padding: 20px;
font-size: 18px;
background: #111;
color: #f5f5f5;
font-family: 'Roboto Mono', monospace;
`;

export function MainContextProvider({
  children,
}: MainContextProviderProps): JSX.Element {
  const [codeInput, setCodeInput] = useState<string>(startCode);
  const [codeOutput, setCodeOutput] = useState<string>("");
  const [copyButtonText, setCopyButtonText] =
    useState<string>("Copy to clipboard");

  useEffect(() => {
    const capitalize = (word: string): string =>
      word.charAt(0).toUpperCase() + word.slice(1);

    const checkCss = codeInput.replace(/\n/g, "").replace('"', "'").split(";");
    const newCss = checkCss.map((tag) => {
      if (tag.includes("-")) {
        const newTag = tag.split("-");

        newTag.forEach((newTagElement, index) => {
          if (index !== 0) {
            newTag[index] = capitalize(newTagElement);
          }

          return newTag;
        });

        return newTag.join("");
      }

      return tag;
    });
    const quotesCss = newCss.map((newCssElement) => {
      if (newCssElement.includes(":")) {
        const quotes = newCssElement.split(":");

        quotes.forEach((quotesElement, index) => {
          if (index === 1) {
            quotes[index] = `"${quotesElement.trim()}"`;
          }

          return quotes;
        });

        return quotes.join(": ");
      }

      return newCssElement;
    });
    const finalCss = quotesCss.map((addSpace) => `  ${addSpace}`);

    setCodeOutput(finalCss.slice(0, quotesCss.length - 1).join(",\n"));
  }, [codeInput]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(`{\n${codeOutput}\n}`);
    setCopyButtonText("Copied");

    setTimeout(() => {
      setCopyButtonText("Copy to clipboard");
    }, 1000);
  }, []);

  return (
    <MainContext.Provider
      value={{
        codeInput,
        codeOutput,
        copyButtonText,
        copyToClipboard,
        setCodeInput,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMain = () => {
  return useContext(MainContext);
};
