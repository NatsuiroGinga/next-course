import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data"
import EventSummary from "components/event-detail/EventSummary";
import EventNotFound from "components/events/EventNotFound";
import EventLogistics from "components/event-detail/EventLogistics";
import EventContent from "components/event-detail/EventContent";

// 事件详情页面
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
        <EventNotFound link={ "/events" } toDo={ "Show All Events" }>
          Events Not Found!
        </EventNotFound>
      }
    </div>
  );
};

export default EventDetailPage;