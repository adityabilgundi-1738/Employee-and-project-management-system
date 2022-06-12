import Header from "../../components/Headers/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tables from "../../tables/employeeTables"

const url = 'http://localhost:7000/';

function Employee() {
  let [emp, setState] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  async function getAllEmployee() {
    await axios.post(`${url}allEmployee`)
    .then(res => {
      setState(res)
    })
      .catch((e) => console.log(`error, ${e}`));
  }

  return (
    <div>
      <Header />
      <Tables emp={emp.data} />
    </div>
  )
};
export default Employee;