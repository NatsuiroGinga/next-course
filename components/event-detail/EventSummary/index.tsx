import classes from './index.module.css';

function EventSummary(props: any) {
  const { title } = props;

  return (
    <section className={ classes.summary }>
      <h1>{ title }</h1>
    </section>
  );
}

export default EventSummary;