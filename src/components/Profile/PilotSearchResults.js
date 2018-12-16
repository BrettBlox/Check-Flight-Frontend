import React from "react";
import { Link } from "react-router-dom";
import { Row, Collection, CollectionItem, Card } from "react-materialize";

const PilotSearchResults = props => {
  const examiners = props.examiners
    .filter(el => el.isExaminer)
    .slice(0, 6)
    .map((el, i) => <>
        <CollectionItem href={el.firstName + el.lastName} key={i}>
          {el.firstName + " " + el.lastName}
        </CollectionItem>
        <hr />
      </>);
  const filteredAirports = props.airports
    .filter(el => el.isChecked)
    .map((el, i) => (
      <Card key={i} title={"Examiners at " + el.name} actions={examiners} />
    ));

  return <Row>{filteredAirports}</Row>;
};

export default PilotSearchResults;
