import ContentInfoModal from "../components/layout/ContentInfo";
import styled from "styled-components";
import Link from "next/link";

const Test: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/content/5fe2fe3ec8c2dd00137f5d0b">1</Link>
      <Link href="/content/2">2</Link>
      <Link href="/content/3">3</Link>
      <Link href="/content/4">4</Link>
      <Link href="/content/5">5</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 25%;
`;

export default Test;
