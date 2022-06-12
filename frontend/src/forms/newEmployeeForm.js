import React from "react";

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  disabled
                  placeholder="Regular"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="form-control-alternative"
                    placeholder="Search"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-4">
                  <Input placeholder="Birthday" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup className="has-success">
                <Input
                  className="form-control-alternative is-valid"
                  placeholder="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="has-danger">
                <Input
                  className="form-control-alternative is-invalid"
                  placeholder="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;