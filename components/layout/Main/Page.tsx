import { Wrapper } from "../../../styles/Main/PageStyle";

interface PageInterface {
  key: number;
  text: number;
  focus: boolean;
  handleClickIndex: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Page: React.FC<PageInterface> = ({ text, focus, handleClickIndex }) => {
  return (
    <Wrapper focus={focus} onClick={handleClickIndex}>
      {text + 1}
    </Wrapper>
  );
};

export default Page;
