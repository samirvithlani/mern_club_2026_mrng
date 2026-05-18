import React from "react";

export default function Content() {
  var year = 2026;
  var country = "India";
  var isSafe = true;
  var user = {
    id: 1,
    name: "amit",
  };
  return (
    <div style={{textAlign:"center",border:"1px solid black",margin:"10px",padding:"5px"}}>
      <h1>HEllO</h1>
      <h1>YEAR = {year}</h1>
      <h2>Country = {country}</h2>
      <h2>Safe ?? {isSafe == true ? "Safe" : "Not Safe"}</h2>
      {/* <h2>{user}</h2> */}
      <h1>Name = {user.name}</h1>
      <h2>Id = {user.id}</h2>
    </div>
  );
}
