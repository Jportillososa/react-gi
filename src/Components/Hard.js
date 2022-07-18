import PersonList from "./VeryEasy";
import "./PersonList.css";
// now it can be called like if it was an html element (kind of like a variable)
function BasicInfo() {
  //Array of props
  const person = [
    {
      id: "p1",
      name: "Jose Portillo",
      phone: "7049579579",
      email: "randomemail@gmail.com",
      dob: new Date(1997, 8, 11),
      age: 24,
    },
    {
      id: "p2",
      name: "Chai",
      phone: "7041234567",
      email: "randomemail@gmail.com",
      dob: new Date(2022, 6, 20),
      age: 20,
    },
    {
      id: "p3",
      name: "Kakarot",
      phone: "7041230987",
      email: "randomemail@gmail.com",
      dob: new Date(1990, 11, 2),
      age: 43,
    },
    {
      id: "p4",
      name: "Icarus the Dragon",
      phone: "7045860987",
      email: "randomemail@gmail.com",
      dob: new Date(1970, 7, 4),
      age: 99,
    },
    {
      id: "p5",
      name: "Mike Tyson",
      phone: "7031230934",
      email: "randomemail@gmail.com",
      dob: new Date(1966, 5, 30),
      age: 55,
    },
  ];
  return (
    <div>
      <h1>List of People</h1>
      <PersonList
        className="person"
        name={person[0].name}
        phone={person[0].phone}
        email={person[0].email}
        dob={person[0].dob}
        age={person[0].age}
      ></PersonList>
      <PersonList
        className="person"
        name={person[1].name}
        phone={person[1].phone}
        email={person[1].email}
        dob={person[1].dob}
        age={person[1].age}
      ></PersonList>
      <PersonList
        className="person"
        name={person[2].name}
        phone={person[2].phone}
        email={person[2].email}
        dob={person[2].dob}
        age={person[2].age}
      ></PersonList>
      <PersonList
        className="person"
        name={person[3].name}
        phone={person[3].phone}
        email={person[3].email}
        dob={person[3].dob}
        age={person[3].age}
      ></PersonList>
      <PersonList
        className="person"
        name={person[4].name}
        phone={person[4].phone}
        email={person[4].email}
        dob={person[4].dob}
        age={person[4].age}
      ></PersonList>
    </div>
    //everything must go inside the div element or these tags <> </>
    // the props go inside of the tags as if they were attributes!!!
  );
}

export default BasicInfo;

// This is a functions that can be called on in index.js file
