const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    //Grab root function
    const rootElement = document.getElementById("root")
    //create h1 element and assign FREELANCERS to it 
    const newHeadingOne = document.createElement("h1")
    newHeadingOne.innerHTML = "FREELANCERS"
    rootElement.appendChild(newHeadingOne)
    //create unorder list element
    const newUnorderedList = document.createElement("ul")
    for (let person of users) {
        const li = document.createElement('li');
        li.innerHTML = person.name;
        newUnorderedList.appendChild(li);
    }
    rootElement.appendChild(newUnorderedList);
}

//call the main function
main();