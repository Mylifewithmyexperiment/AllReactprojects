import React from "react";
import { connect } from "react-redux";
import content from "../resources/mock_cms.json";


import {
  sendSearchBoxComponentData,
  sendLogoComponentData,
  sendHeaderComponentData, sendMiniCartComponentData
} from "../action/index";


class MockCMSAdapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSlot: content.contentSlots.contentSlot,
      standard_data: {
        component_Id: "SiteLogoSlot",
        component_position: "SiteLogo",
        component_name: "Default Site Logo Slot",
        media: [
          {
            component_media_fileName: "/images/theme/SAP_scrn_R.png",
            component_media_mime: "image/png",
            component_media_altText: "SAP Commerce",
            component_media_url: "/medias/SAP-scrn-R.png?context=bWFzdGVyfGltYWdlc3wxMDEyN3xpbWFnZS9wbmd8aGI4L2hmNS84Nzk3NjYzMDM1NDIyL1NBUF9zY3JuX1IucG5nfDI0NDRlMWY0Y2RiODYwZTg0NjE4NGU1MDYxOTYwNGE5ZjNmNThkY2MwODYxYTg2OGY0MmM0NTUxNzlhZGM0MzQ"
          }
        ]
      }

    };
  }

  // sendheaderLinkDetails = () => {
  //   for (let index1 = 0; index1 < this.state.contentSlot.length; index1++) {
  //     if (this.state.contentSlot[index1].name === "Header links") {
  //       const headerLink = this.state.contentSlot[index1];
  //       this.props.sendHeaderComponentData(headerLink);
  //     }
  //   }
  // };



  // sendLogoDetails = () => {
  //   for (let index3 = 0; index3 < this.state.contentSlot.length; index3++) {
  //     if (this.state.contentSlot[index3].slotId === "SiteLogoSlot") {
  //       const SiteLogoSlot = this.state.contentSlot[index3];
  //       this.props.sendLogoComponentData(SiteLogoSlot);
  //     }
  //   }
  // };


  // sendminiCartSlotDetails = () => {
  //   let j = 0;
  //   const minicart = [];
  //   for (let index1 = 0; index1 < this.state.contentSlot.length; index1++) {
  //     if (this.state.contentSlot[index1].slotId === "MiniCartSlot") {
  //       minicart[j] = this.state.contentSlot[index1];
  //       j++;
  //     }
  //   }
  //   this.props.sendMiniCartComponentData(minicart);
  // };


  //console.log( "test of props comming top class" + this.props.search_box_id);

  sendSearchBoxDetails() {
    const searchbox = [];
    


    let j = 0;

    for (let index1 = 0; index1 < this.state.contentSlot.length; index1++) {
      if (this.state.contentSlot[index1].slotId === "SearchBoxSlot") {
        searchbox[j] = this.state.contentSlot[index1];
        j++;
      }
    }
    // MAP SEARCH BOX TO NEW ARAY 

    // searchbox.map
    // ( 
    //   (items, i) => 
    // {

    //   this.state.standard_data.component_Id = items.slotId
    //   this.state.standard_data.component_name = items.name,
    //     this.state.standard_data.component_position = items.position,
    //     this.state.standard_data.media.map((media_comp, i) => {
    //       media_comp.component_media_fileName = items.lightboxBannerComponent.map((media_json, i) => {
    //         return media_json.map((data, i) => {
    //           return data.code
    //         })
    //       })

    //     })



    // }

    // )
 
    this.props.sendSearchBoxComponentData(searchbox);

  };

  // componentWillMount(){
  //   alert(    "in comp[onent did mount "  +    this.props.search_box_id      )
  //   console.log("#####################  in component did mount #" + this.props.search_box_id)
  //   { this.sendSearchBoxDetails() }

  // }



  render() {
    // alert(" In adapter " + this.props.search_box_id)


    return (<div>

      <button onClick={this.sendSearchBoxDetails()}>test for parsing</button>
    </div>)
  }
  // render() {
  //   alert(this.props.searchBoxID)
  //   return (
  //     <div>
  //       <h1> check this :- {this.props.searchBoxID} </h1>
  //       <button onClick={this.sendheaderLinkDetails}>header</button>
  //       <button onClick={this.sendSearchBoxDetails}>search box</button>
  //       <button onClick={this.sendLogoDetails}>logo </button>
  //       <button onClick={this.sendminiCartSlotDetails}>Minicart </button>
  //     </div>
  //   );
  // }
}

const mapDispatchToProps = {
  sendHeaderComponentData,
  sendSearchBoxComponentData,
  sendLogoComponentData,
  sendMiniCartComponentData
};
const mapstastetoprop = (state) => ({
  searchboxComponentId: state.marketPlaceStandarddata
});
export default connect(mapstastetoprop, mapDispatchToProps)(MockCMSAdapter);









