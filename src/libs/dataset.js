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
@TODO: ***IMPORTANT*** 
- Mathematician ID (MID) conflicts with Material ID (MID) for Manufactured Materials table
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

//BUILD MECHANICAL INVENTIONS OBJECT
const buildMechanicalInventions = () => {
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
  return mechanicalInventions;
};

const results1 = buildMechanicalInventions();
console.log(results1);

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
//BUILD MATHEMATICAL APPARATUS
const buildMathematicalApparatus = () => {
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

  return mathematicalApparatus;
};

const results2 = buildMathematicalApparatus();
console.log(results2);
/*
@desc: Class Constructor that creates Rocket objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the Rocket object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the RocketsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the RocketsColumns constant
and the number of rows per object, which stored in the RocketsRows constant
@date: 2023/12/19
*/
class Rocket {
  constructor(
    rocketName,
    researchName,
    rocketNickname,
    rocketPayload,
    iteration,
    iterationOf,
    height,
    diameter,
    thrust,
    singleStage,
    multiStage,
    numberOfStages,
    researchGroup,
    developers,
    developmentPeriod,
    launchDate,
    launchTime,
    region,
    sharedComponent,
    sharedComponentDeveloper,
    sharedComponentDeveloperRegion,
    multiRegional,
    modelImage,
    modelCDNLink,
  ) {
    //multi_regional,model_image,model_cdn_link
    this.rocketName = rocketName;
    this.researchName = researchName;
    this.rocketNickname = rocketNickname;
    this.rocketPayload = rocketPayload;
    this.iteration = iteration;
    this.iterationOf = iterationOf;
    this.height = height;
    this.diameter = diameter;
    this.thrust = thrust;
    this.singleStage = singleStage;
    this.multiStage = multiStage;
    this.numberOfStages = numberOfStages;
    this.researchGroup = researchGroup;
    this.developers = developers;
    this.developmentPeriod = developmentPeriod;
    this.launchDate = launchDate;
    this.launchTime = launchTime;
    this.region = region;
    this.sharedComponent = sharedComponent;
    this.sharedComponentDeveloper = sharedComponentDeveloper;
    this.sharedComponentDeveloperRegion = sharedComponentDeveloperRegion;
    this.multiRegional = multiRegional;
    this.modelImage = modelImage;
    this.modelCDNLink = modelCDNLink;
  }
}
//BUILD ROCKETS OBJECT
const buildRocketsObject = () => {
  /*
    @date: 2023/12/19
    @primaryKey: Rocket ID
    @format: RID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the rocketsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty rockets array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    rocketsSplit array, which is the Row ID (RID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the rocketsArr
    - Declares an empty rockets object 
    - Loops for the number of rows in the table, and the value is stored in the 
    rocketsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends rockets object with a new instance 
    of a rocket, with its own unique ID
    and populates each parameter of the rockets constructor 
    with each element of the rockets array
*/
  const rocketsRawData = `
RID0,Vergeltungswaffe Zwei (V-2),null,null,Missile,null,null,null,null,null,null,null,null,null,null,null,null,null,Germany,null,null,null,null,null,null
RID1,Corporal (Without Altitude Control),null,Little Sister,Missile,null,null,null,null,null,null,null,null,JPL,"JPL, Firestone",null,null,null,The United States of America,null,null,null,FALSE,null,null
RID2,Corporal,null,Bumper WAC,Missile,TRUE,"Corporal (Without Altitude Control), Vergeltungswaffe Zwei (V-2)",null,null,null,null,null,null,JPL,"JPL, Firestone",null,null,null,"The United States of America, Germany",Vergeltungswaffe Zwei (V-2),null,Germany,TRUE,null,null
RID3,Sergeant,null,null,Missile,null,null,34 ft.,null,null,null,null,null,JPL,null,null,null,null,The United States of America,null,null,null,FALSE,null,null
RID4,Viking,Project Vanguard,null,,null,null,null,null,null,FALSE,TRUE,null,United States Navy,null,null,null,null,null,null,null,null,null,null,null
RID5,Jupiter-C RS-27,Project Orbiter,null,Missile,TRUE,Redstone,null,null,null,FALSE,TRUE,4,"JPL, Redstone Arsenal / Army Ballistic Missile Agency","JPL, Redstone Arsenal / Army Ballistic Missile Agency",null,"September 20, 1956",1:45 AM,null,null,null,null,null,null,null
RID6,Juno,null,null,,TRUE,Jupiter-C RS-27,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
RID7,Sputnik,null,null,Satellite,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
`;
  //@updatable: true
  const rocketsColumns = 22;
  const rocketsRows = 8;
  //@updatable: false
  const rocketsSplit = rocketsRawData.split(',');
  const rocketsIdPattern = 'RID';
  const rocketsRegex = new RegExp(rocketsIdPattern);
  let rocketsArr = [];
  for (let i = 0; i < rocketsSplit.length; i++) {
    if (rocketsRegex.test(rocketsSplit[i])) {
      rocketsSplit.splice(i, 1);
      rocketsArr.push(rocketsSplit.splice(i + 1, rocketsColumns));
    }
  }
  const rockets = {};
  for (let i = 0; i < rocketsRows; i++) {
    rockets[`${rocketsIdPattern}${i}`] = new Rocket(
      rocketsArr[i][0],
      rocketsArr[i][1],
      rocketsArr[i][2],
      rocketsArr[i][3],
      rocketsArr[i][4],
      rocketsArr[i][5],
      rocketsArr[i][6],
      rocketsArr[i][7],
      rocketsArr[i][8],
      rocketsArr[i][9],
      rocketsArr[i][10],
      rocketsArr[i][11],
      rocketsArr[i][12],
      rocketsArr[i][13],
      rocketsArr[i][14],
      rocketsArr[i][15],
      rocketsArr[i][16],
      rocketsArr[i][17],
      rocketsArr[i][18],
      rocketsArr[i][19],
      rocketsArr[i][20],
      rocketsArr[i][21],
      rocketsArr[i][22],
    );
  }

  return rockets;
};
const results3 = buildRocketsObject();
console.log(results3);

/////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: LONG DATA, therefore requires different logic to parse
- ***SKIP FOR NOW
@date: 2023/12/19
*/
class RocketComponent {
  //
}
//***SKIP FOR NOW
////////////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Satellte objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the satellites object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the satellitesRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the satellitesColumns constant
and the number of rows per object, which stored in the satellitesRows constant
@date: 2023/12/19
*/
class Satellite {
  //satellite_id,satellite_name,research_objectives,mission_successes,mission_failures
  constructor(
    satelliteId,
    satelliteName,
    researchObjectives,
    missionSuccesses,
    missionFailures,
  ) {
    this.satelliteId = satelliteId;
    this.satelliteName = satelliteName;
    this.researchObjectives = researchObjectives;
    this.missionSuccesses = missionSuccesses;
    this.missionFailures = missionFailures;
  }
  //methods
}
//BUILD SATELLITE OBJECT
const buildSatelliteObject = () => {
  /*
    @date: 2023/12/19
    @primaryKey: Satellite ID
    @format: SATID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the satellitesSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty satellites array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    satellitesSplit array, which is the Row ID (SATID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the satellitesArr
    - Declares an empty satellites object to house each constructed satellite object
    - Loops for the number of rows in the table, and the value is stored in the 
    satelliteRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends satellites object with a new instance 
    of a Satellite, with its own unique ID
    and populates each parameter of the Satellite constructor 
    with each element of the satellites array
*/
  //@updatable: true
  const satelliteColumns = 4;
  const satelliteRows = 5;
  //@updatable: false
  const satellitesRawData = `
SATID0,Sputnik,"Temperature Measurement, Atmospheric Pressure Measurement","Temperature Measurement, Atmospheric Pressure Measurement",null
SATID1,Sputnik 2,"Solar Radiation Research, Cosmic Ray Research, Effects of Space Travel on Living Creatures","Solar Radiation Research, Cosmic Ray Research",Effects of Space Travel on Living Creatures
SATID2,Explorer,Cosmic Ray Research,"Launch Success, Reaches orbit successfully",
SATID3,Explorer 2,null,Launch Success,"Stage 4 Engine Failure, Failed to reach orbit"
SATID4,Pioneer 4,null,null,null
`;
  const satellitesSplit = satellitesRawData.split(',');
  const satelliteIdPattern = 'SATID';
  const satelliteRegex = new RegExp(satelliteIdPattern);
  let satellitesArr = [];

  for (let i = 0; i < satellitesSplit.length; i++) {
    if (satelliteRegex.test(satellitesSplit[i])) {
      satellitesSplit.splice(i, 1);
      satellitesArr.push(satellitesSplit.splice(i + 1, satelliteColumns));
    }
  }
  const satellites = {};
  for (let i = 0; i < satelliteRows; i++) {
    satellites[`${satelliteIdPattern}${i}`] = new Satellite(
      satellitesArr[i][0],
      satellitesArr[i][1],
      satellitesArr[i][2],
      satellitesArr[i][3],
    );
  }
  return satellites;
};
// const results4 = buildSatelliteObject();
// console.log(results4);
/////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Antennae objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the antennae object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the antennaeRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the antennaeColumns constant
and the number of rows per object, which stored in the antennaeRows constant
@date: 2023/12/19
*/
class Antenna {
  //antenna_id,antenna_name,location,developer,region,source_ids,source_page_references,primary_source_ids,primary_source_page_references
  constructor(
    antennaName,
    location,
    developer,
    region,
    sourceIds,
    sourcePageReferences,
    primarySourceIds,
    primarySourcePageReferences,
  ) {
    this.antennaName = antennaName;
    this.location = location;
    this.developer = developer;
    this.region = region;
    this.sourceIds = sourceIds;
    this.sourcePageReferences = sourcePageReferences;
    this.primarySourceIds = primarySourceIds;
    this.primarySourcePageReferences = primarySourcePageReferences;
  }
  //methods
}
//BUILD ANTENNAE OBJECT
const buildAntennaeObject = () => {
  /*
    @date: 2023/12/19
    @primaryKey: Antenna ID
    @format: ANTID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the antennaeSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty antennae array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    antennaeSplit array, which is the Row ID (MAPPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the antennaeArr
    - Declares an empty antennae object 
    - Loops for the number of rows in the table, and the value is stored in the 
    antennaeRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends antennae object with a new instance 
    of an Antenna, with its own unique ID
    and populates each parameter of the Antenna constructor 
    with each element of the antennae array
*/
  const antennaeColumns = 8;
  const antennaeRows = 8;
  const antennaeRawData = `
ANTID0,Goldstone,"Goldstone Dry Lake, Mojave Desert, California",null,null,null,null,null,null
`;
  const antennaeSplit = antennaeRawData.split(',');
  const antennaeIdPattern = 'ANTID';
  const antennaeRegex = new RegExp(antennaeIdPattern);
  let antennaeArr = [];

  for (let i = 0; i < antennaeSplit.length; i++) {
    if (antennaeRegex.test(antennaeSplit[i])) {
      antennaeSplit.splice(i, 1);
      antennaeArr.push(antennaeSplit.splice(i + 1, antennaeColumns));
    }
  }
  const antennae = {};
  for (let i = 0; i < antennaeRows.length; i++) {
    antennae[`${antennaeIdPattern}${i}`] = new Antenna(
      antennaeArr[i][0],
      antennaeArr[i][1],
      antennaeArr[i][2],
      antennaeArr[i][3],
      antennaeArr[i][4],
      antennaeArr[i][5],
      antennaeArr[i][6],
      antennaeArr[i][7],
    );
  }
  return antennae;
};
const results5 = buildAntennaeObject();
console.log(results5);

//////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Analog Computer objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the analogComputers object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the analogComputersRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the analogComputersColumns constant
and the number of rows per object, which stored in the analogComputersRows constant
@date: 2023/12/19
*/
class AnalogComputer {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Analog Computer ID
    @format: ACOMPID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the analogComputersSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty analogComputers array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    analogComputersSplit array, which is the Row ID (ACOMPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the analogComputersArr
    - Declares an empty analogComputers object 
    - Loops for the number of rows in the table, and the value is stored in the 
    analogComputersRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends analogComputers object with a new instance 
    of an AnalogComputer, with its own unique ID
    and populates each parameter of the AnalogComputer constructor 
    with each element of the analogComputers array
*/

///////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Digital Computer objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the digitalComputers object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the digitalComputersRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the digitalComputersColumns constant
and the number of rows per object, which stored in the digitalComputersRows constant
@date: 2023/12/19
*/
class DigitalComputer {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Digital Computer ID
    @format: DCOMPID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the digitalComputersSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty digitalComputers array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    digitalComputersSplit array, which is the Row ID (DCOMPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the digitalComputersArr
    - Declares an empty digitalComputers object 
    - Loops for the number of rows in the table, and the value is stored in the 
    digitalComputersRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends digitalComputers object with a new instance 
    of a DigitalComputer, with its own unique ID
    and populates each parameter of the DigitalComputer constructor 
    with each element of the digitalComputers array
*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Compiler objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the compilers object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the compilersRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the compilersColumns constant
and the number of rows per object, which stored in the compilersRows constant
@date: 2023/12/19
*/
class Compilers {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Compiler ID
    @format: CMPLID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the compilersSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty compilers array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    compilersSplit array, which is the Row ID (CMPLID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the compilersArr
    - Declares an empty compilers object 
    - Loops for the number of rows in the table, and the value is stored in the 
    compilersRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends compilers object with a new instance 
    of a Compiler, with its own unique ID
    and populates each parameter of the Compiler constructor 
    with each element of the compilers array
*/

////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Computer Programming Language objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the computerProgrammingLanguages object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the computerProgrammingLanguagesRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the computerProgrammingLanguagesColumns constant
and the number of rows per object, which stored in the computerProgrammingLanguagesRows constant
@date: 2023/12/19
*/
class ComputerProgrammingLanguage {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Programming Language ID
    @format: PLID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the computerProgrammingLanguagesSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty computerProgrammingLanguages array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    computerProgrammingLanguagesSplit array, which is the Row ID (PLID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which 
    is the computerProgrammingLanguagesArr
    - Declares an empty computerProgrammingLanguages object 
    - Loops for the number of rows in the table, and the value is stored in the 
    computerProgrammingLanguagesRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends computerProgrammingLanguages object with a new instance 
    of a ComputerProgrammingLanguage, with its own unique ID
    and populates each parameter of the ComputerProgrammingLanguage constructor 
    with each element of the computerProgrammingLanguages array
*/

///////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Rocket Launch objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the rocketLaunches object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the rocketLaunchesRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the rocketLaunchesColumns constant
and the number of rows per object, which stored in the rocketLaunchesRows constant
@date: 2023/12/19
*/
class RocketLaunch {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Rocket Launch ID
    @format: RLID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the rocketLaunchesSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty rocketLaunches array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    rocketLaunchesSplit array, which is the Row ID (RLID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the rocketLaunchesArr
    - Declares an empty rocketLaunches object 
    - Loops for the number of rows in the table, and the value is stored in the 
    rocketLaunchesRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends rocketLaunches object with a new instance 
    of a RocketLaunch, with its own unique ID
    and populates each parameter of the RocketLaunch constructor 
    with each element of the rocketLaunches array
*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates Archtiecture objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the architecture object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the architectureRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the architectureColumns constant
and the number of rows per object, which stored in the architectureRows constant
@date: 2023/12/19
*/
class Architecture {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Structure ID
    @format: SID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the architectureSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty architecture array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    architectureSplit array, which is the Row ID (SID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the architectureArr
    - Declares an empty architecture object 
    - Loops for the number of rows in the table, and the value is stored in the 
    architectureRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends architecture object with a new instance 
    of Architecture, with its own unique ID
    and populates each parameter of the Architecture constructor 
    with each element of the architecture array
*/

//////////////////////////////////////////////////////////////////////////////////////
/* ManufacturedMaterial manufacturedMaterials
@desc: Class Constructor that create Manufactured Material objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the manufacturedMaterials object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the manufacturedMaterialsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the manufacturedMaterialsColumns constant
and the number of rows per object, which stored in the manufacturedMaterialsRows constant
@date: 2023/12/19
*/
class ManufacturedMaterial {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Material ID
    @format: MID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the manufacturedMaterialsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty manufacturedMaterials array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    manufacturedMaterialsSplit array, which is the Row ID (MID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the manufacturedMaterialsArr
    - Declares an empty manufacturedMaterials object 
    - Loops for the number of rows in the table, and the value is stored in the 
    manufacturedMaterialsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends manufacturedMaterials object with a new instance 
    of a ManufacturedMaterial, with its own unique ID
    and populates each parameter of the ManufacturedMaterial constructor 
    with each element of the manufacturedMaterials array
*/

//////////////////////////////////////////////////////////////////////////////////////////
/* manufacturedTextiles
@desc: Class Constructor that creates Manufactured Textile objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the manufacturedTextiles object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the manufacturedTextilesRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the manufacturedTextilesColumns constant
and the number of rows per object, which stored in the manufacturedTextilesRows constant
@date: 2023/12/19
*/
class ManufacturedTextile {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Textile ID
    @format: TID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the manufacturedTextilesSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty manufacturedTextiles array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    manufacturedTextilesSplit array, which is the Row ID (TID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the manufacturedTextilesArr
    - Declares an empty manufacturedTextiles object 
    - Loops for the number of rows in the table, and the value is stored in the 
    manufacturedTextilesRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends manufacturedTextiles object with a new instance 
    of a ManufacturedTextile, with its own unique ID
    and populates each parameter of the ManufacturedTextile constructor 
    with each element of the manufacturedTextiles array
*/

/////////////////////////////////////////////////////////////////////////
/* artifacts
@desc: Class Constructor that creates Artifact objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the artifacts object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the artifactsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the artifactsColumns constant
and the number of rows per object, which stored in the artifactsRows constant
@date: 2023/12/19
*/
class Artifact {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Artifact ID
    @format: ARTFID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the artifactsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty artifacts array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    artifactsSplit array, which is the Row ID (ARTIFID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the artifactsArr
    - Declares an empty artifacts object 
    - Loops for the number of rows in the table, and the value is stored in the 
   artifactsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends artifacts object with a new instance 
    of Artifact, with its own unique ID
    and populates each parameter of the Artifact constructor 
    with each element of the artifacts array
*/

//////////////////////////////////////////////////////////////////////////////////////
/* artworks
@desc: Class Constructor that creates Artwork objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the artworks object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the artworksRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the artworksColumns constant
and the number of rows per object, which stored in the artworksRows constant
@date: 2023/12/19
*/
class Artwork {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Artwork ID
    @format: ARTID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the artworksSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty artworks array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    artworksSplit array, which is the Row ID (ARTID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the artworksArr
    - Declares an empty artworks object 
    - Loops for the number of rows in the table, and the value is stored in the 
    artworksRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends artworks object with a new instance 
    of an Artwork, with its own unique ID
    and populates each parameter of the Artwork constructor 
    with each element of the artworks array
*/

//////////////////////////////////////////////////////////////////////////////////////
/* scientificApparatus
@desc: Class Constructor that creates Scientific Apparatus objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the scientificApparatus object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the scientificApparatusRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the scientificApparatusColumns constant
and the number of rows per object, which stored in the scientificApparatusRows constant
@date: 2023/12/19
*/
class ScientificApparatus {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Scientific Apparatus ID
    @format: SCIAPPID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the scientificApparatusSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty scientificApparatus array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    scientificApparatusSplit array, which is the Row ID (SCIAPPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the scientificApparatusArr
    - Declares an empty scientificApparatus object 
    - Loops for the number of rows in the table, and the value is stored in the 
    scientificApparatusRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends scientificApparatus object with a new instance 
    of ScientificApparatus, with its own unique ID
    and populates each parameter of the ScientificApparatus constructor 
    with each element of the scientificApparatus array
*/

////////////////////////////////////////////////////////////////////////////////////////
/* collaborativeScientificEfforts
@desc: Class Constructor that creates Collaborative Scientific Effort objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the collaborativeScientificEfforts object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the collaborativeScientificEffortsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the collaborativeScientificEffortsColumns constant
and the number of rows per object, which stored in the collaborativeScientificEffortsRows constant
@date: 2023/12/19
*/
class CollaborativeScientificEffort {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Collaborative Scientific Effort ID
    @format: CSEID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the collaborativeScientificEffortsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty collaborativeScientificEfforts array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    collaborativeScientificEffortsSplit array, which is the Row ID (MAPPID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is 
    the collaborativeScientificEffortsArr
    - Declares an empty collaborativeScientificEfforts object 
    - Loops for the number of rows in the table, and the value is stored in the 
    collaborativeScientificEffortsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends collaborativeScientificEfforts object with a new instance 
    of CollaborativeScientificEffort, with its own unique ID
    and populates each parameter of the CollaborativeScientificEffort constructor 
    with each element of the collaborativeScientificEfforts array
*/

//////////////////////////////////////////////////////////////////////////////////////
/* intellectualContributions
@desc: Class Constructor that creates Intellectual Contribution objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the intellectualContributions object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the intellectualContributionsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the intellectualContributionsColumns constant
and the number of rows per object, which stored in the intellectualContributionsRows constant
@date: 2023/12/19
*/
class IntellectualContribution {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Intellectual Contribution ID
    @format: ICID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the intellectualContributionsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty intellectualContributions array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    intellectualContributionsSplit array, which is the Row ID (ICID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is 
    the intellectualContributionsArr
    - Declares an empty intellectualContributions object 
    - Loops for the number of rows in the table, and the value is stored in the 
    intellectualContributions consant, which can be updated everytime more rows 
    are added to the table
    - Appends intellectualContributions object with a new instance 
    of an IntellectualContribution, with its own unique ID
    and populates each parameter of the IntellectualContributions constructor 
    with each element of the intellectualContributions array
*/

//////////////////////////////////////////////////////////////////////////////////////////
/* economics
@desc: Class Constructor that creates Economics objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the economics object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the economicsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the economicsColumns constant
and the number of rows per object, which stored in the economicsRows constant
@date: 2023/12/19
*/
class Economics {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Economy ID
    @format: ECONID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the economicsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty economics array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    economicsSplit array, which is the Row ID (ECONID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the economicsArr
    - Declares an empty economics object 
    - Loops for the number of rows in the table, and the value is stored in the 
    economicsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends economics object with a new instance 
    of a economics, with its own unique ID
    and populates each parameter of the economics constructor 
    with each element of the economics array
*/

//////////////////////////////////////////////////////////////////////////////////////////
/* agriculturalTechniques
@desc: Class Constructor that creates Agricultural Technique objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the agriculturalTechniques object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the agriculturalTechniquesRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the agriculturalTechniquesColumns constant
and the number of rows per object, which stored in the agriculturalTechniquesRows constant
@date: 2023/12/19
*/
class AgriculturalTechnique {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Agricultural Technique ID
    @format: AGRITECHID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the agriculturalTechniquesSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty agriculturalTechniques array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    agriculturalTechniquesSplit array, which is the Row ID (AGRITECHID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the agriculturalTechniquesArr
    - Declares an empty agriculturalTechniques object 
    - Loops for the number of rows in the table, and the value is stored in the 
    agriculturalTechniquesRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends agriculturalTechniques object with a new instance 
    of an AgriculturalTechnique, with its own unique ID
    and populates each parameter of the AgriculturalTechnique constructor 
    with each element of the agriculturalTechniques array
*/

///////////////////////////////////////////////////////////////////////////////////////
/* agriculturalTools
@desc: Class Constructor that creates Agrcultural Tool objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the agriculturalTools object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the agriculturalToolsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the agriculturalToolsColumns constant
and the number of rows per object, which stored in the agriculturalToolsRows constant
@date: 2023/12/19
*/
class AgriculturalTool {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Agricultural Tool ID
    @format: AGRITOOLID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the agriculturalToolsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty agriculturalTools array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    agriculturalToolsSplit array, which is the Row ID (AGRITOOLID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the agriculturalToolsArr
    - Declares an empty agriculturalTools object 
    - Loops for the number of rows in the table, and the value is stored in the 
    agriculturalToolsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends agriculturalTools object with a new instance 
    of an AgriculturalTool, with its own unique ID
    and populates each parameter of the AgriculturalTool constructor 
    with each element of the AgriculturalTool array
*/

////////////////////////////////////////////////////////////////////////////////////////
/* institutionsOrganizationsUnions
@desc: Class Constructor that creates Institution, Organization & Union objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the institutionsOrganizationsUnions object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the institutionsOrganizationsUnionsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the institutionsOrganizationsUnionsColumns constant
and the number of rows per object, which stored in the institutionsOrganizationsUnionsRows constant
@date: 2023/12/19
*/
class InstitutionsOrganizationsUnions {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Group ID
    @format: GID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the institutionsOrganizationsUnionsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty institutionsOrganizationsUnions array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    institutionsOrganizationsUnionsSplit array, which is the Row ID (GID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the institutionsOrganizationsUnionsArr
    - Declares an empty institutionsOrganizationsUnions object 
    - Loops for the number of rows in the table, and the value is stored in the 
    institutionsOrganizationsUnionsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends institutionsOrganizationsUnions object with a new instance 
    of InstitutionsOrganizationsUnions, with its own unique ID
    and populates each parameter of the InstitutionsOrganizationsUnions constructor 
    with each element of the institutionsOrganizationsUnions array
*/

/////////////////////////////////////////////////////////////////////////////////////////
/* scientists
@desc: Class Constructor that creates Scientist objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the scientists object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the scientistsRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the scientistsColumns constant
and the number of rows per object, which stored in the scientistsRows constant
@date: 2023/12/19
*/
class Scientist {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Scientist ID
    @format: SCID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the scientistsSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty scientists array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    scientistsSplit array, which is the Row ID (SCID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the scientistsArr
    - Declares an empty scientists object 
    - Loops for the number of rows in the table, and the value is stored in the 
    scientistsRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends scientists object with a new instance 
    of a scientists, with its own unique ID
    and populates each parameter of the scientists constructor 
    with each element of the scientists array
*/

////////////////////////////////////////////////////////////////////////////////////////
/* mathematicians
@desc: Class Constructor that creates mathematicians objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the mathematicians object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the mathematiciansRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the mathematiciansColumns constant
and the number of rows per object, which stored in the mathematiciansRows constant
@date: 2023/12/19
*/
class Mathematician {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Mathematician ID
    @format: MID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the mathematiciansSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty mathematicians array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    mathematiciansSplit array, which is the Row ID (MID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the mathematiciansArr
    - Declares an empty mathematicians object 
    - Loops for the number of rows in the table, and the value is stored in the 
    mathematiciansRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends mathematicians object with a new instance 
    of a Mathematician, with its own unique ID
    and populates each parameter of the Mathematician constructor 
    with each element of the mathematicians array
*/

///////////////////////////////////////////////////////////////////////////////////////////
/* engineers
@desc: Class Constructor that creates Engineer objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the engineers object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the engineersRawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the engineersColumns constant
and the number of rows per object, which stored in the engineersRows constant
@date: 2023/12/19
*/
class Engineers {
  //
}
/*
    @date: 2023/12/19
    @primaryKey: Engineer ID
    @format: EID(number)
    @desc: Iterates over csv raw data string and performs the following operations: 
    - Splits the string into an array, and splits at every comma ',' 
    - Declares an ID pattern to determine where each row begins
    - Creates a new Regex instance to evaluate the current item 
      in the engineersSplit array, and if the current item
      in the loop passes the Regex test, proceeds to the next step
    - Declares an empty engineers array to store spliced values 
    - Performs for loop mentioned before
    - When if() conditon is met, then splices the first element of the 
    engineersSplit array, which is the Row ID (EID in the dataset)
    - splices off every element from the current element to the last element in 
    the row of data, and pushes it to a new array, which is the engineersArr
    - Declares an empty engineers object 
    - Loops for the number of rows in the table, and the value is stored in the 
    engineersRows consant, which can be updated everytime more rows 
    are added to the table
    - Appends engineers object with a new instance 
    of an Engineer, with its own unique ID
    and populates each parameter of the Engineer constructor 
    with each element of the engineers array
*/

///////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates __________ objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the _______________ object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the _____________RawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the ___________Columns constant
and the number of rows per object, which stored in the _________Rows constant
@date: 2023/12/19
*/
class Architects {
  //
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

///////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates __________ objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the _______________ object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the _____________RawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the ___________Columns constant
and the number of rows per object, which stored in the _________Rows constant
@date: 2023/12/19
*/
class Astronauts {
  //
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

/////////////////////////////////////////////////////////////////////////////////////////
/*
@desc: Class Constructor that creates __________ objects, with the table 
headers/keys as property names. Also contains search functions to iterate through the 
the _______________ object and find values, so the goal is to 
find the most efficient search algorithm for this particular table
***IMPORTANT***
- When updating, add all values excluding headers/keys from CSV file into 
the _____________RawData string, and the loops will clean up the string 
and do the rest. The only two parameters that need to be updated are the number of columns 
in each row, which is stored in the ___________Columns constant
and the number of rows per object, which stored in the _________Rows constant
@date: 2023/12/19
*/
class Historians {
  //
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
