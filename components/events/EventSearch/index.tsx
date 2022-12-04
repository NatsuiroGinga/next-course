import React, { FormEvent, useRef } from "react";
import Button from "components/ui/Button";
import styles from "./index.module.css";

interface Props {
  onSearch: (selectedYear: number, selectedMonth: number) => void;
}

const EventSearch = (props: Props) => {

  const year = useRef<HTMLSelectElement>(null);
  const month = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const selectedYear = year.current?.value;
    const selectedMonth = month.current?.value;
    props.onSearch(+selectedYear!, +selectedMonth!);
  }
  const monthOptions: MonthOption[] = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ]

  return (
    <form className={ styles.form } onSubmit={ submitHandler }>
      <div className={ styles.controls }>
        <div className={ styles.control }>
          <label htmlFor="year">Year</label>
          <select id="year" ref={ year }>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={ styles.control }>
          <label htmlFor="month">Year</label>
          <select id="month" ref={ month }>
            {
              monthOptions.map(({ label, value }) => (
                <option key={ label } value={ value }>
                  { label }
                </option>
              ))
            })
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};
export default EventSearch;