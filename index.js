/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityInKmh = 10000; // velocity (km/h)
const velocityInMetersPerSecond = velocityInKmh / 3.6; // velocity (m/s)
const spacecraftAcceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialAmountOfFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = initialDistance + (velocityInMetersPerSecond*timeInSeconds) //calcultes new distance
const finalDistanceInKm = newDistance/1000 //new distance
const remainingFuel = fuelBurnRate*timeInSeconds //calculates remaining fuel


// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (velocityInKmh, spacecraftAcceleration, timeInSeconds) => { 
  return velocityInKmh + (spacecraftAcceleration*timeInSeconds)
}
const newVelocity = calcNewVel(spacecraftAcceleration, velocityInKmh, timeInSeconds) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






