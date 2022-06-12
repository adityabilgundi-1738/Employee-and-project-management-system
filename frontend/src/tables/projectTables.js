import { useState, useEffect } from "react";
import classnames from "classnames";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

function Index(props) {
    console.log(props.proj);
    const [pr, setProps] = useState([]);
    const [activeNav, setActiveNav] = useState(1);

    const help = (props) => {
        if(props.proj.success){
            setProps(props);
        }
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        help(props);
    };

    return (
        <>
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="bg-gradient-default shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h2 className="text-white mb-0">Projects Table with their deadlines</h2>
                                    </div>
                                    <div className="col">
                                        <Nav className="justify-content-end" pills>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames("py-2 px-3", {
                                                        active: activeNav === 1,
                                                    })}
                                                    href="#pablo"
                                                    onClick={(e) => toggleNavs(e, 1)}
                                                >
                                                    <span className="d-none d-md-block">Month</span>
                                                    <span className="d-md-none">M</span>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames("py-2 px-3", {
                                                        active: activeNav === 2,
                                                    })}
                                                    data-toggle="tab"
                                                    href="#pablo"
                                                    onClick={(e) => toggleNavs(e, 2)}
                                                >
                                                    <span className="d-none d-md-block">Week</span>
                                                    <span className="d-md-none">W</span>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Card className="shadow">
                                    <Table className="align-items-center table-flush" responsive>
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Project title</th>
                                                <th scope="col">Project description</th>
                                                <th scope="col">Project status</th>
                                                <th scope="col">Deadline</th>
                                                <th scope="col">Started</th>
                                                <th scope="col" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {props.data.proj.map(proj => {
                                                    <tr>
                                                        <th scope="row">{proj.title}</th>
                                                        <td>{proj.description}</td>
                                                        <td>{proj.status}</td>
                                                    </tr>
                                                })
                                            } */}
                                            <tr>
                                                <th scope="row">title</th>
                                                <td>4,569</td>
                                                <td>340</td>
                                                <td>
                                                    <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
