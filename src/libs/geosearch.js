/*
@desc: Library for associating coordinates with location
@author: Lwandle Babekizulu Dlamini
@date: 2024/02/07
@TODO: 
-
*/
const pth = '../dataset/';
const csvFilePathArr = [
  `${pth}agricultural_techniques.csv`,
  `${pth}agricultural_tools.csv`,
  `${pth}airplanes.csv`,
  `${pth}analog_computers.csv`,
  `${pth}antennae.csv`,
  `${pth}architects.csv`,
  `${pth}architecture.csv`,
  `${pth}artifacts.csv`,
  `${pth}artworks.csv`,
  `${pth}astronauts.csv`,
  `${pth}collaborative_scientific_efforts.csv`,
  `${pth}compilers.csv`,
  `${pth}computer_programming_languages.csv`,
  `${pth}digital_computers.csv`,
  `${pth}economics.csv`,
  `${pth}engineers.csv`,
  `${pth}historians.csv`,
  `${pth}institutions_organizations_unions.csv`,
  `${pth}intellectual_contributions.csv`,
  `${pth}manufactured_materials.csv`,
  `${pth}manufactured_textiles.csv`,
  `${pth}mathematical_apparatus.csv`,
  `${pth}mathematicians.csv`,
  `${pth}mechanical_invention_category_index.csv`,
  `${pth}mechanical_invention_functions.csv`,
  `${pth}mechanical_inventions.csv`,
  `${pth}private_aeronautics_companies.csv`,
  `${pth}programming_language_interfaces.csv`,
  `${pth}`,
];
class GeoSet {
  constructor(latitude, longitude, locationName) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.locationName = locationName;
  }
}
