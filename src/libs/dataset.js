/*
ALEXANDRiiiA DATASET
@desc: The ALEXANDRiiiA dataset converted into objects, for use in the app
@author: Lwandle Babekizulu Dlamini
@date: 2023/12/17
*/

/*
@desc: Class Constructor that creates Mechanical Invention objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the mechanicalInventions object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the mechanicalInventionsRawData string, and the loops will clean up the string 
and do the rest. The only parameter that needs to be updated is the number of columns 
in each row, which is stored in the mechanicalInventionsColumns constant.
@date: 2023/12/19
*/
class MechanicalInvention {
  constructor(
    dateInventedBC,
    dateInventedAD,
    ancient,
    modern,
    inventionName,
    inventionType,
    dimensions,
    iteration,
    iterationOf,
    materials,
    inventors,
    researchGroups,
    model,
    modelImage,
    multiRegional,
    regions,
    numOfCorroborativeSources,
    sourceIds,
    sourcePageReferences,
    primarySourceIds,
    primarySourcePageReferences,
  ) {
    this.dateInventedBC = dateInventedBC; //integer
    this.dateInventedAD = dateInventedAD; //integer
    this.ancient = ancient; //boolean
    this.modern = modern; //boolean
    this.inventionName = inventionName; //string
    this.inventionType = inventionType; //string
    this.dimensions = dimensions; //object
    this.iteration = iteration; // boolean
    this.iterationOf = iterationOf; //string
    this.materials = materials; //array
    this.inventors = inventors; //array
    this.researchGroups = researchGroups; //array
    this.model = model; //string
    this.modelImage = modelImage; //string
    this.multiRegional = multiRegional; //boolean
    this.regions = regions; //array
    this.numOfCorroborativeSources = numOfCorroborativeSources; //integer
    this.sourceIds = sourceIds; //array
    this.sourcePageReferences = sourcePageReferences; //array
    this.primarySourceIds = primarySourceIds; //array
    this.primarySourcePageReferences = primarySourcePageReferences; //array
  }
  //search by id
  searchById = () => {
    //
  };
  //search by date invented
  searchByDateInvented = () => {
    //
  };
  //search by name
  searchByName = () => {
    //
  };
  //search by invention type
  searchByInventionType = () => {
    //
  };
  //search by dimensions
  searchByDimensions = () => {
    //
  };
  //search by material
  searchByMaterial = () => {
    //
  };
  //search by inventor
  searchByInventor = () => {
    //
  };
  //search by research group
  searchByResearchGroup = () => {
    //
  };
  //search by region
  searchByRegion = () => {
    //
  };
  //search by source ID
  searchBySourceID = () => {
    //
  };
}

/*
    @primaryKey: inventionId
    @format: IID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the mechanicalInventionsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty mechanical inventions array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    mechanicalInventionsSplit array, which is the Row ID (IID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data represented by the mechanicalInventionsColumns constant, 
    and pushes it to a new array, which is the mechanicalInventionsArr
    - Declares an empty mechanicalInventions object 
    - Loops for the number of rows in the table, and the value is stored in the 
    mechanicalInventionsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends mechanicalInventions object with a new instance 
    of a mechanical invention, with its own unique ID
    and populates each parameter of the MechanicalInvention constructor 
    with each element of the mechancal inventions array
*/

//@updatable: true
// - copy and paste all csv data excluding headers/keys
const mechanicalInventionsRawData = `IID0,null,null,TRUE,FALSE,Manioc Squeezer,null,null,null,null,null,null,null,null,null,null,null,South America,null,C23A1,p.15,null,null,,,,,,,,,,,,,,,,,,
IID1,null,null,TRUE,FALSE,Boomerang,null,null,null,null,null,null,null,null,null,null,null,Australia,null,C23A1,p.15,null,null,,,,,,,,,,,,,,,,,,
IID2,null,null,TRUE,FALSE,Toggle Joint Harpoon,null,null,null,null,null,null,null,null,null,null,null,null,null,C23A1,p.15,null,null,,,,,,,,,,,,,,,,,,
IID3,285,null,TRUE,FALSE,Water Clock,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.138,null,null,,,,,,,,,,,,,,,,,,
IID4,null,null,TRUE,FALSE,Crossbow,null,null,null,null,null,null,null,null,null,null,TRUE,"Far East, Mediterranean",null,C23A1,p.20,null,null,,,,,,,,,,,,,,,,,,
IID5,285,null,TRUE,FALSE,Force Pump,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.137,null,null,,,,,,,,,,,,,,,,,,
IID6,285,null,TRUE,FALSE,Hydraulic Pipe Organ,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.137,null,null,,,,,,,,,,,,,,,,,,
IID7,285,null,TRUE,FALSE,Musical Keyboard,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.138,null,null,,,,,,,,,,,,,,,,,,
IID8,285,null,TRUE,FALSE,Metal Spring,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.138,null,null,,,,,,,,,,,,,,,,,,
IID9,270,null,TRUE,FALSE,Singing Cornucopia,null,null,null,null,null,Ktesibios (Ctesibius),null,null,null,null,FALSE,Ancient Alexandria,null,C23A1,p.137,null,null,,,,,,,,,,,,,,,,,,
IID10,1250,null,TRUE,FALSE,Safety Pin,null,null,null,null,null,null,null,null,null,null,null,null,null,C23A1,p.25,null,null,,,,,,,,,,,,,,,,,,
IID11,null,null,TRUE,FALSE,Central Indirect House Heating,null,null,null,null,null,Sergius Orata,null,null,null,null,FALSE,Ancient Rome,null,null,p.25,null,null,,,,,,,,,,,,,,,,,,null
IID12,null,null,FALSE,TRUE,Steam Engine,null,null,null,null,null,James Watt,null,null,null,null,null,null,null,null,p.27,null,null,,,,,,,,,,,,,,,,,,null
IID13,null,1884,FALSE,TRUE,Line Divider,null,null,null,null,null,Hertha Ayrton,null,Cambridge University,null,null,FALSE,The United Kingdom,null,C23A2,p.1,null,null,,,,,,,,,,,,,,,,,,null
IID14,null,null,FALSE,TRUE,Anti-gas Fan,null,null,null,null,null,Hertha Ayrton,null,Cambridge University,null,null,FALSE,The United Kingdom,null,C23A2,p.2,null,null,,,,,,,,,,,,,,,,,,null
IID15,null,null,FALSE,TRUE,R.A.E Restriction,null,null,null,null,null,Beatrice Shilling,null,The University of Manchester,null,null,FALSE,The United Kingdom,null,C23A2,p.3,null,null,,,,,,,,,,,,,,,,,,null
IID16,null,null,FALSE,TRUE,Engine Valves,null,null,null,null,null,Verena Holmes,null, Loughborough Technical College,null,null,FALSE,The United Kingdom,null,C23A2,p.3,null,null,,,,,,,,,,,,,,,,,,null
IID17,null,null,FALSE,TRUE,Medical Support Devices,null,null,null,null,null,Verena Holmes,null, Loughborough Technical College,null,null,FALSE,The United Kingdom,null,C23A2,p.3,null,null,,,,,,,,,,,,,,,,,,null
IID18,null,null,FALSE,TRUE,IBM 701 Scientific Computer,null,null,null,null,null,null,IBM,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID19,null,null,FALSE,TRUE,Magnetophon,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID20,null,null,FALSE,TRUE,Gyroscope,null,null,FALSE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID21,null,null,FALSE,TRUE,Electric Motor Powered Gyroscope,Aeronautics Apparatus,null,TRUE,Gyroscope,"Aluminum, Steel",null,JPL,null,null,null,null,The United States of America,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID22,null,null,FALSE,TRUE,Corporal Missile (Without Altitude Control),Aeronautics,null,FALSE,null,null,null,JPL,null,null,null,null,The United States of America,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID23,null,null,FALSE,TRUE,Corporal Missile,Aeronautics,null,TRUE,"Corporal Missile (Without Altitude Control), V-2 Rocket",null,null,JPL,null,null,null,null,The United States of America,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID24,null,null,FALSE,TRUE,Sergeant Missile,Aeronautics,null,FALSE,null,null,null,null,null,null,null,null,The United States of America,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID25,null,null,FALSE,TRUE,Vergeltungswaffe Zwei (V-2),Aeronautics,null,null,null,null,null,null,null,null,null,null,Germany,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID26,null,null,FALSE,TRUE,Redstone Rocket,Aeronautics,null,null,null,null,null,Redstone Arsenal,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID27,null,null,FALSE,TRUE,Microlock Tracking System,Aeronautics Apparatus,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID28,null,null,FALSE,TRUE,Graphing Paper,Mathematical Apparatus,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID29,null,null,FALSE,TRUE,Friden Calculator,Mathematical Apparatus,null,null,null,null,null,null,null,null,null,null,null,2,C23A3,p.29,P23A44,null,,,,,,,,,,,,,,,,,,null
IID30,null,null,FALSE,TRUE,Teletype,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID31,null,null,FALSE,TRUE,Sputnik,Satellites,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID32,null,null,FALSE,TRUE,Sputnik 2,Satellites,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID33,null,null,FALSE,TRUE,Explorer,Satellites,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID34,null,null,FALSE,TRUE,Programming Punch Card,Computing Apparatus,"Length: 7.5 inches, Width: 3.25 inches",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,null
IID35,null,null,FALSE,TRUE,A-0 Compiler,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID36,null,null,FALSE,TRUE,A-2 Compiler,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,,,,,,,,,,,,,,,,,,
IID37,null,null,FALSE,TRUE,Jet Engine,Engines,null,null,null,null,null,null,null,null,null,null,null,1,C23A3,p.20,null,null,,,,,,,,,,,,,,,,,,
IID38,null,null,FALSE,TRUE,Slide Rule,Mathematical Apparatus,null,null,null,null,null,null,null,null,null,null,null,1,C23A3,p.31,null,null,,,,,,,,,,,,,,,,,,`;
//@updatable: true
const mechanicalInventionsColumns = 22;
const mechanicalInventionsRows = 37;
//@updatable: false **don't change
const mechanicalInventionDataSplit = mechanicalInventionsRawData.split(',');
const mechanicalInventionIDPattern = 'IID';
const mechanicalInventionRegex = new RegExp(mechanicalInventionIDPattern);
let mechanicalInventionsArr = [];
//22 columns per row
for (let i = 0; i < mechanicalInventionDataSplit.length; i++) {
  //if the loop reaches the primary key string 'IID{number}'
  // then take the primary key and the next 22 values, and push them into
  // a new array
  if (mechanicalInventionRegex.test(mechanicalInventionDataSplit[i])) {
    mechanicalInventionsArr.splice(i, 1);
    mechanicalInventionsArr.push(
      mechanicalInventionDataSplit.splice(i + 1, mechanicalInventionsColumns),
    );
  }
}
const mechanicalInventions = {};
for (let i = 0; i < mechanicalInventionsRows; i++) {
  const obj = new MechanicalInvention(
    mechanicalInventionsArr[i][0],
    mechanicalInventionsArr[i][1],
    mechanicalInventionsArr[i][2],
    mechanicalInventionsArr[i][3],
    mechanicalInventionsArr[i][4],
    mechanicalInventionsArr[i][5],
    mechanicalInventionsArr[i][6],
    mechanicalInventionsArr[i][7],
    mechanicalInventionsArr[i][8],
    mechanicalInventionsArr[i][9],
    mechanicalInventionsArr[i][10],
    mechanicalInventionsArr[i][11],
    mechanicalInventionsArr[i][12],
    mechanicalInventionsArr[i][13],
    mechanicalInventionsArr[i][14],
    mechanicalInventionsArr[i][15],
    mechanicalInventionsArr[i][16],
    mechanicalInventionsArr[i][17],
    mechanicalInventionsArr[i][18],
    mechanicalInventionsArr[i][19],
    mechanicalInventionsArr[i][20],
    mechanicalInventionsArr[i][21],
    mechanicalInventionsArr[i][22],
  );
  mechanicalInventions[`IID${i}`] = obj;
}
console.log(mechanicalInventions);

/*
@desc: Class Constructor that creates Mathematical Apparatus objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the mathematicalApparatus object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the mathematicalApparatusRawData string, and the loops will clean up the string 
and do the rest. The only parameter that needs to be updated is the number of columns 
in each row, which is stored in the mathematicalApparatusColumns constant.
@date: 2023/12/19
*/
class MathematicalApparatus {
  constructor(
    apparatusName,
    dateInvented,
    apparatusFunction,
    inventor,
    region,
    modelImage,
    modelCDNLink,
    sourceIds,
    sourcePageReferences,
    primarySourceIds,
    primarySourcePageReferences,
  ) {
    this.apparatusName = apparatusName;
    this.dateInvented = dateInvented;
    this.apparatusFunction = apparatusFunction;
    this.inventor = inventor;
    this.region = region;
    this.modelImage = modelImage;
    this.modelCDNLink = modelCDNLink;
    this.sourceIds = sourceIds;
    this.sourcePageReferences = sourcePageReferences;
    this.primarySourceIds = primarySourceIds;
    this.primarySourcePageReferences = primarySourcePageReferences;
  }
}

/*
    @date: 2023/12/19
    @primaryKey: Mathematical Apparatus ID
    @format: IID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the mathematicalApparatusSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty mathematical apparatus array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    mathematicalApparatusSplit array, which is the Row ID (MAPPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the mathematicalApparatusArr
    - Declares an empty mathematicalApparatus object 
    - Loops for the number of rows in the table, and the value is stored in the 
    mathematicalApparatusRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends mathematical apparatus object with a new instance 
    of a mathematical apparatus, with its own unique ID
    and populates each parameter of the MathematicalApparatus constructor 
    with each element of the mathematical apparatus array
*/
const mathematicalApparatusColumns = 11;
const mathematicalApparatusRows = 2;
//@updatable: true
// - copy and paste all csv data excluding headers/keys
const mathematicalApparatusRawData = `
MAPPID0,Friden Calculator,null,"Performing mathematical calculations. Performs addition, subtraction, multiplication and division",null,null,null,null,C23A3,p.29,P23A44,null
MAPPID1,Slide Rule,null,"Performing mathematical calculations. Performs multiplication, division, square-roots, trigonometry",null,null,null,null,C23A3,p.31,null,null
`;
const mathematicalApparatusSplit = mathematicalApparatusRawData.split(',');
const mathIdPattern = 'MAPPID';
const mathIdRegex = new RegExp(mathIdPattern);
let mathematicalApparatusArr = [];
for (let i = 0; i < mathematicalApparatusSplit.length; i++) {
  if (mathIdRegex.test(mathematicalApparatusSplit[i])) {
    mathematicalApparatusSplit.splice(i, 1);
    mathematicalApparatusArr.push(
      mathematicalApparatusSplit.splice(i + 1, mathematicalApparatusColumns),
    );
  }
}
const mathematicalApparatus = {};
for (let i = 0; i < mathematicalApparatusRows; i++) {
  mathematicalApparatus[`${mathIdPattern}${i}`] = new MathematicalApparatus(
    mathematicalApparatusArr[i][0],
    mathematicalApparatusArr[i][1],
    mathematicalApparatusArr[i][2],
    mathematicalApparatusArr[i][3],
    mathematicalApparatusArr[i][4],
    mathematicalApparatusArr[i][5],
    mathematicalApparatusArr[i][6],
    mathematicalApparatusArr[i][7],
    mathematicalApparatusArr[i][8],
    mathematicalApparatusArr[i][9],
    mathematicalApparatusArr[i][10],
  );
}

console.log(mathematicalApparatus);

class Rockets {
  //
}

class RocketComponents {
  //
}

class Satellites {
  //
}

class Antennae {
  //
}

class AnalogComputers {
  //
}

class DigitalComputers {
  //
}

class Compilers {
  //
}

class ComputerProgrammingLanguages {
  //
}

class RocketLaunches {
  //
}

class Architecture {
  //
}

class ManufacturedMaterials {
  //
}

class ManufacturedTextiles {
  //
}

class Artifacts {
  //
}

class Artworks {
  //
}

class ScientificApparatus {
  //
}

class CollaborativeScientificEfforts {
  //
}

class IntellectualContributions {
  //
}

class Economics {
  //
}

class AgriculturalTechniques {
  //
}

class AgriculturalTools {
  //
}

class InstitutionsOrganizationsUnions {
  //
}

class Scientists {
  //
}

class Mathematicians {
  //
}

class Engineers {
  //
}

class Architects {
  //
}

class Astronauts {
  //
}

class Historians {
  //
}
