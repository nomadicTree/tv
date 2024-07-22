const conversionPercentage = 0.1;
const additionPercentage = 0.05

/**
 * Generate a random integer in given range. 
 * @param {number} min - lower bound (inclusive)
 * @param {number} max - upper bound (exclusive)
 * @returns 
 */
function randint(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const randint = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return randint;
}

/**
 * Return given text wrapped with substring tags. 
 * @param {String} text 
 * @returns {String}
 */
function createSubscriptString(text) {
    return "<sub>" + text + "</sub>"
}

/**
 * Create a question object.
 * @param {String} questionText 
 * @param {String} answerText 
 * @returns 
 */
function createQuestionObject(questionText, answerText) {
    const questionObject = {
        question: questionText,
        answer: answerText
    };
    return questionObject;
}

/**
 * Copy and shuffle an array using Fisher-Yates shuffle algorithm.
 * @param {*} array - array to shuffle
 * @returns {Array<*>} - copy of shuffled array
 */
function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionDenaryToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const questionText = "Convert " + denaryValue + createSubscriptString(10) + " to 8-bit binary.";
    const answerText = binary + createSubscriptString(2)
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}

/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionBinaryToDenary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const questionText = "Convert " + binary + createSubscriptString(2) + " to denary.";
    const answerText = denaryValue + createSubscriptString(10);
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}

/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionDenaryToHex(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const questionText = "Convert " + denaryValue + createSubscriptString(10) + " to hexadecimal.";
    const answerText = hex + createSubscriptString(16);
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}

/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionHexToDenary(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const questionText = "Convert " + hex + createSubscriptString(16) + " to denary.";
    const answerText = denaryValue + createSubscriptString(10);
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}

/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionBinaryToHex(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const questionText = "Convert " + binary + createSubscriptString(2) + " to hexadecimal.";
    const answerText = hex + createSubscriptString(16);
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}
/**
 * Return an object with a question and answer.
 * @param {*} denaryValue 
 * @returns 
 */
function generateConversionQuestionHexToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const questionText = "Convert " + hex + createSubscriptString(16) + " to binary.";
    const answerText = binary + createSubscriptString(2);
    const conversionQuestion = createQuestionObject(questionText, answerText);
    return conversionQuestion;
}

/**
 * Randomly choose a conversion question, seeding it with a randomly generated number.
 * Return the question. 
 */
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

/**
 * Randomly generate a binary addition question (no more than 8 bits) 
 */
function generateBinaryAdditionQuestion() {
    const maxValue = 256;
    const xDenary = randint(0, maxValue);
    const yDenary = randint(0, maxValue);
    const sumDenary = xDenary + yDenary;
    const xBinary = denaryTo8bitBinary(xDenary);
    const yBinary = denaryTo8bitBinary(yDenary);
    var questionText = "What is the sum of " + xBinary + createSubscriptString(2) + " and " + yBinary + createSubscriptString(2) + "?";
    var answerText;
    if (sumDenary >= maxValue) {
        const sumBinary = denaryTo8bitBinary(sumDenary - maxValue);
        answerText = "1 " + sumBinary + createSubscriptString(2) + " (overflow)";
    } else {
        const sumBinary = denaryTo8bitBinary(sumDenary);
        answerText = sumBinary + createSubscriptString(2);
    }
    const additionQuestion = createQuestionObject(questionText, answerText);
    return additionQuestion;
}


/**
 * Generate a set number of conversion questions and add them to the array.
 * @param {Array} questionArray 
 * @param {number} numQuestions 
 */
function addConversionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateConversionQuestion());
    }
}

/**
 * Generate a set number of addition questions and add them to the array.
 * @param {Array} questionArray 
 * @param {number} numQuestions 
 */
function addAdditionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateBinaryAdditionQuestion());
    }
}

/**
 * Add new randomly generated questions to the array.
 * @param {*} questionArray 
 * @returns 
 */
function addAdditionalQuestions(questionArray) {
    const updatedArray = [...questionArray];
    const length = updatedArray.length;
    const numConversionQuestions = Math.ceil(length * conversionPercentage);
    const numBinaryAdditionQuestions = Math.ceil(length * additionPercentage);
    addConversionQuestions(updatedArray, numConversionQuestions);
    addAdditionQuestions(updatedArray, numBinaryAdditionQuestions);
    return updatedArray;
}

/**
 * Load written questions into array.
 * @param {*} questionData 
 * @returns 
 */
function loadBaseQuestions(questionData) {
    const questionDataCopy = structuredClone(questionData);
    const questionArray = Object.values(questionDataCopy).flat();
    return questionArray;
}


/**
 * Generate new randomly generated questions and shuffle the array
 */
function resetAvailableQuestions() {
    availableQuestions = loadBaseQuestions(questionData);
    availableQuestions = addAdditionalQuestions(availableQuestions);
    availableQuestions = shuffleArray(availableQuestions);
}