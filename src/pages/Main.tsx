import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ROUTE_MAP } from "@/constants";

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 w-full">
        <p>
          Have you ever wondered, "What if the rabbit hadn't taken a break?" or
          "What if the rabbit and the turtle had raced in the sea?"
        </p>
        <p>
          This personality test is inspired by the classic fable of the rabbit
          and the turtle. Every choice you make will reveal whether you place
          the most value on equity, equality, justice, or reality.
        </p>
        <p>This test takes approximately 3 minutes to complete.</p>
      </div>
      <Button asChild className="w-full">
        <Link to={ROUTE_MAP.QUESTION}>Start Test</Link>
      </Button>
    </>
  );
};

export default Main;
