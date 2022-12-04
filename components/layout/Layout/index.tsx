import React from "react";
import MainHeader from "components/layout/MainHeader";

interface Props extends React.PropsWithChildren {
}

const Layout = (props: Props) => {
  return (
    <>
      <main>
        <MainHeader/>
        { props.children }
      </main>
    </>
  );
};

export default Layout;