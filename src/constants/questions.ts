interface Question {
  type: "question";
  depth: number;
  question: string;
  options: Option[];
}

interface Option {
  text: string;
  next: QuestionKey;
}

interface Result {
  type: "result";
  depth: number;
  result: string;
  yourType: string;
  description: string;
}

export const questions = Object.freeze({
  1: Object.freeze({
    type: "question",
    depth: 1,
    question:
      "A rabbit and a turtle stand side by side in front of the starting line for the race. Is this race fair?",
    options: [
      Object.freeze({
        text: "Yes, it is fair",
        next: 2,
      }),
      Object.freeze({
        text: "No, not fair",
        next: 3,
      }),
    ],
  }),
  2: Object.freeze({
    type: "question",
    depth: 2,
    question:
      "The game is held on the land as it is. Will the rabbit choose to rest during the race?",
    options: [
      Object.freeze({
        text: "Yes",
        next: 4,
      }),
      Object.freeze({
        text: "No",
        next: 5,
      }),
    ],
  }),
  3: Object.freeze({
    type: "question",
    depth: 2,
    question:
      "Then, which is fairer between racing in an environment where each one can perform their ability sufficiently or giving additional tools?",
    options: [
      Object.freeze({
        text: "Environment",
        next: 6,
      }),
      Object.freeze({
        text: "Giving Additional tools",
        next: 7,
      }),
    ],
  }),
  4: Object.freeze({
    type: "result",
    depth: 3,
    result: "The turtle wins",
    yourType: "REALITY",
    description:
      "reflection of a society in which individual efforts are considered important",
  }),
  5: Object.freeze({
    type: "result",
    depth: 3,
    result: "The rabbit wins",
    yourType: "REALITY",
    description:
      "reflects a meritocratic society where individual talent is important",
  }),
  6: Object.freeze({
    type: "question",
    depth: 3,
    question:
      "The race is held in an environment where individuals can fully demonstrate their capabilities. Rabbits race on land and turtles race in the ocean. Will any other animal watching the race question the purpose of the game?",
    options: [
      Object.freeze({
        text: "Yes",
        next: 8,
      }),
      Object.freeze({
        text: "No",
        next: 9,
      }),
    ],
  }),
  7: Object.freeze({
    type: "question",
    depth: 3,
    question:
      "Which option is fairer for the race: providing the turtle with running shoes with wheels to enhance its speed, or requiring the rabbit to wear filppers to reduce its speed?",
    options: [
      Object.freeze({
        text: "Provide the turtle with running shoes with wheels to enhance its speed.",
        next: 10,
      }),
      Object.freeze({
        text: "Require the rabbit to wear filppers, reducing its speed to balance the competition.",
        next: 11,
      }),
    ],
  }),
  8: Object.freeze({
    type: "result",
    depth: 4,
    result:
      "Recognizing that the purpose of the competition is to have a good time together, everyone participates in the race. They create teams to participate in the race.",
    yourType: "JUSTICE",
    description:
      "Project an ideal society in which a healthy competition society is built by clearly recognizing the purpose of competition.",
  }),
  9: Object.freeze({
    type: "result",
    depth: 4,
    result: "The rabbit or turtle wins",
    yourType: "REALITY",
    description:
      "Reflects a society where competition itself is overheated without realizing the purpose of competition.",
  }),
  10: Object.freeze({
    type: "result",
    depth: 4,
    result: "The turtle wins",
    yourType: "REALITY",
    description:
      "Represents a society that tries to balance by enhancing the ablities of disadvantaged individuals",
  }),
  11: Object.freeze({
    type: "result",
    depth: 4,
    result: "The turtle wins",
    yourType: "REALITY",
    description:
      "Reflection of a society that seeks solution addressing imbalances through imposing constaints on the advantaged",
  }),
});

// questions key types
export type QuestionKey = keyof typeof questions;
