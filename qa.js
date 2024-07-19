const conversionPercentage = 0.1;
const additionPercentage = 0.05

const questionData = {
    questions: [
        {
            question: "What does CPU stand for?",
            answer: "Central Processing Unit"
        },
        {
            question: "Define the term \"algorithm.\"",
            answer: "A step-by-step procedure or formula for solving a problem."
        },
        {
            question: "What is the purpose of a compiler?",
            answer: "To translate high-level programming languages into machine code."
        },
        {
            question: "Explain the difference between RAM and ROM.",
            answer: "RAM (Random Access Memory) is volatile memory used for temporary storage, while ROM (Read-Only Memory) is non-volatile memory used for permanent storage."
        },
        {
            question: "What does HTML stand for?",
            answer: "HyperText Markup Language"
        },
        {
            question: "Name two types of loops used in programming.",
            answer: "For loop and While loop"
        },
        {
            question: "What is the primary function of an operating system?",
            answer: "To manage computer hardware and software resources and provide common services for computer programs."
        },
        {
            question: "Differentiate between a LAN and a WAN.",
            answer: "LAN (Local Area Network) is a network confined to a small geographic area, whereas WAN (Wide Area Network) spans across a large geographic area."
        },
        {
            question: "Define the term \"encryption.\"",
            answer: "The process of encoding information so that only authorized parties can access it."
        },
        {
            question: "What is a firewall used for in computing?",
            answer: "To monitor and control incoming and outgoing network traffic based on predetermined security rules."
        },
        {
            question: "Explain the concept of binary code.",
            answer: "A system of representing data and instructions using only two digits: 0 and 1."
        },
        {
            question: "Name three programming languages commonly used for web development.",
            answer: "HTML, CSS, JavaScript"
        },
        {
            question: "What is the purpose of a function in programming?",
            answer: "To group a set of statements together to perform a specific task."
        },
        {
            question: "Define the term \"bug\" in programming.",
            answer: "An error or flaw in a computer program that produces an incorrect or unexpected result."
        },
        {
            question: "What is meant by \"user interface\" in computing?",
            answer: "The means by which a user interacts with a computer system, including hardware and software components."
        },
        {
            question: "Describe the role of a database management system (DBMS).",
            answer: "To manage and organize data, providing functionalities such as storing, retrieving, updating, and deleting data."
        },
        {
            question: "Explain the difference between HTTP and HTTPS.",
            answer: "HTTP (HyperText Transfer Protocol) is unsecured, while HTTPS (HyperText Transfer Protocol Secure) encrypts data to ensure secure communication over a computer network."
        },
        {
            question: "Name two types of software applications.",
            answer: "Word processors and Spreadsheets"
        },
        {
            question: "What is meant by \"cloud computing\"?",
            answer: "The delivery of computing services (such as servers, storage, databases, networking, software, and more) over the internet (\"the cloud\") to offer faster innovation, flexible resources, and economies of scale."
        },
        {
            question: "Define the term \"algorithmic efficiency.\"",
            answer: "The measure of how well an algorithm performs in terms of time and space requirements as the size of the input to the algorithm increases."
        }
    ]
};

function randint(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const randint = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // max is exclusive, min is inclusive
    return randint;
}

function generateConversionQuestionDenaryToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const conversionQuestion = {
        question: "Convert " + denaryValue + " (denary) to 8-bit binary.",
        answer: binary
    };
    return conversionQuestion;
}

function generateConversionQuestionBinaryToDenary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const conversionQuestion = {
        question: "Convert " + binary + " (binary) to denary.",
        answer: denaryValue
    };
    return conversionQuestion;
}

function generateConversionQuestionDenaryToHex(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + denaryValue + " (denary) to hexadecimal.",
        answer: hex
    };
    return conversionQuestion;
}

function generateConversionQuestionHexToDenary(denaryValue) {
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + hex + " (hexadecimal) to denary.",
        answer: denaryValue
    };
    return conversionQuestion;
}

function generateConversionQuestionBinaryToHex(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + binary + " (binary) to hexadecimal.",
        answer: hex
    };
    return conversionQuestion;
}

function generateConversionQuestionHexToBinary(denaryValue) {
    const binary = denaryTo8bitBinary(denaryValue);
    const hex = denaryTo2DigitHex(denaryValue);
    const conversionQuestion = {
        question: "Convert " + hex + " (hexadecimal) to binary.",
        answer: binary
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
        question: "What is the sum of the binary numbers " + xBinary + " and " + yBinary + "?"
    };
    if (sumDenary >= maxValue) {
        const sumBinary = denaryTo8bitBinary(sumDenary - maxValue);
        additionQuestion.answer = "1 " + sumBinary + " (overflow)" ;
    } else {
        const sumBinary = denaryTo8bitBinary(sumDenary);
        additionQuestion.answer = sumBinary;
    }
    return additionQuestion;
}

function generateConversionQuestionTwosComplement(denaryValue) {

}

function populateConversionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateConversionQuestion());
    }
}

function populateAdditionQuestions(questionArray, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        questionArray.push(generateBinaryAdditionQuestion());
    }
}

function addAdditionalQuestions(questionArray) {
    const updatedArray = [...questionArray];
    const length = updatedArray.length;
    const numConversionQuestions = Math.ceil(length * conversionPercentage);
    const numBinaryAdditionQuestions = Math.ceil(length * additionPercentage);
    populateConversionQuestions(updatedArray, numConversionQuestions);
    populateAdditionQuestions(updatedArray, numBinaryAdditionQuestions);
    return updatedArray;
}