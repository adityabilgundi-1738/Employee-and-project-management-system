import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button
} from "reactstrap";

import Header from "../../components/Headers/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tables() {
    const [emp, getEmployee] = useState('');

    const url = 'http://localhost:7000/';

    useEffect(() => {
        getAllEmployee();
    }, []);

    const getAllEmployee = async () => {
        await axios.get(`${url}newProject`).then((res) => {
            const allEmp = res.data;
            console.log(allEmp);
            getEmployee(allEmp);
        })
            .catch((e) => console.log(`error, ${e}`));
    }

    return (
        <div>
            <Header />
        </div>
    )
};