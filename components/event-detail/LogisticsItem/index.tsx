import classes from './logistics-item.module.css';
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  icon: React.FC;
}

const LogisticsItem = ({ children, icon: Icon }: Props) => {

  return (
    <li className={ classes.item }>
      <span className={ classes.icon }>
        <Icon/>
      </span>
      <span className={ classes.content }>{ children }</span>
    </li>
  );
};

export default LogisticsItem;
