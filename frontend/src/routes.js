//admin
import adminIndex from "views/admin/adminIndex.js";
import newProject from "views/admin/createProject.js"
import newEmployee from "views/admin/newEmployee.js"
import employeeIndex from "views/admin/EmployeeIndex"

//common
import Profile from "views/common/Profile.js";

//auth
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";

var routes = [
  {
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
    path:"/newEmployee",
    name: "Add a New Employee",
    icon: "ni ni-briefcase-24 text-primary",
    component: newEmployee,
    layout: "/admin"
  },
  {
    path: "/employeeIndex",
    name: "All Employee",
    icon: "ni ni-settings text-blue",
    component: employeeIndex,
    layout: "/admin",
  },
  {
    path: "/details",
    name: "Your Profile",
    icon: "ni ni-satisfied text-primary",
    component: Profile,
    layout: "/admin"
  },  
  // {
  //   path: "/index",
  //   name: "Index",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: userIndex,
  //   layout: "/user"
  // },
  // {
  //   path: "/details",
  //   name: "Profile",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Profile,
  //   layout: "/user"
  // },
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