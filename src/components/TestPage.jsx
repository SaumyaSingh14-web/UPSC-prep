import TestCard from "./TestCard";
function TestPage() {
  return (
    <div className="grid grid-cols-2 mx-auto gap-5 py-2">
      <TestCard
        title="Title 1"
        summary="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab ullam mollitia qui esse harum. 
Lorem ipsum dolor "
        numberOfQuestions="10"
      />
      <TestCard
        title="Title 2"
        summary="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab ullam mollitia qui esse harum. 
Lorem ipsum dolor "
        numberOfQuestions="10"
      />
      <TestCard
        title="Title 3"
        summary="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab ullam mollitia qui esse harum. 
Lorem ipsum dolor "
        numberOfQuestions="10"
      />
      <TestCard
        title="Title 4"
        summary="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab ullam mollitia qui esse harum. 
Lorem ipsum dolor "
        numberOfQuestions="10"
      />
      <TestCard
        title="Title 5"
        summary="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab ullam mollitia qui esse harum. 
Lorem ipsum dolor "
        numberOfQuestions="10"
      />
    </div>
  );
}

export default TestPage;