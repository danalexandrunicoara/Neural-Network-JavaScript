var inputVector = [0, 1, 0, 0];
var weightVector = [0, 0, 0, 0];
var desiredOutput = 1; // Bananas
var learningRate = 0.2; // Bigger the number, bigger the learning rate
var trials = 6; // Number of repetitions (Epoch)

/**
 * Multiply input with weight vectors.
 * @param {*} inputVector 
 * @param {*} weightVector 
 */
var evaluateNeuralNetwork = function (inputVector, weightVector) {
	var result = 0;
	for (var i = 0; i < inputVector.length; i++) {
		result = result + inputVector[i] * weightVector[i];
	}
	return result.toFixed(2);
}

/**
 * Check if the network reached the desired result.
 * @param {*} desiredOutput 
 * @param {*} actualResult 
 * 
 * Returns 0, if the network reached the desired result, otherwise returns a different value.
 */
var error = function (desiredOutput, actualResult) {
	return (desiredOutput - actualResult).toFixed(2);
}

/**
 * Learning algorithm.
 * Trains the nework by adding the learning rate to the weightVector.
 * @param {*} inputs 
 * @param {*} weights 
 */
var learn = function (inputs, weights) {
	for (var i = 0; i < weights.length; i++) {
		if (inputs[i] > 0) {
			weights[i] = weights[i] + learningRate;
		}
	}
}

/**
 * Repetition.
 * @param {*} trials 
 */
var trial = function (trials) {
	for (var i = 0; i < trials; i++) {
		var actualResult = evaluateNeuralNetwork(inputVector, weightVector);
		console.log("NeuralNetworkResult:" + actualResult);
		var errorResult = error(desiredOutput, actualResult);
		console.log("Error: " + errorResult);
		console.log("Weights: " + weightVector);
		learn(inputVector, weightVector);
	}
}

trial(trials);