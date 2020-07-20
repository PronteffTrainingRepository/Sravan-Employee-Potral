import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Salary = React.lazy(() => import("./views/Salary/Salary"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", name: "Home", component: Dashboard },
  { path: "/salary", name: "Salary Details", component: Salary },
  { path: "/invest", name: "Investments", component: Dashboard },
  { path: "/feed", name: "Feed", component: Dashboard },
  { path: "/form", name: "Form", component: Dashboard },
  { path: "/loan", name: "Loan", component: Dashboard },
];

export default routes;
