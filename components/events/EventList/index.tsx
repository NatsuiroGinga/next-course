import React from "react";
import styles from "./index.module.css";
import EventItem from "components/events/EventItem";

interface Props {
  dummyEvents: DummyEvent[];
}

const EventList = (props: Props) => {
  const { dummyEvents } = props;

  return (
    <ul className={ styles.list }>
      {
        dummyEvents.map(
          dummyEvent =>
            <EventItem key={ dummyEvent.id } dummyEvent={ dummyEvent }/>
        )
      }
    </ul>
  )
};

export default EventList;