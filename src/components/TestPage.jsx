import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TestCard from "./TestCard";
function TestPage() {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./questions.json")
      .then((response) => {
        // console.log(response.clone().json())
        return response.json();
      })
      .then((data) => setData(data));
  }, []);
  console.log("data", data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 py-2">
      {data.map((item, index) => (
        <div key={index}>
          <TestCard
            onClick={() => history.push(`/quiz/${index}`)}
            title={item.title}
            summary={item.summary}
            numberOfQuestions={item.quiz.length}
          />
        </div>
      ))}
    </div>
  );
}

export default TestPage;
