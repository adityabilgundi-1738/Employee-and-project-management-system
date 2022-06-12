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
              <h1 className="display-3">Create a new Project</h1>
            </div>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col md="9">
                  <FormGroup>
                    <label for="Name">Project Title</label>
                    <Input
                      className="form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="EMS Lattech"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <label for="Name">Project Description</label>
                    <Input
                      className="form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="A simple Employee management system"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <label for="Password">Status</label>
                    <Input
                      className="form-control-alternative"
                      id="**********"
                      placeholder="On-going"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <label for="level">Project start date</label>
                    <Input
                      className="form-control-alternative"
                      id="level"
                      placeholder="Eg. 22/05/2022"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <label for="level">Project deadline</label>
                    <Input
                      className="form-control-alternative"
                      id="level"
                      placeholder="Eg. 12/06/2022"
                      type="string"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                    Create Project
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