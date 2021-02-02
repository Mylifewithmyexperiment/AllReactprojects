import React from 'react';
const HeaderLinks = (props) => {
    // const {name}= props.contentSlotData.name;
  return (
    <div>
        <h1> Hearder Link </h1>
      <h1> {props.contentSlotData} </h1>
      {/* <h3> {name}</h3> */}
    </div>
  );
};
export default HeaderLinks;
