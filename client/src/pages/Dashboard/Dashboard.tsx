import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};

export default Dashboard;
