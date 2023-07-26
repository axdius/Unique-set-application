import React, { Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    List1 : ['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'],
    List2 : ['Adwait', 'Laxman','Amit','Adnan','Nitin','Gaurav'],
    uniqueSet1notIn2: [],
    uniqueSet2notIn1: [],
    intersectionSet: []
  }

  findUniqueSetsAndIntersection = () => {
    const { List1, List2} = this.state
    
    const uniqueSet1notIn2 = List1.filter(item => !List2.includes(item));

    
    const uniqueSet2notIn1 = List2.filter(item => !List1.includes(item));

    
    const intersectionSet = List1.filter(item => List2.includes(item));

    return {
      uniqueSet1notIn2,
      uniqueSet2notIn1,
      intersectionSet
    };

 }

 handleFindUniqueSetsAndIntersection = () => {
  const result = this.findUniqueSetsAndIntersection();
  this.setState({
    uniqueSet1notIn2: result.uniqueSet1notIn2,
    uniqueSet2notIn1: result.uniqueSet2notIn1,
    intersectionSet: result.intersectionSet
  });
};

render() {
  const { uniqueSet1notIn2, uniqueSet2notIn1, intersectionSet } = this.state;

  return (
    <div className="App">
      <h1>Unique Lists App</h1>
      <button onClick={this.handleFindUniqueSetsAndIntersection}>Find Unique Sets and Intersection</button>

      <div>
        <h2>Unique sets from list 1 not in list 2:</h2>
        <ul>
          {uniqueSet1notIn2.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2>Unique sets from list 2 not in list 1:</h2>
        <ul>
          {uniqueSet2notIn1.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2>Intersection of list 1 and list 2:</h2>
        <ul>
          {intersectionSet.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
}


  

  

export default App;
