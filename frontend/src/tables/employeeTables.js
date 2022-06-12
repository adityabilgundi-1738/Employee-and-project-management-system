import { useState } from "react";
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
    const [pr, setProps] = useState([]);
    const [activeNav, setActiveNav] = useState(1);
    
    console.log(props.emp);

    const help = (props) => {
        setProps(props);
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
                                                <th scope="col">Employee name</th>
                                                <th scope="col">Employee email</th>
                                                <th scope="col">Employee level</th>
                                                <th scope="col">Started</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {
                                                props.data.project.map(proj => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{proj.title}</th>
                                                            <td>{proj.description}</td>
                                                            <td>{proj.password}</td>
                                                        </tr>
                                                    )
                                                })
                                            } */}

                                            {/* dummy */}
                                            <tr>
                                                <th scope="row">Adam</th>
                                                <td>adam@yahoo.com</td>
                                                <td>Beginner</td>
                                                <td>12/07/2022</td>
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
