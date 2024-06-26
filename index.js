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
const finalDistanceInKm = newDistance/1000 //final distance in km
const remainingFuel = fuelBurnRate*timeInSeconds //calculates remaining fuel
const finalFuel = initialAmountOfFuel - remainingFuel //final amount of fuel

/**
 * Calculates the final velocity in km/h given the initial velocity, acceleration, and time.
 *
 * @param {number} velocityInMetersPerSecond - The initial velocity in m/s.
 * @param {number} spacecraftAcceleration - The acceleration in m/s².
 * @param {number} timeInSeconds - The time in seconds.
 * @returns {number} The final velocity in km/h.
 */
// Pick up an error with how the function below is called and make it robust to such errors
const calcFinalVelocity = ({velocityInMetersPerSecond , spacecraftAcceleration, timeInSeconds}) => { 
  // Calculate the final velocity in m/s using the kinematic equation
  const finalVelocityInMetersPerSecond = velocityInMetersPerSecond  + spacecraftAcceleration * timeInSeconds;
  // Convert the final velocity from m/s to km/h
  const finalVelocityInKmh = finalVelocityInMetersPerSecond * 3600 / 1000;

  if(velocityInMetersPerSecond !== 2777.777777777778) throw new Error("The velocityInMetersPerSecond parameter should be equal to velocityInMetersPerSecond variable");
  if(spacecraftAcceleration !== 3) throw new Error("The spacecraftAcceleration parameter should be equal to spacecraftAcceleration variable");
  if(timeInSeconds !== 3600) throw new Error("The timeInSeconds parameter should be equal to the timeInSeconds variable");
  
  return finalVelocityInKmh;
}
 //calculates new velocity based on acceleration
const newVelocity = calcFinalVelocity({
  velocityInMetersPerSecond: velocityInMetersPerSecond ,
  spacecraftAcceleration: spacecraftAcceleration ,
  timeInSeconds: timeInSeconds})

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${finalFuel} kg`);






