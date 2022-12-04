import React, { PropsWithChildren } from "react";
import Button from "components/ui/Button";

interface Props extends PropsWithChildren {
  // 跳转的链接
  link: string;
  // 要做的事情
  toDo: string;
}

// 事件未找到组件
const EventNotFound = (props: Props) => {
  const { children, link, toDo } = props;

  return (
    <>
      { children ? <p>{ children }</p> : <></> }
      <div className={ "center" }>
        <Button link={ link }>{ toDo }</Button>
      </div>
    </>
  );
};

export default EventNotFound;