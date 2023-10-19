//for the given JSON iterate over all for loops (for, for in,  for of, forEach)


const carData = {
  "manufacturer": "ABC Motors",
  "location": "Detroit",
  "yearFounded": "1950",
  "carTypes": [
    {
      "type": "Sedan",
      "models": ["Model A", "Model B", "Model C"]
    },
    {
      "type": "SUV",
      "models": ["Explorer", "Pathfinder", "Highlander"]
    },
    {
      "type": "Sports Car",
      "models": ["Mustang", "Camaro", "911"]
    }
  ]
};

////1. FOR loop to iterate over the properties of the JSON object
for (const key in carData) {
  const value = carData[key];
  console.log(key, value);
}

//2. FOR...IN loop to iterate over object properties 
for (const key in carData) {
  if (carData.hasOwnProperty(key)) {
    const value = carData[key];
    console.log(key, value);
  }
}

//3. for...of loop to iterate over the array of car types
const carTypes = carData.carTypes;

for (const carType of carTypes) {
  console.log("Car Type:", carType.type);

  for (const model of carType.models) {
    console.log("Model:", model);
  }
}
//4. forEach loop to iterate over car types and their models
const carTypes = carData.carTypes;

carTypes.forEach((carType) => {
  console.log("Car Type:", carType.type);

  carType.models.forEach((model) => {
    console.log("Model:", model);
  });
});


