// constant functions 
const totalDistance = 1500;
    const fuelBudget = 175;
    const costPerGallon = 3;

    const speeds = [55, 60, 75];

    speeds.forEach((speed) => 
        let fuelEfficiency;

        if (speed === 55) 
            fuelEfficiency = 30;
           else if (speed === 60) 
            fuelEfficiency = 28;
           else if (speed === 75) 
            fuelEfficiency = 23;

        // function to calculate trip details 
        function calculateTripDetails(speed, totalDistance, fuelEfficiency, fuelBudget, costPerGallon) 
            const timeTaken = totalDistance / speed;
            const gallonsNeeded = totalDistance / fuelEfficiency;
            const fuelCost = gallonsNeeded * costPerGallon;
            const budgetEnough = fuelCost <= fuelBudget;
        
            return { timeTaken, gallonsNeeded, fuelCost, budgetEnough };
        
        const { timeTaken, gallonsNeeded, fuelCost, budgetEnough } = calculateTripDetails
            speed,
            totalDistance,
            fuelEfficiency,
            fuelBudget,
            costPerGallon