import React from "react";
import styles from "./index.module.css";
import Button from "components/ui/Button";
import DateIcon from "components/icon/DateIcon";
import AddressIcon from "components/icon/AddressIcon";
import ArrowRightIcon from "components/icon/ArrowRightIcon";

interface Pros {
  dummyEvent: DummyEvent;
}

const EventItem = (props: Pros) => {

  const { date, image, location, title, id } = props.dummyEvent;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day  : "numeric",
    month: "long",
    year : "numeric"
  });
  const formattedAddress = location.replace(", ", "\n");
  const exportLink = `/events/${ id }`;

  const { icon, actions, item, date: date1, address, summary, content } = styles;

  return (
    <li className={ item }>
      <img src={ "/" + image } alt={ title }/>
      <div className={ content }>
        <div className={ summary }>
          <h2>{ title }</h2>
          <div className={ date1 }>
            <DateIcon/>
            <time>{ readableDate }</time>
          </div>
          <div className={ address }>
            <AddressIcon/>
            <address>{ formattedAddress }</address>
          </div>
        </div>
        <div className={ actions }>
          <Button link={ exportLink }>
            <span>Explore Link</span>
            <span className={ icon }>
              <ArrowRightIcon/>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
