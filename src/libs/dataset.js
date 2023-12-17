/*
ALEXANDRiiiA DATASET
@desc: The ALEXANDRiiiA dataset converted into objects, for use in the app
@author: Lwandle Babekizulu Dlamini
@date: 2023/12/17
@TODO: IID7-IID37
*/
class MechanicalInventions {
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
*/
const IID0 = new MechanicalInventions(
  '',
  '',
  true,
  false,
  'Manioc Squeezer',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ['South America'],
  '',
  ['C23A1'],
  ['p.15'],
  '',
  '',
);
const IID1 = new MechanicalInventions(
  '',
  '',
  true,
  false,
  'Boomerang',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ['Australia'],
  '',
  ['C23A1'],
  ['p.15'],
  '',
  '',
);
const IID2 = new MechanicalInventions(
  '',
  '',
  true,
  false,
  'Toggle Joint Harpoon',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  [''],
  '',
  ['C23A1'],
  ['p.15'],
  [''],
  [''],
);
const IID3 = new MechanicalInventions(
  285,
  '',
  true,
  false,
  'Water Clock',
  '',
  '',
  '',
  '',
  '',
  ['Ktesibios'],
  '',
  '',
  '',
  '',
  false,
  ['Ancient Alexandria'],
  '',
  ['C23A1'],
  ['p.138'],
  [''],
  [''],
);
const IID4 = new MechanicalInventions(
  '',
  '',
  true,
  false,
  'Crossbow',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  true,
  ['Far East, Mediterranean'],
  '',
  ['C23A1'],
  ['p.20'],
  '',
  '',
);
const IID5 = new MechanicalInventions(
  285,
  null,
  true,
  false,
  'Force Pump',
  '',
  '',
  '',
  '',
  '',
  ['Ktesibios'],
  '',
  '',
  '',
  '',
  false,
  ['Ancient Alexandria'],
  '',
  ['C23A1'],
  ['p.137'],
  '',
  '',
);
const IID6 = new MechanicalInventions(
  285,
  '',
  true,
  false,
  'Hydraulic Pipe Organ',
  '',
  '',
  '',
  '',
  '',
  ['Ktesibios'],
  '',
  '',
  '',
  '',
  false,
  ['Ancient Alexandria'],
  '',
  ['C23A1'],
  ['p.137'],
  '',
  '',
);
const IID7 = new MechanicalInventions();
const IID8 = new MechanicalInventions();
const IID9 = new MechanicalInventions();
const IID10 = new MechanicalInventions();
const IID11 = new MechanicalInventions();
const IID12 = new MechanicalInventions();
const IID13 = new MechanicalInventions();
const IID14 = new MechanicalInventions();
const IID15 = new MechanicalInventions();
const IID16 = new MechanicalInventions();
const IID17 = new MechanicalInventions();
const IID18 = new MechanicalInventions();
const IID19 = new MechanicalInventions();
const IID20 = new MechanicalInventions();
const IID21 = new MechanicalInventions();
const IID22 = new MechanicalInventions();
const IID23 = new MechanicalInventions();
const IID24 = new MechanicalInventions();
const IID25 = new MechanicalInventions();
const IID26 = new MechanicalInventions();
const IID27 = new MechanicalInventions();
const IID28 = new MechanicalInventions();
const IID29 = new MechanicalInventions();
const IID30 = new MechanicalInventions();
const IID31 = new MechanicalInventions();
const IID32 = new MechanicalInventions();
const IID33 = new MechanicalInventions();
const IID34 = new MechanicalInventions();
const IID35 = new MechanicalInventions();
const IID36 = new MechanicalInventions();
const IID37 = new MechanicalInventions();

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
