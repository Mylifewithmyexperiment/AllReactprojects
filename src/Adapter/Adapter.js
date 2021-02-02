import React from "react";
import data from "./cms_dataa.json";
import content from "../resources/mock_cms.json";
import SearchBox from "../Component/SearchBox"
const socialMediaList = data.SocialMedias;
const uid = content.uid;
const name = content.name;
const title = content.title;
const template = content.template;
const typeCode = content.typeCode;
const contentSlots = content.contentSlots;
const contentSlot = content.contentSlot;

class Adapter extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: content.uid,
      title: content.title,
      template: content.template,
      typeCode: content.typeCode,
      name: content.name,
      contentSlots: content.contentSlots,
      contentSlot: content.contentSlots.contentSlot,
    };
  }
  render() {
    return (
      <div>
        <SearchBox contentSlotData={this.state} />
      </div>
    );
  }
}
export default Adapter;
