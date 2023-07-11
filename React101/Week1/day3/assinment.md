1.#
- create a component called Counter
- use React.useState hook
- give it a default value of 0 React.useState(0)
- destructure from useState by using [ count, setCount ]
- display the information in an h1 tag **`<h1> Count is {count} </h1>`**
- create a button with an event listener and attach handleClick function to it
- the handleFunction should be able to update count by **`setCount(count+1)`**
https://codesandbox.io/s/d3-state-1-v9mvn8?file=/src/App.js
2.
## **REACT - INPUT BOX**
### **Problem**
- create an input box
- maintain a state called text
- when a user types in, update the state, with the onChange event
- retrieve the value from the **[event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)**
- update the state by using setText ( Reacts dispatcher for updating the value )
- show the text in a h2 tag below the input box
- add a button called CLEAR, when you click on it, it should clear the text for the user on both the input box and the UI
https://codesandbox.io/s/d3-state-2-wj58f2?file=/src/components/Input.jsx
3

## **REACT - TODO**

### **Problem**

- create a Todo Component
- maintain a state for text (default value ""), and todos ( default value [] )
- A user can type in the input box
- A user can click on ADD
- once added, it will update the UI with the list of todos
https://codesandbox.io/s/d3-state3-fhwwdy?file=/src/components/Todo.jsx
4
- A user can type in the title
- On clicking add, it should add a new task in an array of items
- Make a really good UI
- Create the following components
    - Todo.jsx (contains the input elements, and TodoList )
    - TodoList. ( accepts the data array as props, contains the TodoItem )
    - TodoItem.jsx (individual task)
    - on clicking, toggle the status, ( you can use array.filter for this )
- Reference image
