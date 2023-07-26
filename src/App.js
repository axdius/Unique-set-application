import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    List1: ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"],
    List2: ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"],
    uniqueSet1notIn2: [],
    uniqueSet2notIn1: [],
    intersectionSet: [],
  };

  findUniqueSetsAndIntersection = () => {
    const { List1, List2 } = this.state;

    const uniqueSet1notIn2 = List1.filter((item) => !List2.includes(item));

    const uniqueSet2notIn1 = List2.filter((item) => !List1.includes(item));

    const intersectionSet = List1.filter((item) => List2.includes(item));

    return {
      uniqueSet1notIn2,
      uniqueSet2notIn1,
      intersectionSet,
    };
  };

  handleUniqueSetOfList1NotInList2 = () => {
    const result = this.findUniqueSetsAndIntersection();
    this.setState({ uniqueSet1notIn2: result.uniqueSet1notIn2 });
  };

  handleUniqueSetOfList2NotInList1 = () => {
    const result = this.findUniqueSetsAndIntersection();
    this.setState({ uniqueSet2notIn1: result.uniqueSet2notIn1 });
  };

  handleIntersectionOfList1AndList2 = () => {
    const result = this.findUniqueSetsAndIntersection();
    this.setState({ intersectionSet: result.intersectionSet });
  };

  render() {
    const { uniqueSet1notIn2, uniqueSet2notIn1, intersectionSet } = this.state;

    return (
      <div className="App">
        <h1>Unique Lists App</h1>

        <div>
          <h2>Unique sets from list 1 not in list 2:</h2>
          <button onClick={this.handleUniqueSetOfList1NotInList2}>Show</button>
          <ul>
            {uniqueSet1notIn2.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Unique sets from list 2 not in list 1:</h2>
          <button onClick={this.handleUniqueSetOfList2NotInList1}>Show</button>
          <ul>
            {uniqueSet2notIn1.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Intersection of list 1 and list 2:</h2>
          <button onClick={this.handleIntersectionOfList1AndList2}>Show</button>
          <ul>
            {intersectionSet.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
