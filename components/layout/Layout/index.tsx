import React from "react";
import MainHeader from "components/layout/MainHeader";

interface Props extends React.PropsWithChildren {
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>
        <MainHeader/>
        { children }
      </main>
    </>
  );
};

export default Layout;