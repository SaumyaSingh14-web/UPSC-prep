import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { quiz } from "../constants/constant";
import Button from "./Button";
import Options from "./Options";
function QuizWindow() {
  const { id } = useParams();
  const quizes = quiz[id];
  console.log(quizes);
  const [option, setOption] = useState(new Array(quizes.quiz.length).fill(""));
  console.log("option", option);
  const handleSubmit = (event) => {
    var marks = 0;
    event.preventDefault();
    for (var i = 0; i < quizes.quiz.length; ++i) {
      const selectedByUser = option[i];
      const actualAnswer = quizes.quiz[i][quizes.quiz[i].answer];
      console.log(
        "selectedByUser",
        selectedByUser,
        "actualAnswer",
        actualAnswer,
        "T/F",
        selectedByUser === actualAnswer
      );
      if (selectedByUser === actualAnswer) {
        marks += 10;
      }
    }
    localStorage.setItem("marksObtained", marks);
    window.location.href = "/success";
  };

  return (
    <div>
      <div className="text-3xl font-bold uppercase text-center my-10 text-orange-600">
        {quizes?.title}
      </div>
      <form method="get" onSubmit={handleSubmit}>
        {quizes?.quiz?.map((item, index) => (
          <div key={index}>
            <dl className="ml-5 my-5">
              <dt>
                <span>{index + 1}.</span>
                <span className="ml-3 font-bold text-sm md:text-lg">
                  {item.question}
                </span>
              </dt>
              <dd className="font-semibold text-sm md:text-base">
                <Options
                  option={item.a}
                  name={`option[${index}]`}
                  onChange={() => {
                    setOption((prev) => {
                      const data = [...prev];
                      data[index] = item.a;
                      return data;
                    });
                  }}
                  value={option[index]}
                />
                <Options
                  option={item.b}
                  name={`option[${index}]`}
                  onChange={() => {
                    setOption((prev) => {
                      const data = [...prev];
                      data[index] = item.b;
                      return data;
                    });
                  }}
                  value={option[index]}
                />
                <Options
                  option={item.c}
                  name={`option[${index}]`}
                  onChange={() => {
                    setOption((prev) => {
                      const data = [...prev];
                      data[index] = item.c;
                      return data;
                    });
                  }}
                  value={option[index]}
                />
                <Options
                  option={item.d}
                  name={`option[${index}]`}
                  onChange={() => {
                    setOption((prev) => {
                      const data = [...prev];
                      data[index] = item.d;
                      return data;
                    });
                  }}
                  value={option[index]}
                />
              </dd>
            </dl>
          </div>
        ))}
        <div>
          <Button
            btn="submit"
            className="fixed bottom-5 right-16 md:bottom-16 md:right-20"
            // onClick={async (event) => {
            //   await handleSubmit(event);
            //   alert(`Marks obtained: ${marks}`);
            //   console.log("marks", marks);
            //   window.location.reload();
            // }}
          />
        </div>
      </form>
    </div>
  );
}

export default QuizWindow;