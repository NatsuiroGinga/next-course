import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data"
import EventSummary from "components/event-detail/EventSummary";
import EventNotFound from "components/events/EventNotFound";
import EventLogistics from "components/event-detail/EventLogistics";
import EventContent from "components/event-detail/EventContent";

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  return (
    <div>
      {
        event ?
        <>
          <EventSummary title={ event.title }/>
          <EventLogistics
            date={ event.date }
            address={ event.location }
            image={ event.image }
            imageAlt={ event.title }
          />
          <EventContent>
            <span>{ event.description }</span>
          </EventContent>
        </> :
        <EventNotFound/>
      }
    </div>
  );
};

export default EventDetailPage;