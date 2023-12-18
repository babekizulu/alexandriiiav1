/*
ALEXANDRiiiA DATASET
@desc: The ALEXANDRiiiA dataset converted into objects, for use in the app
@author: Lwandle Babekizulu Dlamini
@date: 2023/12/17
@TODO: IID7-IID37
*/
class MechanicalInvention {
  constructor(
    inventionId,
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
    this.inventionId = inventionId;
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
  searchById = (inventionId) => {
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
    @desc: We need to iterate over all  37 entries and create a new instance 
    for each entry
*/

const csvRawData = `IID0,null,null,TRUE,FALSE,Manioc Squeezer,null,null,null,null,null,null,null,null,null,null,null,South America,null,C23A1,p.15,null,null,,,,,,,,,,,,,,,,,,
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
const csvRawArr = csvRawData.split(',');
const strPattern = 'IID';
const strPattern2 = '\n';
const regex = new RegExp(strPattern);
const regex2 = new RegExp(strPattern2);
let csvArr = [];
//22 columns per row
for (let i = 0; i < csvRawArr.length; i++) {
  //if the loop reaches the primary key string 'IID{number}'
  // then take the primary key and the next 22 values, and push them into
  // a new array
  if (regex.test(csvRawArr[i])) {
    csvArr.push(csvRawArr.splice(i, 23));
  }
}
console.log(csvArr);
for (let i = 0; i < csvArr.length; i++) {
  csvArr[i].splice(0, 1);
}
console.log(csvArr);
const mechanicalInventions = {};
let objArr = [];
for (let i = 0; i < 37; i++) {
  const obj = new MechanicalInvention(
    csvArr[i][0],
    csvArr[i][1],
    csvArr[i][2],
    csvArr[i][3],
    csvArr[i][4],
    csvArr[i][5],
    csvArr[i][6],
    csvArr[i][7],
    csvArr[i][8],
    csvArr[i][9],
    csvArr[i][10],
    csvArr[i][11],
    csvArr[i][12],
    csvArr[i][13],
    csvArr[i][14],
    csvArr[i][15],
    csvArr[i][16],
    csvArr[i][17],
    csvArr[i][18],
    csvArr[i][19],
    csvArr[i][20],
    csvArr[i][21],
    csvArr[i][22],
  );
  mechanicalInventions[`IID${i}`] = obj;
}
console.log(mechanicalInventions);

class MathematicalApparatus {
  //
}

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
