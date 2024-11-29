import { Outlet } from "react-router-dom";

import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="flex-grow flex flex-col w-full h-full bg-background items-center">
      <Header />
      <main className="flex flex-col flex-grow items-center w-full">
        <div className="w-full h-full max-w-screen-md flex flex-grow flex-col bg-white items-center p-4 gap-2">
          <Outlet />
        </div>
        <audio src="/background.mp3" autoPlay={true}></audio>
      </main>
    </div>
  );
};

export default MainLayout;
