import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";

export interface INavItemProps {
  icon: ReactNode;
  text: ReactNode;
  to: string;
  isActive: boolean;
  isOpen?: boolean;
}

const NavItem: FC<INavItemProps> = ({
  icon,
  text,
  to,
  isActive,
  isOpen = false,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper onClick={() => navigate(to)} isActive={isActive}>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      {isOpen && <Styled.TextWrapper>{text}</Styled.TextWrapper>}
    </Styled.Wrapper>
  );
};

export default NavItem;
