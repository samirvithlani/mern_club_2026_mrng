import React from "react";
import { Link } from "react-router-dom";

export const Questions = () => {
  const questions = [
    { id: 1, q: "where is india", ans: "asia" },
    { id: 2, q: "who is pm of india", ans: "Narendra Modi" },
    {id:3,q:"what is 1 + 1 ",ans:"2"},
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>QUESTION COMPONENET</h1>
      <ul>
        {
            //{ id: 1, q: "where is india", ans: "asia" },
            questions.map((que)=>{
                return <li>
                    <Link to="/questiondetail" state={{que}}>{que.q}</Link>
                </li>
            })
        }
      </ul>
    </div>
  );
};
