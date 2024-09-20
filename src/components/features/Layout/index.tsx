import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
