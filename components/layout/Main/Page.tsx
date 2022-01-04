import { Wrapper } from "../../../styles/Main/PageStyle";

interface PageInterface {
  key: number;
  text: number;
  focus: boolean;
  handlePage: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Page: React.FC<PageInterface> = ({ text, focus, handlePage }) => {
  return (
    <Wrapper onClick={handlePage} focus={focus}>
      {text}
    </Wrapper>
  );
};

export default Page;
