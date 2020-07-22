import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Salary = React.lazy(() => import("./views/Salary/Salary"));
const CoWorkers = React.lazy(() => import("./views/CoWorkers/CoWorkers"));
const Form = React.lazy(() => import("./views/Form/Form"));
const Profile = React.lazy(() => import("./views/Profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", name: "Home", component: Dashboard },
  { path: "/salary", name: "Salary Details", component: Salary },
  { path: "/coworkers", name: "Co-Workers", component: CoWorkers },
  { path: "/feed", name: "Feed", component: Dashboard },
  { path: "/form", name: "Form", component: Form },
  { path: "/profile", name: "Profile", component: Profile },
];

export default routes;
