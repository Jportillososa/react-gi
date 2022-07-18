// Steps to creating a REACT component
//! STEP 1. create function with return
// function name(){
//     return
//! STEP 2 insert html here
// }
//! STEP 3 : export it using " export default ExpenseItem"
//! Then import into another file
//* To import CSS you have to create another file named the same with .css extension
//! Step 4: import CSS using import "file location";
//! STEP 5: When giving element class name it is not like regular HTML
//! ...Instead you use className = "" ...because class is a reserved keyword in JS

function PersonList(props) {
  //inserting JS before the return
  // you can also insert more code in here like http requests, fetch data from database, or to get user input.

  return (
    <div className="person-container">
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.dob.toDateString()}</h2>
      <h2>{props.phone}</h2>
      <h2>{props.age}</h2>
    </div>

    // {/* // there can be any kind of html element here */}
  );
}
export default PersonList;

// next step is to import it into another file
