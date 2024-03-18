import './App.css';
import { Component } from 'react';
import Person from './Person.jsx'




class App extends Component{


  state= ({
    persons:[
      {name:"bngbng", age: 20},
      {name:"hsdff", age: 22},
      {name:"thrh", age: 50}
    ],
    showperson: false
  })


  togglePersons = ()=>{
    let show = this.state.showperson
    this.setState({showperson: !show})
  }

  render(){


    return(
      <>
        <h1>hello World</h1>
        <button onClick={()=>this.togglePersons()}>Show</button>

        {this.state.showperson ? 
        
        <div>
          {this.state.persons.map((person, index)=>{
            
              return <Person name = {person.name} key={index} age =  {person.age} />
        
            
          })}
        </div>
        : null
        
        }
      </>
    )
  }
}
export default App