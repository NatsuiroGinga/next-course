import classes from './index.module.css';

function EventContent(props: any) {
  return (
    <section className={ classes.content }>
      { props.children }
    </section>
  );
}

export default EventContent;
