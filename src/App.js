import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Container} from './Container';

class App extends Component {

  render() {

    const listOne = [
      {
        id: 1,
        text: "TODO 1"
      }, {
        id: 2,
        text: "TODO 2"
      }, {
        id: 3,
        text: "TODO 3"
      }
    ]
    const listTwo = [
      {
        id: 4,
        text: "TODO 4"
      }, {
        id: 5,
        text: "TODO 5"
      }, {
        id: 6,
        text: "TODO 6"
      }
    ]
    const listThree = [
      {
        id: 7,
        text: "TODO 7"
      }, {
        id: 8,
        text: "TODO 8"
      }, {
        id: 9,
        text: "TODO 9"
      }
    ]
    const listFour = [
      {
        id: 10,
        text: "TODO 10"
      }, {
        id: 11,
        text: "TODO 11"
      }, {
        id: 12,
        text: "TODO 12"
      }
    ]
    const listFive = [
      {
        id: 13,
        text: "TODO 13"
      }, {
        id: 14,
        text: "TODO 14"
      }, {
        id: 15,
        text: "TODO 15"
      }
    ]
    const listSix = [
      {
        id: 16,
        text: "TODO 16"
      }, {
        id: 17,
        text: "TODO 17"
      }, {
        id: 18,
        text: "TODO 18"
      }
    ]
    const listSeven = [
      {
        id: 19,
        text: "TODO 1"
      }, {
        id: 20,
        text: "TODO 1"
      }, {
        id: 21,
        text: "TODO 1"
      }
    ]

    return (<div className="appwrapper">
      <Container id={1} list={listOne}/>
      <Container id={2} list={listTwo}/>
      <Container id={3} list={listThree}/>
      <Container id={4} list={listFour}/>
      <Container id={5} list={listFive}/>
      <Container id={6} list={listSix}/>
      <Container id={7} list={listSeven}/>

    </div>)
  }

}

export default DragDropContext(HTML5Backend)(App);
