import classes from './index.module.css';

interface Props {
  title: string;
}

const EventSummary = ({ title }: Props) => {
  return (
    <section className={ classes.summary }>
      <h1>{ title }</h1>
    </section>
  );
};

export default EventSummary;