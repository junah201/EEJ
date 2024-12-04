interface Question {
  type: "question";
  depth: number;
  question: string;
  options: Option[];
  image: string;
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
  image: string;
}

export const questions = {
  0: {
    type: "init",
    description: [
      `Have you ever wondered, "What if the rabbit hadn't taken a break?" or "What if the rabbit and the turtle had raced in the sea?"`,
      `This personality test is inspired by the classic fable of the rabbit and the turtle. Every choice you make will reveal whether you place the most value on equity, equality, justice, or reality.`,
      `This test takes approximately 3 minutes to complete.`,
    ],
    options: [
      {
        text: "Start Test",
        next: 1,
      },
    ],
  },
  1: {
    type: "question",
    depth: 1,
    question:
      "A rabbit and a turtle stand side by side in front of the starting line for the race. Is this race fair?",
    options: [
      {
        text: "Yes, it is fair",
        next: 2,
      },
      {
        text: "No, not fair",
        next: 3,
      },
    ],
    image: "001.jpg",
    dialog: [
      {
        speaker: "Rabbit",
        text: "lets start the race!",
      },
      {
        speaker: "Turtle",
        text: "Is this race fair?",
      },
    ],
  },
  2: {
    type: "question",
    depth: 2,
    question:
      "The game is held on the land as it is. Will the rabbit choose to rest during the race?",
    options: [
      {
        text: "Yes",
        next: 4,
      },
      {
        text: "No",
        next: 5,
      },
    ],
    image: "002.jpg",
    dialog: [
      {
        speaker: "Rabbit",
        text: "I’m so tired… should I take a rest?",
      },
    ],
  },
  3: {
    type: "question",
    depth: 2,
    question:
      "Then, which is fairer between racing in an environment where each one can perform their ability sufficiently or giving additional tools?",
    options: [
      {
        text: "Environment",
        next: 6,
      },
      {
        text: "Giving Additional tools",
        next: 7,
      },
    ],
    image: "003.jpg",
    dialog: [
      {
        speaker: "Turtle",
        text: "I will race in the water and you can race on the ground.",
      },
      {
        speaker: "Rabbit",
        text: "Or we can use additional tools to make the race fair!",
      },
    ],
  },
  4: {
    type: "result",
    depth: 3,
    result: "The turtle wins",
    yourType: "REALITY",
    description:
      "reflection of a society in which individual efforts are considered important",
    image: "004.jpg",
  },
  5: {
    type: "result",
    depth: 3,
    result: "The rabbit wins",
    yourType: "REALITY",
    description:
      "reflects a meritocratic society where individual talent is important",
    image: "005.jpg",
  },
  6: {
    type: "question",
    depth: 3,
    question:
      "The race is held in an environment where individuals can fully demonstrate their capabilities. Rabbits race on land and turtles race in the ocean. Will any other animal watching the race question the purpose of the game?",
    options: [
      {
        text: "Yes",
        next: 8,
      },
      {
        text: "No",
        next: 9,
      },
    ],
    image: "006.jpg",
    dialog: [
      {
        speaker: "Rabbit",
        text: "I will race on the ground. then you race under the water.",
      },
      {
        speaker: "Turtle",
        text: "Oh, there are other animals! Will they happy to see our race, even though they are not joining?",
      },
    ],
  },
  7: {
    type: "question",
    depth: 3,
    question:
      "Which option is fairer for the race: providing the turtle with running shoes with wheels to enhance its speed, or requiring the rabbit to wear filppers to reduce its speed?",
    options: [
      {
        text: "Provide the turtle with running shoes with wheels to enhance its speed.",
        next: 10,
      },
      {
        text: "Require the rabbit to wear filppers, reducing its speed to balance the competition.",
        next: 11,
      },
    ],
    image: "007.jpg",
    dialog: [
      {
        speaker: "Turtle",
        text: "I can ware running shoes that can enhance my speed!",
      },
      {
        speaker: "Rabbit",
        text: "Or i can ware flippers that can reduce my speed…",
      },
    ],
  },
  8: {
    type: "result",
    depth: 4,
    result:
      "Recognizing that the purpose of the competition is to have a good time together, everyone participates in the race. They create teams to participate in the race.",
    yourType: "JUSTICE",
    description:
      "Project an ideal society in which a healthy competition society is built by clearly recognizing the purpose of competition.",
    image: "008.jpg",
    restart: 1,
  },
  9: {
    type: "result",
    depth: 4,
    result: "The rabbit or turtle wins",
    yourType: "REALITY",
    description:
      "Reflects a society where competition itself is overheated without realizing the purpose of competition.",
    image: "009.jpg",
  },
  10: {
    type: "question",
    depth: 4,
    question:
      "The turtle's shoes with wheels are broken. He is now unable to move forward or backward. Also he got serious injury.",
    options: [
      {
        text: "Next",
        next: 12,
      },
    ],
    image: "010.jpg",
    dialog: [
      {
        speaker: "Turtle",
        text: "My wheels are broke! I got injured!",
      },
    ],
  },
  11: {
    type: "result",
    depth: 4,
    result: "The turtle wins",
    yourType: "REALITY",
    description:
      "Reflection of a society that seeks solution addressing imbalances through imposing constaints on the advantaged",
    image: "011.jpg",
  },
  12: {
    type: "question",
    depth: 5,
    question:
      "Eventually, the turtle decided to take off its shoes and walk on foot.",
    options: [
      {
        text: "Next",
        next: 13,
      },
    ],
    image: "012.jpg",
  },
  13: {
    type: "result",
    depth: 4,
    result: "The rabbit wins",
    yourType: "REALITY",
    description:
      "Represents a society that tries to balance by enhancing the ablities of disadvantaged individuals.",
    image: "013.jpg",
  },
} as const;

// questions key types
export type QuestionKey = keyof typeof questions;
