import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
