import Header from "../../components/Headers/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tables from "../../tables/projectTables"

const url = 'http://localhost:7000/';

function Projects() {
  let [proj, setState] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  async function getAllProjects() {
    await axios.post(`${url}allProjects`)
    .then(res => {
      setState(res)
    })
    .catch((e) => console.log(`error, ${e}`));
  }

  return (
    <div>
      <Header />
    
      <Tables proj={proj.data} />
    </div>
  )
};
export default Projects;