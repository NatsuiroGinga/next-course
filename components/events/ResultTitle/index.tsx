import Button from 'components/ui/Button';
import classes from './index.module.css';

interface Props {
  date: string;
}

function ResultsTitle(props: Props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year : 'numeric',
  });

  return (
    <section className={ classes.title }>
      <h1>Events in { humanReadableDate }</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;