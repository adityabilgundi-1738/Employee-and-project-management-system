import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const url = 'http://localhost:7000/';

function Forms() {
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setstartDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const newproj = async (title, descrip, status, startDate, deadline) => {
    const res = await axios.post(`${url}newProject`, { title: title, descrip: descrip, startDate: startDate, status: status, deadline: deadline })
      .then(res => {
        // console.log(res)
      })
      .catch(e => console.log(`error, ${e}`))
  }

  const createProject = async () => {
    if (!(title && descrip && status && startDate && deadline)) {
      setError("Make sure to fill all the inputs !");
      return;
    }

    const res = await newproj(title, descrip, startDate, status, deadline)
    // const { data } = res;
    console.log(res);

    // if(!data.success){
    //   setError(data.msg)
    //   return;
    // }

    setError("");
    setTitle("");
    setDescrip("");
    setStatus("");
    setstartDate("");
    setDeadline("");
  }

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
                    onChange={e => setTitle(e.target.value)}
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
                    onChange={e => setDescrip(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md="9">
                <FormGroup>
                  <label htmlFor="">Project Status</label>
                  <Input
                    className="form-control-alternative"
                    id="level"
                    placeholder="Eg. 22/05/2022"
                    type="string"
                    onChange={e => setstartDate(e.target.value)}
                  />
                  <br />
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="secondary"
                      id="dropdownMenuButton"
                      type="button"
                    >
                      Project Status
                    </DropdownToggle>

                    <DropdownMenu aria-labelledby="dropdownMenuButton">
                      <DropdownItem onClick={e => setStatus(e.target.value)}>
                        Completed
                      </DropdownItem>

                      <DropdownItem onClick={e => setStatus(e.target.value)}>
                        In-progess
                      </DropdownItem>

                      <DropdownItem onClick={e => setStatus(e.target.value)}>
                        NoStatus
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
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
                    onChange={e => setstartDate(e.target.value)}
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
                    onChange={e => setDeadline(e.target.value)}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row>
              <div className="text-center">
                <Button onClick={createProject} className="mt-4" color="primary" type="button">
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
export default Forms;