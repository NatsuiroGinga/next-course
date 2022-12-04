import React from "react";
import { getAllEvents } from "@/dummy-data";
import EventList from "components/events/EventList";
import EventSearch from "components/events/EventSearch";
import { useRouter } from "next/router";

const AllEventsPage: React.FC = () => {
  const allEvents: DummyEvent[] = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year: number, month: number) => {
    router.push(`/events/${ year }/${ month }`)
          .then(r => r.valueOf());
  }

  return (
    <>
      <EventSearch onSearch={ findEventsHandler }/>
      <EventList dummyEvents={ allEvents }/>
    </>
  );
};

export default AllEventsPage;