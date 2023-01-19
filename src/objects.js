const person = {
    "firstName": "Rose",
    "lastName": "Smith",
    "age": 56,
    "hobbies": ["eating", "drinking", "reading"],
    getYearOfBirth(){
        return new Date().getFullYear() - 56;
    }
}

let val;
val = person.firstName
console.log(val)
val = person.getYearOfBirth()
console.log(val)