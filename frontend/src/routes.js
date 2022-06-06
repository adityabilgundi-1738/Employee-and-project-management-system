//admin
import adminIndex from "views/admin/adminIndex.js";
import newProject from "views/admin/createProject.js"
import newEmployee from "views/admin/newEmployee.js"
import employeeList from "views/admin/EmployeeList";

//common
import Profile from "views/common/Profile.js";

//user
import userIndex from "views/user/userIndex.js";

//auth
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";

var routes = [
  {//done
    path: "/index",
    name: "All Projects",
    icon: "ni ni-bullet-list-67 text-red",
    component: adminIndex,
    layout: "/admin",
  },
  {
    path: "/newProject",
    name: "Create a new Project",
    icon: "ni ni-laptop text-red",
    component: newProject,
    layout: "/admin"
  },
  {
    path:"/addEmployee",
    name: "Add a New Employee",
    icon: "ni ni-briefcase-24 text-primary",
    component: newEmployee,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "All Employee",
    icon: "ni ni-settings text-blue",
    component: employeeList,
    layout: "/admin",
  },
  {//done
    path: "/details",
    name: "Profile",
    icon: "ni ni-satisfied text-primary",
    component: Profile,
    layout: "/admin"
  },  
  {
    path: "/index",
    name: "Index",
    icon: "ni ni-tv-2 text-primary",
    component: userIndex,
    layout: "/user"
  },
  {
    path: "/details",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Profile,
    layout: "/user"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;