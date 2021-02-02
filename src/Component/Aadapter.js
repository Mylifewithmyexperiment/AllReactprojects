import React from "react";
import content from "./productlist.json";
import SearchBox from "../Component/SearchBox";
import HeaderLinks from "../Component/HeaderLInks";

class Aadapter extends React.Component {
  constructor() {
    super();
    this.state = {
      contentSlot: content.contentSlots.contentSlot,
    };
  }

  render() {
    for (let index = 0; index < this.state.contentSlot.length; index++) {
      if (this.state.contentSlot[index].name === "Search Box") {
        searchBox = this.state.contentSlot[index];
      }

      if (this.state.contentSlot[index].name === "Header links") {
          headerLink = this.state.contentSlot[index];
      }
    }

    return (
      <div>
        <SearchBox contentSlotData={searchBox} />
        <HeaderLinks contentSlotData={headerLink} />
      </div>
    );
  }
}

export default Aadapter;
