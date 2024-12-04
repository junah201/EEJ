import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

import effectSound from "../../public/effect.mp3";

import { Button } from "@/components/ui/button";
import { questions, QuestionKey } from "@/constants/questions";

const Main = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const dialogRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    ref.current?.play();
  };

  return (
    <>
      <audio ref={ref} id="bgm" autoPlay loop src="/background.mp3">
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={dialogRef} id="dialog" />
      <Question handlePlay={handlePlay} dialogRef={dialogRef} />
    </>
  );
};

interface QuestionProps {
  handlePlay: () => void;
  dialogRef: React.RefObject<HTMLAudioElement>;
}

const Question = ({ handlePlay, dialogRef }: QuestionProps) => {
  const [play] = useSound(effectSound);
  const [current, setCurrent] = useState<QuestionKey>(0);

  const getPrevious = (current: QuestionKey) => {
    if (current <= 1) {
      return null;
    }
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

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.pause();
      setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.src = `/dialog/${current}.m4a`;
          dialogRef.current.play();
        }
      }, 1000);
    }
  }, [current]);

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
          <h1 className="text-primary font-bold text-lg text-center">
            {stage.yourType}
          </h1>
          <p className="text-center">{stage.result}</p>
          <p className="font-bold text-center">{stage.description}</p>
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
        {stage.dialog && (
          <div className="flex flex-col gap-2">
            {stage.dialog.map((dialog, index) => (
              <div key={current + dialog.speaker} className="flex gap-2">
                <h2 className="text-primary font-bold">{dialog.speaker}</h2>
                <p>{dialog.text}</p>
              </div>
            ))}
          </div>
        )}
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
              className={`flex-grow text-wrap ${
                option.text === "Next" ? "" : "p-8"
              }`}
            >
              {option.text}
            </Button>
          ))}
        </div>
        {previous !== null && (
          <Button
            className="w-full"
            variant="green"
            onClick={() => {
              setCurrent(previous);
            }}
          >
            Previous
          </Button>
        )}
        {stage.dialog && (
          <div
            className="flex flex-col gap-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => {
              if (dialogRef.current) {
                dialogRef.current.src = `/dialog/${current}.m4a`;
                dialogRef.current.play();
              }
            }}
          >
            {stage.dialog.map((dialog, index) => (
              <div key={current + dialog.speaker} className="flex gap-2">
                <h2 className="text-primary font-bold">{dialog.speaker}</h2>
                <p>{dialog.text}</p>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
};

export default Main;
