import classes from './index.module.css';
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
}

const ErrorAlert = ({ children }: Props) => {
  const { alert } = classes;

  return (
    <div className={ alert }>
      { children }
    </div>
  );
};

export default ErrorAlert;
