import { FC, ReactNode, useContext } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import Header from "./header";
import Nav from "./nav";
import * as Styled from "./style";

interface IProps {
  children: ReactNode;
}

const WrapperHeaderNav: FC<IProps> = ({ children }) => {
  const { isOpenNav } = useGlobalContext().data;

  return (
    <Styled.Wrapper>
      <Styled.WrapperNav isOpen={isOpenNav}>
        <Nav />
      </Styled.WrapperNav>
      <Styled.WrapperHeaderChildren isOpen={isOpenNav}>
        <Header />
        <Styled.WrapperChildren>{children}</Styled.WrapperChildren>
      </Styled.WrapperHeaderChildren>
    </Styled.Wrapper>
  );
};

export default WrapperHeaderNav;
