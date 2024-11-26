import { useState } from "react";

import { Button } from "@/components/ui/button";
import { questions, QuestionKey } from "@/constants/questions";

const Question = () => {
  const [current, setCurrent] = useState<QuestionKey>(1);

  const stage = questions[current];

  if (stage.type === "result") {
    return (
      <>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-primary font-bold text-lg">{stage.yourType}</h1>
          <p>{stage.result}</p>
          <p>{stage.description}</p>
        </div>
        <div className="aspect-square max-w-md">
          <img src={`/images/${stage.image}`} className="object-fit" />
        </div>
        <Button className="w-full" onClick={() => setCurrent(1)}>
          Restart
        </Button>
      </>
    );
  } else if (stage.type === "question") {
    return (
      <>
        <h1>
          <span className="text-primary font-bold">Q{stage.depth}. </span>
          {stage.question}
        </h1>
        <div className="aspect-square max-w-md">
          <img src={`/images/${stage.image}`} className="object-fit" />
        </div>
        <div className="w-full flex gap-2">
          {stage.options.map((option, index) => (
            <Button
              key={option.text + option.next + index}
              onClick={() => setCurrent(option.next)}
              variant={index % 2 === 0 ? "default" : "outline"}
              className="flex-grow text-wrap p-8"
            >
              {option.text}
            </Button>
          ))}
        </div>
      </>
    );
  }
};

export default Question;
