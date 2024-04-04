//Part 1
const PI = 3.1415;
const radius = 5;
const minSpacePerPlant = 0.8;
const maxPlants = Math.floor(PI * radius * radius / minSpacePerPlant);

function predictPlantGrowth(weeks) {
    let plantCount = 20 * Math.pow(2, weeks); // Plants double in number every week
    let capacity = maxPlants * 0.8; // 80% of maximum capacity

    if (plantCount > capacity) {
        console.log(`After ${weeks} weeks, plant count exceeds the capacity of the garden. Prune the plants.`);
    } else if (plantCount >= maxPlants / 2) {
        console.log(`After ${weeks} weeks, plant count is within acceptable limits. Monitor their growth.`);
    } else {
        console.log(`After ${weeks} weeks, there is room to plant more plants.`);
    }
}

// Predict plant growth after 1, 2, and 3 weeks
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

//Part 2
function calculateAdditionalSpace(startingPlants, weeks) {
    let plantCount = startingPlants * Math.pow(2, weeks); // Plants double in number every week
    let requiredSpace = plantCount * minSpacePerPlant;
    let additionalSpace = requiredSpace - (PI * radius * radius);
    return additionalSpace;
}

function calculateExpandedGardenRadius(startingPlants, weeks) {
    let additionalSpace = calculateAdditionalSpace(startingPlants, weeks);
    let expandedArea = PI * (radius + Math.sqrt(additionalSpace / PI)); // New area with additional space
    let expandedRadius = Math.sqrt(expandedArea / PI); // Calculate the radius
    return expandedRadius;
}

// Calculate additional space required if starting with 100 plants and not pruning for 10 weeks
let startingPlants = 100;
let weeks = 10;
let additionalSpace = calculateAdditionalSpace(startingPlants, weeks);
console.log(`Additional space required after ${weeks} weeks without pruning: ${additionalSpace.toFixed(2)} square meters`);

// Calculate the radius of the expanded garden if the space remained circular
let expandedRadius = calculateExpandedGardenRadius(startingPlants, weeks);
console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);

//Part 3
function calculateAdditionalSpace(startingPlants, weeks) {
    let plantCount = startingPlants * Math.pow(2, weeks); // Plants double in number every week
    let requiredSpace = plantCount * minSpacePerPlant;
    let additionalSpace = requiredSpace - (PI * radius * radius);
    return additionalSpace;
}

function calculateExpandedGardenRadius(startingPlants, weeks) {
    let additionalSpace = calculateAdditionalSpace(startingPlants, weeks);
    let expandedArea = PI * (radius + Math.sqrt(additionalSpace / PI)); // New area with additional space
    let expandedRadius = Math.sqrt(expandedArea / PI); // Calculate the radius
    return expandedRadius;
}

try {
    let startingPlants = 100;
    let weeks = 10;
    let additionalSpace = calculateAdditionalSpace(startingPlants, weeks);

    if (additionalSpace > 0) {
        throw new Error('Insufficient space to accommodate the provided number of plants.');
    }

    // Calculate the radius of the expanded garden if the space remained circular
    let expandedRadius = calculateExpandedGardenRadius(startingPlants, weeks);
    console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);

} catch (error) {
    console.error(error.message);
}
