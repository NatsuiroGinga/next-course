import classes from './index.module.css';
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
}

const EventContent = ({ children }: Props) => (
  <section className={ classes.content }>
    { children }
  </section>
);

export default EventContent;
