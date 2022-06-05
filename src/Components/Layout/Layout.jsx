import React from "react";
import { Container, Header, Content } from "rsuite";

import SimpleHeader from "../Header/SimpleHeader";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

function Layout() {
  return (
    <Container className="col-flex app">
      <Header>
        <SimpleHeader />
      </Header>
      <Content className="row-flex">
        <aside>
          <Sidebar />
        </aside>
        <section style={{ flex: 1 }}>
          <Dashboard />
        </section>
      </Content>
    </Container>
  );
}

export default Layout;
