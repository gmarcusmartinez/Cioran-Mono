import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, ContentSection } from "./styles";
import Sidebar from "./Sidebar/Sidebar";
import Projects from "./Projects/Projects";

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <ContentSection>
        <Switch>
          <Route path="/dashboard/projects" component={Projects} />
        </Switch>
      </ContentSection>
    </Container>
  );
};

export default Dashboard;
