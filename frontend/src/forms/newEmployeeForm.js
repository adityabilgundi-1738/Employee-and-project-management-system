import React from "react";

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Card className="bg-secondary shadow border-0">
          <CardHeader>
            <div className="text-center">
              <h1 className="display-3">Register new Employee</h1>
            </div>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label for="Name">Employee name</label>
                    <Input
                      className="form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="Adam mark steven"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <label for="Name">Employee email</label>
                    <Input
                      className="form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="yourname@example.com"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <label for="Password">Employee password</label>
                    <Input
                      className="form-control-alternative"
                      id="**********"
                      placeholder="Password"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <label for="level">Employee level</label>
                    <Input
                      className="form-control-alternative"
                      id="level"
                      placeholder="Your level"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <label for="level">Date Joined</label>
                    <Input
                      className="form-control-alternative"
                      id="level"
                      placeholder="Eg. 22/5/2020"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <label for="level">Date resigned</label>
                    <Input
                      className="form-control-alternative"
                      id="level"
                      placeholder="Eg. 12/11/2022"
                      type="string"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                    Create Employee
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Forms;