import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "components/events/EventList";
import ResultsTitle from "components/events/ResultTitle";
import EventNotFound from "components/events/EventNotFound";
import ErrorAlert from "components/ui/ErrorAlert";

// 检查日期是否合法, 合法返回true, 不合法返回false
const checkDate = (year: number, month: number): boolean => {
  return !(
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  );
}

const FilteredEventsPage = () => {
  // 获取路由对象
  const router = useRouter();
  // 获取路由参数
  const { slug } = router.query;

  // react第一次渲染, slug是undefined, 因为还没有获取到数据
  if (!slug) {
    return <div className="center">Loading...</div>;
  }
  const [yearStr, monthStr] = slug;
  const yearNum = +yearStr;
  const monthNum = +monthStr;

  // 检查日期是否合法
  if (!checkDate(yearNum, monthNum)) {
    return (
      <>
        <ErrorAlert>
          Invalid filter. Please adjust your values!
        </ErrorAlert>
        <EventNotFound link="/events" toDo="Show All Events"/>
      </>
    );
  }
  // 获取过滤后的数据
  const filteredEvents: DummyEvent[] = getFilteredEvents({ year: yearNum, month: monthNum });
  // 没有找到符合条件的事件
  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <>
        <ErrorAlert>No events found for the chosen filter!</ErrorAlert>
        <EventNotFound link={ "/events" } toDo={ "Show All Events" }/>
      </>
    );
  }

  const date = new Date(yearNum, monthNum - 1);

  return (
    <>
      <ResultsTitle date={ date }/>
      <EventList dummyEvents={ filteredEvents }/>
    </>
  )
};

export default FilteredEventsPage;