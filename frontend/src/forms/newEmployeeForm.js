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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [datejoined, setDatejoined] = useState("");
  const [error, setError] = useState("");

  const newEmp = async (name, email, password, level, datejoined) => {
    const res = await axios.post(`${url}newEmployee`, { name: name, email: email, password: password, level: level, datejoined: datejoined })
      .then(res => {
        // console.log(res)
      })
      .catch(e => console.log(`error, ${e}`))
  }

  const createEmployee = async () => {
    if (!(name && email && password && level && datejoined)) {
      setError("Make sure to fill all the inputs !");
      return;
    }

    const res = await newEmp(name, email, password, level, datejoined)
    // const { data } = res;
    console.log(res);

    // if(!data.success){
    //   setError(data.msg)
    //   return;
    // }

    setError("");
    setName("");
    setEmail("");
    setPassword("");
    setLevel("");
    setDatejoined("");
  }

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
                  <label>Employee name</label>
                  <Input
                    className="form-control-alternative"
                    id="exampleFormControlInput1"
                    placeholder="Adam mark steven"
                    type="string"
                    onChange={e => setName(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <label>Employee email</label>
                  <Input
                    className="form-control-alternative"
                    id="exampleFormControlInput1"
                    placeholder="yourname@example.com"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <label>Employee password*</label>
                  <Input
                    className="form-control-alternative"
                    id="**********"
                    placeholder="Password"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>

              {/* <Col md="12">
                <FormGroup>
                  <label>Confirm password*</label>
                  <Input
                    className="form-control-alternative"
                    id="**********"
                    placeholder="Password"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormGroup>
              </Col> */}

              <Col md="12">
                <FormGroup>
                  <label>Employee level</label>
                  <Input
                    className="form-control-alternative"
                    id="level"
                    placeholder="Your level"
                    type="string"
                    onChange={e => setLevel(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <label>Date Joined</label>
                  <Input
                    className="form-control-alternative"
                    id="level"
                    placeholder="Eg. 22/5/2020"
                    type="string"
                    onChange={e => setDatejoined(e.target.value)}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row>
              <div className="text-center">
                <Button onClick={createEmployee} className="mt-4" color="primary" type="button">
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


export default Forms;