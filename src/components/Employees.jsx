import React, { useState } from "react";
import { EmployeeList } from "./EmployeeList";
import { SelectedEmployees } from "./SelectedEmployees";

export const Employees = () => {
  var title = "Employee Data";
  const [empList, setempList] = useState([
    { id: 1, name: "amit" },
    { id: 2, name: "raj" },
    { id: 3, name: "jay" },
  ]);

  const [selectedEmp, setselectedEmp] = useState([])
  const testEmp = (id)=>{
    alert("test emp called,,"+id)
  }

  const empSelections = (id)=>{
      //id-->object.
      const foundEmp = empList.find((emp)=>emp.id == id)
      //condition..
      setselectedEmp([...selectedEmp,foundEmp])
  }

  const deleteUser = (id)=>{
    //id =1 --> [2,3]
    //id =2 -- >[1,3]
       // alert(id)

    //    const afterdelete = empList.filter((emp)=>emp.id != id);
    //    console.log(afterdelete)
    //    setempList(afterdelete)
          setempList(empList.filter((emp)=>emp.id!=id))

  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      <EmployeeList title={title} empList = {empList} testEmp = {testEmp} deleteUser = {deleteUser} empSelections = {empSelections}></EmployeeList>
      <SelectedEmployees selectedEmp ={selectedEmp}></SelectedEmployees>
    </div>
  );
};
