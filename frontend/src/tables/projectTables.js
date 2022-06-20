import { useState, useEffect } from "react";
import classnames from "classnames";
import axios from 'axios';

import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

const url = 'http://localhost:7000/'

function Index() {
    const [proj, setProjects] = useState([]);

    const getAllProjects = async () => {
        await axios.post(`${url}allProjects`)
            .then(res => {
                setProjects(res.data);
            })
            .catch((e) => {
                console.log(`error, ${e}`);
            })
    }

    useEffect(() => {
        getAllProjects();
    }, []);

    const [activeNav, setActiveNav] = useState(1);

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
    };

    const getRows = () => {
        if (proj.success) {
            var projectArray = proj['project'];
            return (
                <>
                    {
                        projectArray.map(item => (
                            <tr data-testid='projects'>
                                <th scope="row">{item.title}</th>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                                <td>{item.deadline}</td>
                                <td>{item.started}</td>
                            </tr>
                        ))
                    }
                </>
            )
        }
    }

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
                                            {getRows()}
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
