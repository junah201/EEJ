import { Link } from "react-router-dom";

import { ROUTE_MAP } from "@/constants";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-14 lg:h-16 bg-white border-b border-background">
      <div className="w-full max-w-screen-md flex justify-between items-center px-2">
        <Link to={ROUTE_MAP.MAIN} className="text-primary font-bold">
          Equity, Equality, or Justice: Where Do You Stand?
        </Link>
      </div>
    </header>
  );
};

export default Header;
