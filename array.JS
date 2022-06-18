let firstName = ["sikiru", "anobi", "adewale", "Yemisi", "Jonathan", "Love", "Adeola", "steven", "amaka"]

for(let i = 0; i < firstName.length; i++){
    console.log(firstName[i])

}

let lastName = []
for(let i = 0; i < firstName.length; i++){
    let reversed = ''
    for(let j = firstName[i].length; j >= 0; j--){
        let letter = firstName[i].charAt(j)
     reversed += letter
    }

    lastName[i] = reversed
}

let lastName2 = []
for(let i = 0; i < firstName.length; i++){
    let newName = ""
    for(let k = firstName[i].length - 1; k >= 0; k--){
        newName += firstName[i][k]
        lastName2[i] = newName 
    }
   
}
console.log(lastName2)

let fullName = []
let username = []
for(let i = 0; i < firstName.length; i++){
        fullName[i] = firstName[i]+ " "+lastName[i]
        username[i] = "@"+firstName[i][0]+ lastName[i][0]
}
console.log(fullName)
console.log(username)
 
