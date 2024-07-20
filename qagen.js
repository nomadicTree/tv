const conversionPercentage = 0.1;
const additionPercentage = 0.05

function randint(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const randint = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // max is exclusive, min is inclusive
    return randint;
}

function createSubscriptString(text) {
    //return "<span class='questionSubscript'>" + text + "</span>"
    return "<sub>" + text + "</sub>"
}

function shuffleArray(array) {
    // Create a copy of the original array to avoid mutating the original
    const shuffledArray = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function generateConversionQuestionDenaryToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const conversionQuestion = {
        question: "Convert " + denaryValue + createSubscriptString(10) + " to 8-bit binary.",
        answer: binary + createSubscriptString(2)
    };
    return conversionQuestion;
}

function generateConversionQuestionBinaryToDenary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const conversionQuestion = {
        question: "Convert " + binary + createSubscriptString(2) + " to denary.",
        answer: denaryValue + createSubscriptString(10)
    };
    return conversionQuestion;
}

function generateConversionQuestionDenaryToHex(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + denaryValue + createSubscriptString(10) + " to hexadecimal.",
        answer: hex + createSubscriptString(16)
    };
    return conversionQuestion;
}

function generateConversionQuestionHexToDenary(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + hex + createSubscriptString(16) +  " to denary.",
        answer: denaryValue + createSubscriptString(10)
    };
    return conversionQuestion;
}

function generateConversionQuestionBinaryToHex(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + binary + createSubscriptString(2) + " to hexadecimal.",
        answer: hex + createSubscriptString(16)
    };
    return conversionQuestion;
}

function generateConversionQuestionHexToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + hex + createSubscriptString(16) + " to binary.",
        answer: binary + createSubscriptString(2)
    };
    return conversionQuestion;
}

function generateConversionQuestion() {
    const questionTypesAvailable = 6; // there are 6 conversion question types above
    const denary = randint(0, 256);
    const questionIndex = randint(0, questionTypesAvailable);
    var conversionQuestion;
    switch (questionIndex) {
        case 0:
            conversionQuestion = generateConversionQuestionDenaryToBinary(denary);
            break;
        case 1:
            conversionQuestion = generateConversionQuestionDenaryToHex(denary);
            break;
        case 2:
            conversionQuestion = generateConversionQuestionBinaryToDenary(denary);
            break;
        case 3:
            conversionQuestion = generateConversionQuestionBinaryToHex(denary);
            break;
        case 4:
            conversionQuestion = generateConversionQuestionHexToBinary(denary);
            break;
        case 5:
            conversionQuestion = generateConversionQuestionHexToDenary(denary);
            break;
    }
    return conversionQuestion;
}

function generateBinaryAdditionQuestion() {
    const maxValue = 256;
    const xDenary = randint(0, maxValue);
    const yDenary = randint(0, maxValue);
    const sumDenary = xDenary + yDenary;
    const xBinary = denaryTo8bitBinary(xDenary);
    const yBinary = denaryTo8bitBinary(yDenary);
    var additionQuestion = {
        question: "What is the sum of " + xBinary + createSubscriptString(2) + " and " + yBinary + createSubscriptString(2) + "?"
    };
    if (sumDenary >= maxValue) {
        const sumBinary = denaryTo8bitBinary(sumDenary - maxValue);
        additionQuestion.answer = "1 " + sumBinary + createSubscriptString(2) + " (overflow)";
    } else {
        const sumBinary = denaryTo8bitBinary(sumDenary);
        additionQuestion.answer = sumBinary + createSubscriptString(2);
    }
    return additionQuestion;
}

function generateConversionQuestionTwosComplement(denaryValue) {

}

function addConversionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateConversionQuestion());
    }
}

function addAdditionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateBinaryAdditionQuestion());
    }
}

function addAdditionalQuestions(questionArray) {
    const updatedArray = [...questionArray];
    const length = updatedArray.length;
    const numConversionQuestions = Math.ceil(length * conversionPercentage);
    const numBinaryAdditionQuestions = Math.ceil(length * additionPercentage);
    addConversionQuestions(updatedArray, numConversionQuestions);
    addAdditionQuestions(updatedArray, numBinaryAdditionQuestions);
    return updatedArray;
}

function loadBaseQuestions(questionData) {
    const questionDataCopy = structuredClone(questionData);
    const questionArray = Object.values(questionDataCopy).flat();
    return questionArray;
}

function resetAvailableQuestions() {
    availableQuestions = loadBaseQuestions(questionData);
    availableQuestions = addAdditionalQuestions(availableQuestions);
    availableQuestions = shuffleArray(availableQuestions);
}