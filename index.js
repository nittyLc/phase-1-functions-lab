// Code your solution in this file!
// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block - hq);
  }
  
  // Function to calculate distance in feet from HQ
  function distanceFromHqInFeet(block) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(block) * feetPerBlock;
  }
  
  // Function to calculate distance travelled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination);
  
    if (totalFeet <= 400) {
      return 0; // Free ride for the first 400 feet
    } else if (totalFeet > 400 && totalFeet < 2000) {
      return ((totalFeet - 400) * 0.02); // 2 cents per foot after the first 400 feet
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
      return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Exceeds maximum allowed distance
    }
  }
  
  // Exporting the functions for the test suite
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  
  