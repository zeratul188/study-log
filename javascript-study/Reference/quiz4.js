let ken = {
    name: "ken",
    age: 30
  };
  
  const wan = {
    name: "wan",
    age: 35
  };
  
  const people = [ ken, wan ];
  
  ken = {
    name: "KEN",
    age: 38
  };
  
  console.log(people);  // ?
  console.log(ken === people[0]);  // ?