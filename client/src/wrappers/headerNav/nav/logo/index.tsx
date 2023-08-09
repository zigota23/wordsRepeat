import DiamondIcon from "@mui/icons-material/Diamond";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import * as Styled from "./style";
import { useGlobalContext } from "../../../../hooks/useGlobalContext";
import { ReactComponent as Logo } from "../../../../assets/img/logo.svg";

const NavLogo = () => {
  const {
    changeData,
    data: { isOpenNav },
  } = useGlobalContext();

  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        <Logo />
      </Styled.LogoWrapper>
      {isOpenNav && <Styled.LogoText>Easy English</Styled.LogoText>}
      <Styled.CloseButtonWrapper
        onClick={() => changeData("isOpenNav", !isOpenNav)}
        isOpen={isOpenNav}
      >
        <ArrowBackIosNewIcon />
      </Styled.CloseButtonWrapper>
    </Styled.Wrapper>
  );
};

export default NavLogo;
