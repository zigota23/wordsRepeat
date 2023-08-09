import { Button } from "@mui/joy";
import WrapperHeaderNav from "../../wrappers/headerNav";
import * as Styled from "./style";

const MainPage = () => {
  return (
    <WrapperHeaderNav>
      <Styled.Wrapper>
        <Button color="neutral" size="lg">
          day 1
        </Button>
        <Button color="danger" size="lg">
          day 2
        </Button>
        <Button color="info" size="lg">
          day 4
        </Button>
        <Button color="warning" size="lg">
          day 8
        </Button>
        <Button color="primary" size="lg">
          day 16
        </Button>
        <Button color="success" size="lg">
          day 32
        </Button>
      </Styled.Wrapper>
    </WrapperHeaderNav>
  );
};

export default MainPage;
