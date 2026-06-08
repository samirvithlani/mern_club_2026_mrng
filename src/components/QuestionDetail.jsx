import React from "react";
import { useLocation } from "react-router-dom";

export const QuestionDetail = () => {
  //{que:{id,q,ans}}
  const questionObj = useLocation().state;
  console.log(questionObj);
  return (
    <div style={{ textAlign: "center" }}>
        {
            questionObj  ?
            <div>
        <h1>QUESTION DETAIL</h1>
        <h1>Question id = {questionObj.que.id}</h1>
        <h2>Question = {questionObj.que.q}</h2>
        <h3>Answer = {questionObj.que.ans}</h3>
      </div>
: "No question found"}
    </div>
  );
};
