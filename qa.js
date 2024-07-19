const questionData = {
    questions: [
        {
            question: "What does CPU stand for?",
            answer: "Central Processing Unit"
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
            answer: "Count-controlled (e.g. for) loop and condition-controlled (e.g. while, do ... until) loop"
        },
        {
            question: "What is the primary function of an operating system?",
            answer: "To manage computer hardware and software resources and provide common services for computer programs."
        },
        {
            question: "Differentiate between a LAN and a WAN.",
            answer: "LAN (Local Area Network) is a network confined to a small geographic area, whereas WAN (Wide Area Network) covers a large geographic area."
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
            question: "Name technologies commonly used for web development.",
            answer: "HTML, CSS, JavaScript"
        },
        {
            question: "What is the difference between a procedure and a function?",
            answer: "A function returns a value whereas a procedure does not."
        },
        {
            question: "Explain the difference between HTTP and HTTPS.",
            answer: "HTTP (HyperText Transfer Protocol) is unsecured, while HTTPS (HyperText Transfer Protocol Secure) encrypts data to ensure secure communication over a computer network."
        },
        {
            question: "Define the term \"algorithmic efficiency.\"",
            answer: "The measure of how well an algorithm performs in terms of time and space requirements as the size of the input to the algorithm increases."
        },
        {
            question: "Is RAM volatile or non-volatile?",
            answer: "Volatile"
        },
        {
            question: "What is ROM?",
            answer: "Read Only Memory"
        },
        {
            question: "Is ROM volatile or non-volatile?",
            answer: "Non-volatile"
        },
        {
            question: "What does HDD stand for?",
            answer: "Hard Disk Drive"
        },
        {
            question: "What does SSD stand for?",
            answer: "Solid State Drive"
        },
        {
            question: "Name an example of an operating system.",
            answer: "Windows, macOS, Linux, iOS, Android"
        },
        {
            question: "What does GUI stand for?",
            answer: "Graphical User Interface"
        },
        {
            question: "What is a network?",
            answer: "A collection of connected computers"
        },
        {
            question: "What does LAN stand for?",
            answer: "Local Area Network"
        },
        {
            question: "What does WAN stand for?",
            answer: "Wide Area Network"
        },
        {
            question: "What is the Internet?",
            answer: "A global network of networks"
        },
        {
            question: "What does IP stand for in networking?",
            answer: "Internet Protocol"
        },
        {
            question: "What does DNS stand for?",
            answer: "Domain Name System"
        },
        {
            question: "What is the function of a router?",
            answer: "To direct data packets between networks"
        },
        {
            question: "What is an algorithm?",
            answer: "A step-by-step procedure for solving a problem"
        },
        {
            question: "What is a variable in programming?",
            answer: "A named location in memory whose value can change while the program is running."
        },
        {
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheets"
        },
        {
            question: "What does HTTP stand for?",
            answer: "HyperText Transfer Protocol"
        },
        {
            question: "What is encryption?",
            answer: "The process of encoding data to prevent unauthorized access"
        },
        {
            question: "What does SQL stand for?",
            answer: "Structured Query Language"
        },
        {
            question: "What is a primary key in a database?",
            answer: "A unique identifier for a record"
        },
        {
            question: "What is hardware?",
            answer: "The physical components of a computer"
        },
        {
            question: "What does URL stand for?",
            answer: "Uniform Resource Locator"
        },
        {
            question: "What are the three fundamental programming constructs?",
            answer: "Sequence, selection, and iteration"
        },
        {
            question: "What does IDE stand for?",
            answer: "Integrated Development Environment"
        },
        {
            question: "What is an array?",
            answer: "A collection of elements identified by index or key"
        },
        {
            question: "What is a boolean data type?",
            answer: "A data type with two possible values: true or false"
        },
        {
            question: "What is a compiler?",
            answer: "A program that translates source code into executable code"
        },
        {
            question: "What is pseudocode?",
            answer: "A simplified, informal language used to outline an algorithm"
        },
        {
            question: "What does ASCII stand for?",
            answer: "American Standard Code for Information Interchange"
        },
        {
            question: "What is the binary system?",
            answer: "A base-2 number system using 0 and 1"
        },
        {
            question: "What is a byte?",
            answer: "A unit of digital information, usually consisting of 8 bits"
        },
        {
            question: "What is a bit?",
            answer: "The smallest unit of data in a computer"
        },
        {
            question: "What is malware?",
            answer: "Malicious software designed to harm or exploit a computer"
        },
        {
            question: "What is a virus?",
            answer: "A type of malware that replicates itself and spreads to other computers"
        },
        {
            question: "What is phishing?",
            answer: "A fraudulent attempt to obtain sensitive information"
        },
        {
            question: "What is a Trojan horse in computing?",
            answer: "Malware disguised as legitimate software"
        },
        {
            question: "What does USB stand for?",
            answer: "Universal Serial Bus"
        },
        {
            question: "What is open source software?",
            answer: "Software with source code that anyone can inspect, modify, and enhance"
        },
        {
            question: "What is the purpose of an IP address?",
            answer: "To identify a device on a network"
        },
        {
            question: "What is latency in networking?",
            answer: "The delay before a transfer of data begins following an instruction"
        },
        {
            question: "What is an operating system kernel?",
            answer: "The core component of an OS managing system resources"
        },
        {
            question: "What is a command-line interface (CLI)?",
            answer: "A text-based user interface used to interact with software"
        },
        {
            question: "What is the main purpose of a file system?",
            answer: "To manage how data is stored and retrieved on a disk"
        },
        {
            question: "What is a logic gate?",
            answer: "A building block of digital circuits that performs a logical operation"
        },
        {
            question: "What does GPU stand for?",
            answer: "Graphics Processing Unit"
        },
        {
            question: "What is artificial intelligence (AI)?",
            answer: "Simulation of human intelligence in machines"
        },
        {
            question: "What is a flowchart?",
            answer: "A diagram that represents a process or algorithm"
        },
        {
            question: "What is a binary tree?",
            answer: "A data structure where each node has up to two children"
        },
        {
            question: "What is an API?",
            answer: "Application Programming Interface"
        },
        {
            question: "What is the purpose of a database index?",
            answer: "To speed up the retrieval of data"
        },
        {
            question: "What is the purpose of a flowchart?",
            answer: "To visually represent the steps of an algorithm or process"
        },
        {
            question: "What is a protocol?",
            answer: "A set of rules for data communication"
        },
        {
            question: "What is a data packet?",
            answer: "A unit of data transmitted over a network"
        },
        {
            question: "What is stored in RAM?",
            answer: "Instructions and data currently in use"
        },
        {
            question: "What are the main components of the CPU?",
            answer: "Cache, clock, ALU, registers, control unit"
        },
        {
            question: "What does ALU stand for?",
            answer: "Arithmetic logic unit"
        },
        {
            question: "What are the the names of the registers in the CPU?",
            answer: "Memory address register, Memory data register, accumulator, program counter"
        },
        {
            question: "What does the control unit do?",
            answer: "Fetches, decodes, and executes instructions; moves data around the CPU; transmits control signals to other components of the CPU"
        },
        {
            question: "What does the Arithmetic Logic Unit do?",
            answer: "Performs arithmetic and logic calculations"
        },
        {
            question: "What does cache do in the CPU?",
            answer: "Stores recently and frequently used instructions and data"
        },
        {
            question: "What does MDR stand for?",
            answer: "Memory Data Register"
        },
        {
            question: "What does the MDR store?",
            answer: "The contents of the address held in the MAR, or data which is about to be written to RAM"
        },
        {
            question: "What does MAR stand for?",
            answer: "Memory address register"
        },
        {
            question: "What does the MAR store?",
            answer: "The memory address from which data will be fetched, or the address to which data will be sent"
        },
        {
            question: "What does the Accumulator store?",
            answer: "Results of calculations performed by the Arithmetic Logic Unit"
        },
        {
            question: "What does the Arithmetic Logic Unit do?",
            answer: "Performs arithmetic and logic calculations"
        },
        {
            question: "What does the Arithmetic Logic Unit do?",
            answer: "Performs arithmetic and logic calculations"
        },

    ]
};