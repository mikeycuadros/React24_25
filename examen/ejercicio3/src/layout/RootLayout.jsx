import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <main>
        <Outlet />
      </main>
      <footer>Footer Content</footer>
    </>
  );
};

export default RootLayout;
