
// Dijkstra's Algorithm
// 1. Initialize all distances to infinity, except the starting vertex which is 0.
// 2. Consider all vertices as unvisited.
// 3. Repeat until there are no unvisited vertices:
//    a. Select the vertex with the smallest distance.
//    b. Update the distances for its neighbors.
//    c. Mark it as visited.
// 4. Return the result.

function fastestAndCheapestWay(startPoint, endPoint) {
    // Graph with cities and travel costs
    const graph = {
        gdansk: [
            { city: "bydgoszcz", cost: 1 },
            { city: "torun", cost: 3 }
        ],
        bydgoszcz: [
            { city: "gdansk", cost: 1 },
            { city: "torun", cost: 1 },
            { city: "warszawa", cost: 4 }
        ],
        torun: [
            { city: "gdansk", cost: 3 },
            { city: "bydgoszcz", cost: 1 },
            { city: "warszawa", cost: 1 }
        ],
        warszawa: [
            { city: "bydgoszcz", cost: 4 },
            { city: "torun", cost: 1 }
        ],
    };

    // Initialize distances to infinity, except for the start point
    const distances = [];
    const queue = [{ city: startPoint, cost: 0 }];
    
    for (const city in graph) {
        distances[city] = Infinity;
    }
    distances[startPoint] = 0;

    // Process the queue until it's empty
    while (queue.length > 0) {
        // Sort queue to process the city with the lowest cost
        queue.sort((a, b) => a.cost - b.cost);

        // Get the city with the smallest cost
        const { city, cost } = queue.shift();

        // If destination is reached, return the total cost
        if (city === endPoint) {
            return cost;
        }

        // Update the costs for neighbors
        for (const neighbor of graph[city]) {
            const newCost = cost + neighbor.cost;

            if (newCost < distances[neighbor.city]) {
                distances[neighbor.city] = newCost;
                queue.push({ city: neighbor.city, cost: newCost });
            }
        }
    }

    // Return -1 if no path exists
    return -1;
}

// Test the function
console.log(fastestAndCheapestWay("gdansk", "warszawa")); // Should return 3
