import { useRef, useState } from "react";
import useSound from "use-sound";

import effectSound from "../../public/effect.mp3";

import { Button } from "@/components/ui/button";
import { questions, QuestionKey } from "@/constants/questions";

const Main = () => {
  const ref = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    ref.current?.play();
  };

  return (
    <>
      <audio ref={ref} id="bgm" autoPlay loop src="/background.mp3">
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>
      <Question handlePlay={handlePlay} />
    </>
  );
};

interface QuestionProps {
  handlePlay: () => void;
}

const Question = ({ handlePlay }: QuestionProps) => {
  const [play] = useSound(effectSound);
  const [current, setCurrent] = useState<QuestionKey>(0);

  const getPrevious = (current: QuestionKey) => {
    const previous = Object.keys(questions).find((key) =>
      (questions[key]?.options || []).some(
        (option: { next: QuestionKey }) => option.next === current
      )
    );

    if (previous) {
      return parseInt(previous) as QuestionKey;
    }
    return null;
  };

  const previous = getPrevious(current);
  const stage = questions[current];

  if (stage.type === "init") {
    return (
      <>
        <div className="flex flex-col gap-y-2 w-full">
          {stage.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="w-full flex gap-2">
          {stage.options.map((option, index) => (
            <Button
              key={option.text + option.next + index}
              onClick={() => {
                play();
                handlePlay();
                setCurrent(option.next);
              }}
              variant={index % 2 === 0 ? "default" : "outline"}
              className="flex-grow text-wrap"
            >
              {option.text}
            </Button>
          ))}
        </div>
      </>
    );
  }

  if (stage.type === "result") {
    return (
      <>
        <div className="flex flex-col gap-y-2 w-full">
          <h1 className="text-primary font-bold text-lg">{stage.yourType}</h1>
          <p>{stage.result}</p>
          <p>{stage.description}</p>
        </div>
        <div className="relative max-w-md w-full aspect-square bg-[#F0F3F9]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`/images/${stage.image}`}
          />
        </div>
        <Button
          className="w-full"
          onClick={() => {
            setCurrent(1);
          }}
        >
          Restart
        </Button>
        <Button
          className="w-full"
          variant="green"
          onClick={() => {
            setCurrent(previous || 0);
          }}
        >
          Previous
        </Button>
      </>
    );
  } else if (stage.type === "question") {
    return (
      <>
        <div className="flex flex-col gap-y-2 w-full">
          <h1>
            <span className="text-primary font-bold">Q{stage.depth}. </span>
            {stage.question}
          </h1>
        </div>
        <div className="relative max-w-md w-full aspect-square bg-[#F0F3F9]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`/images/${stage.image}`}
          />
        </div>
        <div className="w-full flex gap-2">
          {stage.options.map((option, index) => (
            <Button
              key={option.text + option.next + index}
              onClick={() => {
                play();
                setCurrent(option.next);
              }}
              variant={index % 2 === 0 ? "default" : "outline"}
              className="flex-grow text-wrap p-8"
            >
              {option.text}
            </Button>
          ))}
        </div>
        <Button
          className="w-full"
          variant="green"
          onClick={() => {
            setCurrent(previous || 0);
          }}
        >
          Previous
        </Button>
      </>
    );
  }
};

export default Main;
