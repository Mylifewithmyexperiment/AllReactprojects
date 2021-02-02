import React from "react";
import content from "../resources/mock_cms.json";
const uid = content.uid;
const name = content.name;
const title = content.title;
const template = content.template;
const typeCode = content.typeCode;
const contentSlots = content.contentSlots;
//const contentSlot = content.contentSlot;

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: content.uid,
      title: content.title,
      template: content.template,
      typeCode: content.typeCode,
      name: content.name,
    //  contentSlots: content.contentSlots,
      contentSlot: content.contentSlots.contentSlot,
    };
  }

  render() {
    return (
      <div>
        <h1> homepage </h1>
        {/* <ul>
          {this.state.name.map((s) => (
            <li>{s}</li>
          ))}
        </ul> */}
        <li> {uid} </li>
        <li>{name} </li>
        <li> {title} </li>
        <li>{template} </li>
        <li> {typeCode} </li>
        {/* <li> {contentSlots} </li>
        <li>{contentSlot}</li> */}
        <li>
        {contentSlots.contentSlot.map(c => <div>{c.slotId}</div>)}

          {/* {this.state.contentSlot.map((item, i) => {
            return <li key={i}>{item}</li>;
          })} */}

        </li>
      </div>
    );
  }
}
export default HomePage;

// const sampleJSON = {
//     "arrOfNumbers": [1, 2, 3, 4],
//     "arrOfStrings": ["a", "b", "c", "d"],
//     "arrOfObjects": [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
//   }

// {sampleJSON.arrOfNumbers.map((item, i) => {
//     return <li key={i}>{item}</li>
//   })}
// </ul>

// <h2>Array of Strings:</h2>
// <ul>
//   {sampleJSON.arrOfStrings.map((item, i) => {
//     return <li key={i}>{item}</li>
//   })}
// </ul>

// <h2>Array of Objects:</h2>
// <ul>
//   {sampleJSON.arrOfObjects.map((item, i) => {
//     return <li key={i}>{item.a} - {item.b}</li>
//   })}
// </ul>

// </div>
// )
