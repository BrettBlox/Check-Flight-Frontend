import React from "react";
import { Row } from "react-materialize";
import CalDay from "./CalDay";

const CalRow = ({
  state,
  postAvail,
  putAvail,
  row,
  cTime,
  cMonth,
  monthName,
  isDisabled,
  availDate
}) => {
  let daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
  let theMonth = cTime.getMonth();
  let theYear = cTime.getYear() + 1900;
  let daysInMonths = [
    31,
    theYear % 4 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
  let newDate = new Date(theYear, theMonth);
  let columnIndex = newDate.getDay();

  return (
    <Row className="list-group-item">
      {" "}
      {daysOfWeek.map((day, i) => {
        return (
          <CalDay
            key={i}
            state={state}
            postAvail={postAvail}
            putAvail={putAvail}
            row={row}
            date={
              day + 7 * row <= columnIndex ||
              day + 7 * row > daysInMonths[cMonth] + columnIndex
                ? ""
                : day + 7 * row - columnIndex
            }
            monthName={monthName}
            isDisabled={isDisabled}
            availDate={availDate}
          />
        );
      })}
    </Row>
  );
};

export default CalRow;
