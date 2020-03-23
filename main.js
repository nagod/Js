function addString(previous, current){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(previous + ' ' + current)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  })
}


async function addAll(){
  let output = await addString("", "A");
  output = await addString(output, "B");
  output = await addString(output, "C");
  console.log(output);

}
addAll();
function addAll(){
	 addString("","A")
	 .then(res => {
	 	return addString(res, "B")
	 })
	 .then(res => {
	 	return addString(res, "C")
	 })
	 .then(res => {
	 	console.log(res)
	 })
}

addAll();

var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
console.log("All officers \n", officers);

officers.forEach( (officer) =>{
		console.log("Print Id only forEach : ", officer.id);
});
console.log("\n");
const officersIds = officers.map(officer => console.log("Print Id only ES6 map : ",officer.id));

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];
console.log(pilots);
const total_years = pilots.reduce((acc, x) => acc + x.years,0);
const oldest = pilots.reduce((oldest,pilot) => oldest.years  > pilot.years ? oldest : pilot);


console.log("total_years :", total_years);
console.log("\noldest.name ", oldest.name , "\noldest.years ", oldest.years);


var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

console.log("pilots\n", pilots);
const reb = pilots.filter(fac => fac.faction === "Rebels");
const emp = pilots.filter(fac => fac.faction === "Empire");

console.log("All Rebels : ",reb);
console.log("All Empire",emp);


var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

console.log("personnel : \n",personnel)

//TODO 

console.log("Our objective: get the total score of force users only. Let’s do it step by step!");


const score_force_users = personnel
	.filter(users => users.isForceUser)
	.map(pilot => pilot.pilotingScore + pilot.shootingScore)
	.reduce((acc, score)=> acc + score,0);

console.log("score_force_users : ", score_force_users);








