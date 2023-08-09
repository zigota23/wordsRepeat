import { useId } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { dataItem } from "./data";
import NavItem from "./item";
import NavLogo from "./logo";
import * as Styled from "./style";

const Nav = () => {
  const idComponent = useId();
  const { pathname } = useLocation();
  const { isOpenNav } = useGlobalContext().data;

  return (
    <Styled.Wrapper isOpen={isOpenNav}>
      <NavLogo />

      {dataItem(pathname).map((item, index) => (
        <NavItem {...item} key={idComponent + "." + index} isOpen={isOpenNav} />
      ))}
    </Styled.Wrapper>
  );
};

export default Nav;
