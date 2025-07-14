import './App.css';
import MyForm from './forms/forms'
import RouterModule from './route-pages/router'
import Memo from './memo/Memo'
import ReactHooks from './Hooks/ReactHooks';
import UserlistWithData from './HigherOrderComponents/UserlistWithData';
import CustomerAdd from './HandsOn/CustomerAdd';  
import ObjectStateManagement from './State-Non-Primitive data/ObjectStateManagement'
import TableDisplay from './HandsOn/TableDisplay';
import CounterComponent from './Custom Hooks/CounterComponent';
import ColorChange from './HandsOn/ColorChange';
//Class inheritance
class Car {
  constructor(name) {
    this.brand = name;
  }
  show() {
    return `This is from Parent Class: ${this.brand}`
  }
}
class Creta extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod
  }
  display() {
    return this.show() + ` and this is from Child Class :${this.model}`
  }
}

//Conditional rendering of Components
function MissedGoal() {
  return <p>MISSED!</p>;
}

function MadeGoal() {
  return (<p>Goal!</p>);
}
//React Lists
function List(props) {
  return <li>{ props.item }</li>;
}

function App(props) {
  //Event
  const shoot = (a) => {
    if (a) {
      alert(`${a} oru 100% comali`)
    }
  }
  const display = () => {
    alert("Nishanthini Comali");
  }
  const isGoal= props.isGoal;
  const items =["Rice","Wheat","Sugar"];
  const itemsWithKeys =[
    {id:1, item: "Rice"},
    {id:1, item: "Wheat"},
    {id:1, item: "Sugar"},
  ]
  const myCars = new Creta("Creata", "V6")
  return (
    <>
      <div className="App-body">
        <div className="App-header">
          <h1>React.js</h1>
        </div>
        <div>
          <h1>Props Usage</h1>
          <p>props stands for properties.Props are arguments passed into React components.Props are passed to components via HTML attributes. With the help of props, we can pass data from one component to another</p>
          <p> Note : React Props are read-only! You will get an error if you try to change their value.</p>
          <p>Props Example : {props.days} days</p>
        </div>
        <div>
          <h1>React Events </h1>
          <p>Just like HTML DOM events, React can perform actions based on user events.React has the same events as HTML: click, change, mouseover etc. React events are written in camelCase syntax: onClick instead of onclick. React event handlers are written inside curly braces; instead of onclick="shoot()".</p>
          <button onClick={display}>Display</button>
          <p>To pass an argument to an event handler, use an arrow function.</p>
          <button onClick={() => { shoot("Nishanthini") }}>Click here</button>
        </div>
        <div>
          <h1>Class Inheritance</h1>
          <p>{myCars.display()}</p>
        </div>
        <div>
          <h1>Conditional Component rendering</h1>
          <p>In React, you can conditionally render components.There are several ways to do this : using if, Using Logical && operator, Ternary operator</p>
          {isGoal ? <MadeGoal /> : <MissedGoal />}
          
        </div>
        <div>
          <h1>React Lists</h1>
          <p>In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.</p>
          <ul>
            {items.map((a)=> <List item = {a} />)}
          </ul>
          <p>Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys need to be unique to each sibling. But they can be duplicated globally.</p>
          <ul>
           {itemsWithKeys.map((a)=> <List key ={a.key} item = {a.item} />)}
          </ul>
          
        </div>

        <div>
          <h1>React Forms</h1>
          <p>React forms allow users to interact with the web page.Handling forms is about how you handle the data when it changes value or gets submitted. In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components. When the data is handled by the components, all the data is stored in the component state. You can control changes by adding event handlers in the onChange attribute. We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.</p>
          <p>Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys need to be unique to each sibling. But they can be duplicated globally.</p>
          <p>You can control the values of more than one input field by adding a name attribute to each element. We will initialize our state with an empty object. To access the fields in the event handler use the event.target.name and event.target.value syntax. To update the state, use square brackets [bracket notation] around the property name.</p>
          <MyForm />
          
        </div>

        <div>
          <h1>Router</h1>
          <RouterModule />
        </div>

        <div>
          <h1>Memo</h1>
          <Memo />
        </div>

        <div>
          <h1>Hooks</h1>
          <ReactHooks />
        </div>

        <div>
          <h1>HOC</h1>
          <UserlistWithData />
        </div>

        <div>
          <h1>Redux</h1>
          <CustomerAdd />
        </div>
        <div>
          <h1>State Management of Objects</h1>
          <ObjectStateManagement />
        </div>
        <div>
          <h1>Hands ON</h1>
          <TableDisplay />
          <ColorChange />
        </div>
        <div>
          <h1>Custom Hooks</h1>
          <CounterComponent />
        </div>


      </div>
    </>

  );
}

export default App;
