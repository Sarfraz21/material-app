import React from "react";
import EmployeesForm from "./EmployeesForm";
import PageHeader from './../../Component/PageHeader';
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const Employees = () => {
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <EmployeesForm />
    </>
  );
};

export default Employees;
