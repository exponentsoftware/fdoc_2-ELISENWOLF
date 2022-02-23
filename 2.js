const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const scoresGreaterThan85 = (item) => {
    for(let i=0; i < item.length; i++){
        if(item[i].scores > 85){
            console.log(item[i]);
        }
    }
}

scoresGreaterThan85(users);

const addUser = (item) => {
    const check = users.findIndex(x => x.name == user.name)
    if(check === -1){
        users.push(item);
    }else{
        console.log("User already exists");
    }
}
const user = {
    name: "Jack",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 29,
  }
addUser(user);
console.log(users);

const addUserSkills = (item) => {
    const skill = [...users];
    const findSkill = skill.filter((val, index) => { 
        val.name == item.name
        const Svalue = val.skills;
        for(let i=0; i < Svalue.length; i++){
           return users[i].skills.pop();
        }
    })
    if(findSkill.length == 0){
        return console.log("User doesn't exist");
    }
    findSkill[0].skills.push(...item.skills);
    console.log(findSkill[0].skills);
}

newSkill = {
      name: "Brook",
      scores: 75,
      skills: ["MongoDB", "React", "JS"],
      age: 16,
    }

  addUserSkills(newSkill);
  console.log(users);