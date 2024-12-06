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
      "The game is held on land. Will the rabbit choose to rest during the race?",
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
      "Since you reach this conclusion, you tend to pursue a society in which individual efforts are considered important.",
    image: "004.jpg",
  },
  5: {
    type: "result",
    depth: 3,
    result: "The rabbit wins",
    yourType: "REALITY",
    description:
      "Since you reach this conclusion, you tend to pursue a society that reflects a meritocratic society where individual talent is important.",
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
        text: "I can wear running shoes that can enhance my speed!",
      },
      {
        speaker: "Rabbit",
        text: "Or i can wear flippers that can reduce my speed…",
      },
    ],
  },
  8: {
    type: "question",
    depth: 4,
    question:
      "However, watching the rabbit and the turtle play separately within one game, the fox questioned who the game was for. He hoped that it would be a happy time for everyone.",
    options: [
      {
        text: "Next",
        next: 15,
      },
    ],
    image: "008.jpg",
    dialog: [
      {
        speaker: "Fox",
        text: "What's the purpose of this race if they have a race in different places like that?",
      },
    ],
  },
  9: {
    type: "result",
    depth: 4,
    result: "The rabbit or turtle wins",
    yourType: "REALITY",
    description:
      "Since you reach this conclusion, you tend to pursue a society where competition itself is overheated without realizing the purpose of competition.",
    image: "009.jpg",
  },
  10: {
    type: "question",
    depth: 4,
    question:
      "The turtle’s shoes with wheels are broken. The broken equipment is no longer functioning, so the turtle is struggling not knowing what to do.",
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
    type: "question",
    depth: 4,
    question: "The rabbit falls because its flippers are caught in a stone.",
    options: [
      {
        text: "Next",
        next: 14,
      },
    ],
    image: "011.jpg",
    dialog: [
      {
        speaker: "Rabbit",
        text: "Oh! I got stuck! My ankle!",
      },
    ],
  },
  12: {
    type: "question",
    depth: 5,
    question:
      "Now the turtle has to abandon its equipment and walk to its finish line on its injured legs.",
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
    description: (
      <>
        <span className="font-normal">
          The turtle had to walk to the injured leg and ended up losing to the
          rabbit.
        </span>
        <br />
        Since you reach this conclusion, you tend to pursue a society that tries
        to balance by enhancing the abilities of disadvantaged individuals.
      </>
    ),
    image: "013.jpg",
  },
  14: {
    type: "question",
    depth: 5,
    question:
      "Rabbit hurt her ankle and flopped down. Now the rabbit has to run to the finish line with its injured ankle. However, the rabbit couldn't go any further because her ankle hurt so much that she began to whimper.",
    options: [
      {
        text: "Next",
        next: 19,
      },
    ],
    image: "014.jpg",
    dialog: [
      {
        speaker: "Rabbit",
        text: "Oh it hurts… I have to run with my injured ankle.",
      },
    ],
  },
  15: {
    type: "question",
    depth: 4,
    question:
      "So the fox suggested that everyone participate in the game together while recognizing that the purpose of the competition is to have a good time.",
    options: [
      {
        text: "Next",
        next: 16,
      },
    ],
    image: "015.jpg",
    dialog: [
      {
        speaker: "Fox",
        text: "Let's play a game that everyone can participate in and enjoy!",
      },
    ],
  },
  16: {
    type: "question",
    depth: 5,
    question:
      "Fortunately, the dogs and the birds just wanted to take part in the game.",
    options: [
      {
        text: "Next",
        next: 17,
      },
    ],
    image: "016.jpg",
    dialog: [
      {
        speaker: "Dog",
        text: "I can run fast!",
      },
      {
        speaker: "Bird",
        text: "I can fly high!",
      },
    ],
  },
  17: {
    type: "question",
    depth: 6,
    question:
      "Turtle agreed with a new idea and he thought it would be good to form a team and set up a new way of playing.",
    options: [
      {
        text: "Next",
        next: 18,
      },
    ],
    image: "017.jpg",
    dialog: [
      {
        speaker: "Turtle",
        text: "Then let's make a team and race!",
      },
    ],
  },
  18: {
    type: "result",
    depth: 7,
    result: (
      <>
        In the end, various animals were able to form teams on each team to
        participate in the games. So it became a fun game where all the animals
        were satisfied.
        <br />
      </>
    ),
    yourType: "JUSTICE",
    image: "018.jpg",
    description: (
      <>
        You finally reached JUSTICE!
        <br />
        Since you reach this conclusion, you tend to pursue an ideal society in
        which healthy competition is built by clearly recognizing the purpose of
        competition.
      </>
    ),
  },
  19: {
    type: "result",
    depth: 5,
    result: "The turtle wins",
    yourType: "REALITY",
    description: (
      <>
        <span className="font-normal">
          In the end, the turtle who walked hard in the meantime won.{" "}
        </span>
        <br />
        Since you reach this conclusion, you tend to pursue a society that seeks
        solutions addressing imbalances through imposing constraints on the
        advantaged.
      </>
    ),
    image: "019.jpg",
  },
} as const;

// questions key types
export type QuestionKey = keyof typeof questions;
