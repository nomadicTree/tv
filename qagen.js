/**
 * Convert a denary (decimal) number to an 8-bit binary string.
 * @param {number} num - The number to convert.
 * @returns {string|null} - The 8-bit binary string or null if the number is out of range.
 */
function denaryTo8bitBinary(num) {
    if (num < 0 || num > 255) {
        console.log("Error: Number is out of range for an 8-bit binary representation.");
        return null;
    }

    var binaryString = num.toString(2); // Convert to binary
    while (binaryString.length < 8) {
        binaryString = '0' + binaryString; // Pad with leading zeros
    }

    return binaryString;
}

/**
 * Convert a denary (decimal) number to a 2-digit hexadecimal string.
 * @param {number} num - The number to convert.
 * @returns {string|null} - The 2-digit hexadecimal string or null if the number is out of range.
 */
function denaryTo2DigitHex(num) {
    if (num < 0 || num > 255) {
        console.log("Error: Number is out of range for a 2-digit hexadecimal representation.");
        return null;
    }

    var hexString = num.toString(16); // Convert to hexadecimal
    while (hexString.length < 2) {
        hexString = '0' + hexString; // Pad with leading zeros if necessary
    }

    return hexString.toUpperCase(); // Convert to uppercase for consistency
}

function prependZeros(text, numZeros) {
    for (let i = 0; i < numZeros; i++) {
        text = '0' + text;
    }
    return text;
}

function appendZeros(text, numZeros) {
    for (let i = 0; i < numZeros; i++) {
        text = text + '0';
    }
    return text;
}

function leftShift8Bit(binaryString, places) {
    var shiftedNumber = appendZeros(binaryString, places);
    shiftedNumber = shiftedNumber.slice(-8);
    return shiftedNumber;
}

function rightShift8bit(binaryString, places) {
    var shiftedNumber = prependZeros(binaryString, places);
    shiftedNumber = shiftedNumber.slice(0, 8);
    return shiftedNumber;
}

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
function createConversionQuestionDenaryToBinary(denaryValue) {
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
function createConversionQuestionBinaryToDenary(denaryValue) {
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
function createConversionQuestionDenaryToHex(denaryValue) {
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
function createConversionQuestionHexToDenary(denaryValue) {
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
function createConversionQuestionBinaryToHex(denaryValue) {
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
function createConversionQuestionHexToBinary(denaryValue) {
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
function generateRandomConversionQuestion() {
    const questionTypesAvailable = 6; // there are 6 conversion question types above
    const denary = randint(0, 256);
    const questionIndex = randint(0, questionTypesAvailable);
    var conversionQuestion;
    switch (questionIndex) {
        case 0:
            conversionQuestion = createConversionQuestionDenaryToBinary(denary);
            break;
        case 1:
            conversionQuestion = createConversionQuestionDenaryToHex(denary);
            break;
        case 2:
            conversionQuestion = createConversionQuestionBinaryToDenary(denary);
            break;
        case 3:
            conversionQuestion = createConversionQuestionBinaryToHex(denary);
            break;
        case 4:
            conversionQuestion = createConversionQuestionHexToBinary(denary);
            break;
        case 5:
            conversionQuestion = createConversionQuestionHexToDenary(denary);
            break;
    }
    return conversionQuestion;
}

/**
 * Randomly generate a binary addition question (no more than 8 bits) 
 */
function createBinaryAdditionQuestion() {
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

function createLeftShiftQuestion(denaryValue, places) {
    const binaryString = denaryTo8bitBinary(denaryValue);
    const questionText = "What is the result of " + binaryString + createSubscriptString(2) + " being shifted left by " + places + " places? Answer using 8 bits.";
    const answerText = leftShift8Bit(binaryString, places) + createSubscriptString(2);
    const shiftQuestion = createQuestionObject(questionText, answerText);
    return shiftQuestion;
}

function createRightShiftQuestion(denaryValue, places) {
    const binaryString = denaryTo8bitBinary(denaryValue);
    const questionText = "What is the result of " + binaryString + createSubscriptString(2) + " being shifted right by " + places + " places? Answer using 8 bits.";
    const answerText = rightShift8bit(binaryString, places) + createSubscriptString(2);
    const shiftQuestion = createQuestionObject(questionText, answerText);
    return shiftQuestion;
}

function generateRandomShiftQuestion() {
    const questionTypesAvailable = 2; // there are 2 shift question types available
    const denary = randint(0, 256);
    const places = randint(1, 9);
    const questionIndex = randint(0, questionTypesAvailable);
    var shiftQuestion;
    switch (questionIndex) {
        case 0:
            shiftQuestion = createLeftShiftQuestion(denary, places);
            break;
        case 1:
            shiftQuestion = createRightShiftQuestion(denary, places);
            break;
    }
    return shiftQuestion;
}

function addShiftQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateRandomShiftQuestion());
    }
}

/**
 * Generate a set number of conversion questions and add them to the array.
 * @param {Array} questionArray 
 * @param {number} numQuestions 
 */
function addConversionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateRandomConversionQuestion());
    }
}

/**
 * Generate a set number of addition questions and add them to the array.
 * @param {Array} questionArray 
 * @param {number} numQuestions 
 */
function addAdditionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(createBinaryAdditionQuestion());
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
    const numConversionQuestions = 10;
    const numBinaryAdditionQuestions = 10;
    const numShiftQuestions = 10;
    addConversionQuestions(updatedArray, numConversionQuestions);
    addAdditionQuestions(updatedArray, numBinaryAdditionQuestions);
    addShiftQuestions(updatedArray, numShiftQuestions);
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