import React, { Component } from "react";
import { Content, Text, Row, Col, Icon, Container, Grid } from "native-base";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Content style={{ backgroundColor: "red" }} />
            <Content style={{ backgroundColor: "blue" }} />
            <Col>
              <Content style={{ backgroundColor: "#fff" }} />
              <Content style={{ backgroundColor: "blue" }} />
              <Content style={{ backgroundColor: "red" }} />
            </Col>
          </Row>
          <Col>
            <Content style={{ backgroundColor: "red" }} />
            <Content style={{ backgroundColor: "blue" }} />
          </Col>
        </Grid>
      </Container>
    );
  }
}
