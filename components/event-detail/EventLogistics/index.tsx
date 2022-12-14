import AddressIcon from 'components/icon/AddressIcon';
import DateIcon from 'components/icon/DateIcon';
import LogisticsItem from '../LogisticsItem';
import classes from './index.module.css';

interface Props {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics = ({ address, date, image, imageAlt }: Props) => {

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day  : 'numeric',
    month: 'long',
    year : 'numeric',
  });
  const addressText = address?.replace(', ', '\n');

  return (
    <section className={ classes.logistics }>
      <div className={ classes.image }>
        <img src={ `/${ image }` } alt={ imageAlt }/>
      </div>
      <ul className={ classes.list }>
        <LogisticsItem icon={ DateIcon }>
          <time>{ humanReadableDate }</time>
        </LogisticsItem>
        <LogisticsItem icon={ AddressIcon }>
          <address>{ addressText }</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
