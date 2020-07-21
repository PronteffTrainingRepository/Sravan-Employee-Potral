import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Salary = React.lazy(() => import("./views/Salary/Salary"));
const CoWorkers = React.lazy(() => import("./views/CoWorkers/CoWorkers"));
const Form = React.lazy(() => import("./views/Form/Form"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", name: "Home", component: Dashboard },
  { path: "/salary", name: "Salary Details", component: Salary },
  { path: "/coworkers", name: "Co-Workers", component: CoWorkers },
  { path: "/feed", name: "Feed", component: Dashboard },
  { path: "/form", name: "Form", component: Form },
  { path: "/loan", name: "Loan", component: Dashboard },
];

export default routes;
