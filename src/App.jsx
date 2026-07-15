import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
///import './App.css'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Content from "./components/Content";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { Route, Routes } from "react-router-dom";
import { Movis } from "./components/hotstar/Movis";
import { Shows } from "./components/hotstar/Shows";
import { Navbar } from "./components/Navbar";
import { Watch } from "./components/hotstar/Watch";
import { Teams } from "./components/hotstar/Teams";
import { TeamDetail } from "./components/hotstar/TeamDetail";
import { Questions } from "./components/Questions";
import { QuestionDetail } from "./components/QuestionDetail";
import { FuncCall } from "./components/FuncCall";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Employees } from "./components/Employees";
import { TableDemo } from "./components/TableDemo";
import { MyTable2 } from "./components/MyTable2";
import { InputDemo1 } from "./components/InputDemo1";
import { InputDemo2 } from "./components/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { FormDemo5 } from "./components/form/FormDemo5";
import { FormDemo6 } from "./components/form/FormDemo6";
import { FormDemo7 } from "./components/form/FormDemo7";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo5 } from "./components/api/ApiDemo5";
import { Slide, ToastContainer } from "react-toastify";
import { UpdateUser } from "./components/api/UpdateUser";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Navbar></Navbar>
      <Routes>
        <Route path="/movies" element={<Movis />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/teamdetail/:id" element={<TeamDetail />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/questiondetail" element={<QuestionDetail />}></Route>
        <Route path="/funcall" element={<FuncCall />}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1 />}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2 />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/tabledemo" element={<TableDemo />}></Route>
        <Route path="tabledemo2" element={<MyTable2></MyTable2>}></Route>
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/inputdemo2" element={<InputDemo2 />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route>
        <Route path="/formdemo6" element={<FormDemo6 />}></Route>
        <Route path="/formdemo7" element={<FormDemo7 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo5" element={<ApiDemo5 />}></Route>
        <Route path="/updateuser/:id" element ={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
