import React, { useState } from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {
  var title = "Employee Data";
  const [empList, setempList] = useState([
    { id: 1, name: "amit" },
    { id: 2, name: "raj" },
    { id: 3, name: "jay" },
  ]);
  const testEmp = (id)=>{
    alert("test emp called,,"+id)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      <EmployeeList title={title} empList = {empList} testEmp = {testEmp}></EmployeeList>
    </div>
  );
};
