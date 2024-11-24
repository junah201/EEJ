import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex-grow flex flex-col w-full h-full bg-background items-center">
      <header></header>
      <main className="flex flex-col flex-grow items-center w-full">
        <div className="w-full h-full max-w-screen-md flex flex-grow flex-col bg-white items-center p-4">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
