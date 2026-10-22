// =====================================================================
//  SF APEX DEVELOPER ASSESSMENT — Question Bank
//  Fixed 45 questions: 20 Scenario + 20 MCQ + 5 Live Coding
//  Topics: Apex Core + Apex Triggers
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════

  
  {
    id: 1,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Data Types and Variables",
    scenario: "A company needs to store an employee's name, age, salary, and joining date in an Apex program.",
    question: "Which Apex data types would you use for each value, and how would you declare and initialize these variables?",
    placeholder: "Enter your answer..."
  },
  {
    id: 2,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Assignment Operators",
    scenario: "An application stores an employee's monthly salary in a variable. The employee receives a salary increase of 5000.",
    question: "How would you update the salary variable using assignment operators, and how would you calculate the final salary?",
    placeholder: "Enter your answer..."
  },
  {
    id: 3,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Type Casting",
    scenario: "A user enters an Account's annual revenue as a String, but the application needs to perform numerical calculations on it.",
    question: "How would you convert the String value into a suitable numeric data type in Apex? What would you do if the input were invalid?",
    placeholder: "Enter your answer..."
  },
  {
    id: 4,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Conditional Statements",
    scenario: "A company assigns a discount based on an order amount: 20% for amounts above 10000, 10% for amounts between 5000 and 10000, and 5% for amounts below 5000.",
    question: "How would you implement this discount calculation using if, else if, and else statements?",
    placeholder: "Enter your answer..."
  },
  {
    id: 5,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Switch Statement",
    scenario: "A support application assigns priorities based on a Case category: Technical, Billing, General, or Other.",
    question: "How would you use a switch statement in Apex to assign a different priority to each category, including a default case?",
    placeholder: "Enter your answer..."
  },
  {
    id: 6,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — For Loop",
    scenario: "An application stores five product prices in a List of Decimal values and needs to calculate their total.",
    question: "How would you iterate through the list using a for loop and calculate the total price?",
    placeholder: "Enter your answer..."
  },
  {
    id: 7,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — While Loop",
    scenario: "A program needs to print the numbers from 1 to 10 using a while loop.",
    question: "How would you implement this logic in Apex, and how would you ensure that the loop terminates correctly?",
    placeholder: "Enter your answer..."
  },
  {
    id: 8,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — sObjects",
    scenario: "A company wants to create an Account record with the name, industry, and rating populated before saving it to Salesforce.",
    question: "How would you create and populate an Account sObject in Apex, and how would you save it to the database?",
    placeholder: "Enter your answer..."
  },
  {
    id: 9,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Standard and Custom sObjects",
    scenario: "A college application uses the standard Account object and a custom College__c object to store different types of records.",
    question: "How would you declare variables for both objects in Apex, and how can you distinguish standard sObjects from custom sObjects?",
    placeholder: "Enter your answer..."
  },
  {
    id: 10,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — SOQL Queries",
    scenario: "A sales manager wants to retrieve all Accounts whose Industry is Banking and display their names and ratings.",
    question: "Write a SOQL query to retrieve the required Account records and explain how you would store the query results in Apex.",
    placeholder: "Enter your answer..."
  },
  {
    id: 11,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — SOQL Loops",
    scenario: "A company has thousands of Account records that need to be processed one by one without loading all query results into a separate list first.",
    question: "How would you use a SOQL for loop to process these Account records efficiently?",
    placeholder: "Enter your answer..."
  },
  {
    id: 12,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Relationship Queries",
    scenario: "A sales manager wants to retrieve each Account along with its related Contacts.",
    question: "How would you write a parent-to-child SOQL relationship query and iterate through the related Contacts in Apex?",
    placeholder: "Enter your answer..."
  },
  {
    id: 13,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — SOSL",
    scenario: "A support agent knows only part of a customer's name and wants to search across both Account and Contact records.",
    question: "How would you use SOSL to search for the customer's name across both objects and process the returned records?",
    placeholder: "Enter your answer..."
  },
  {
    id: 14,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — DML Operations",
    scenario: "A company needs to create three Account records and update two existing Contact records from an Apex program.",
    question: "Which DML statements would you use to insert the Accounts and update the Contacts? Explain how you would perform these operations in Apex.",
    placeholder: "Enter your answer..."
  },
  {
    id: 15,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Bulkification",
    scenario: "An Apex method receives a list of 200 Account records, but the current implementation executes a SOQL query and an insert statement inside a loop.",
    question: "How would you refactor the method to avoid SOQL queries and DML statements inside loops and process all records efficiently?",
    placeholder: "Enter your answer..."
  },
  {
    id: 16,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Debugging and Logging",
    scenario: "An Apex method calculates the total revenue of Accounts, but the output is incorrect and the developer cannot identify the issue.",
    question: "How would you use System.debug() and Salesforce debug logs to inspect variable values and identify the problem?",
    placeholder: "Enter your answer..."
  },
  {
    id: 17,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Exception Handling",
    scenario: "An Apex program attempts to convert a user-entered String into an Integer, but the input sometimes contains non-numeric characters.",
    question: "How would you handle the conversion error using try-catch blocks and prevent the program from failing unexpectedly?",
    placeholder: "Enter your answer..."
  },
  {
    id: 18,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — DML Exceptions",
    scenario: "An Apex program attempts to insert an Account without a required field, causing a DML exception.",
    question: "How would you handle the DML exception, log useful error information, and provide an appropriate response to the caller?",
    placeholder: "Enter your answer..."
  },
  {
    id: 19,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Collections and Iterations",
    scenario: "A company retrieves Account records and wants to count how many belong to the Banking industry and how many belong to the Education industry.",
    question: "How would you iterate through the Account records and use conditional statements and variables to calculate both counts?",
    placeholder: "Enter your answer..."
  },
  {
    id: 20,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex — Combined SOQL, DML, and Exception Handling",
    scenario: "A company retrieves Accounts with no related Contacts and creates a default Contact for each Account. Some Account records may fail during processing.",
    question: "How would you query the required Accounts, prepare Contact records, insert them in bulk, and handle DML failures appropriately?",
    placeholder: "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════
  {
    id: 21,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Data Types",
    scenario: "A developer needs to store an Account's annual revenue, which can contain decimal values.",
    question: "Which Apex data type is most appropriate for storing the annual revenue?",
    options: [
      "Integer",
      "Boolean",
      "Decimal",
      "Date"
    ],
    answer: 2
  },
  {
    id: 22,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Variables and Assignment",
    scenario: "A developer declares Integer count = 10 and then executes count += 5.",
    question: "What is the value of count after the assignment?",
    options: [
      "5",
      "10",
      "15",
      "105"
    ],
    answer: 2
  },
  {
    id: 23,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Type Casting",
    scenario: "A developer has a String variable containing the value '250' and needs to convert it to an Integer.",
    question: "Which Apex expression performs this conversion?",
    options: [
      "Integer.valueOf('250')",
      "String.valueOf(250)",
      "Boolean.valueOf('250')",
      "Date.valueOf('250')"
    ],
    answer: 0
  },
  {
    id: 24,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Conditional Statements",
    scenario: "A developer must execute a block of code only when an Account's annual revenue is greater than 100000.",
    question: "Which statement is appropriate for this requirement?",
    options: [
      "for",
      "if",
      "while",
      "try"
    ],
    answer: 1
  },
  {
    id: 25,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Switch Statement",
    scenario: "A developer needs to execute different code blocks based on a Case Status value.",
    question: "Which Apex statement is designed to handle multiple matching values of an expression?",
    options: [
      "switch",
      "while",
      "insert",
      "catch"
    ],
    answer: 0
  },
  {
    id: 26,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — For Loop",
    scenario: "A developer needs to process every Account in a List<Account> collection.",
    question: "Which loop is suitable for iterating directly over the collection?",
    options: [
      "if loop",
      "try loop",
      "for (Account acc : accounts)",
      "switch loop"
    ],
    answer: 2
  },
  {
    id: 27,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — While Loop",
    scenario: "A developer needs to repeat a block of code while a counter is less than 5.",
    question: "Which statement should be used?",
    options: [
      "while (counter < 5)",
      "insert (counter < 5)",
      "catch (counter < 5)",
      "switch (counter < 5)"
    ],
    answer: 0
  },
  {
    id: 28,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — sObjects",
    scenario: "A developer needs to create an Account record in memory before inserting it.",
    question: "Which statement correctly creates an Account sObject?",
    options: [
      "Account acc = new Account();",
      "Account acc = Account.create();",
      "sObject acc = new String();",
      "Account acc = insert Account();"
    ],
    answer: 0
  },
  {
    id: 29,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Custom sObjects",
    scenario: "A Salesforce org contains a custom object named College__c.",
    question: "Which declaration correctly creates an instance of this custom sObject?",
    options: [
      "College college = new College();",
      "College__c college = new College__c();",
      "CustomObject college = new College();",
      "sObject college = new College__c;"
    ],
    answer: 1
  },
  {
    id: 30,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — SOQL",
    scenario: "A developer needs to retrieve the Name and Industry fields from all Account records.",
    question: "Which SOQL query is correct?",
    options: [
      "SELECT Name, Industry FROM Account",
      "GET Name, Industry FROM Account",
      "SELECT Account FROM Name, Industry",
      "FIND Name, Industry IN Account"
    ],
    answer: 0
  },
  {
    id: 31,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — SOQL Loops",
    scenario: "A developer needs to process query results using a SOQL for loop.",
    question: "Which syntax correctly iterates through Account records returned by SOQL?",
    options: [
      "for (Account acc : [SELECT Id, Name FROM Account])",
      "while (Account acc : SELECT Id FROM Account)",
      "loop Account acc = SOQL(Account)",
      "foreach SOQL Account"
    ],
    answer: 0
  },
  {
    id: 32,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — SOQL Filtering",
    scenario: "A developer needs to retrieve only Account records whose Industry is Banking.",
    question: "Which SOQL clause should be used to filter the records?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "LIMIT"
    ],
    answer: 2
  },
  {
    id: 33,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — SOSL",
    scenario: "A support agent wants to search for a keyword across multiple objects, including Account and Contact.",
    question: "Which Salesforce query language is best suited for this requirement?",
    options: [
      "SOQL",
      "SOSL",
      "DML",
      "SOQL for loop"
    ],
    answer: 1
  },
  {
    id: 34,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — DML Insert",
    scenario: "A developer has created a new Account sObject and needs to save it to Salesforce.",
    question: "Which DML statement should be used?",
    options: [
      "SELECT acc",
      "UPDATE acc",
      "INSERT acc",
      "DELETE acc"
    ],
    answer: 2
  },
  {
    id: 35,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — DML Update",
    scenario: "A developer retrieves an existing Account and changes its Rating field.",
    question: "Which DML operation saves the changes to the existing record?",
    options: [
      "insert",
      "update",
      "undelete",
      "find"
    ],
    answer: 1
  },
  {
    id: 36,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Bulkification",
    scenario: "A trigger receives 200 Account records and needs to create one related Contact for each Account.",
    question: "Which approach follows Apex bulkification best practices?",
    options: [
      "Insert each Contact inside the loop",
      "Execute one insert statement for each Account",
      "Prepare a list of Contacts and insert the list once",
      "Run a separate SOQL query for every Account"
    ],
    answer: 2
  },
  {
    id: 37,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Governor Limits",
    scenario: "A developer executes a SOQL query inside a loop that processes many records.",
    question: "What is the main risk of this implementation?",
    options: [
      "The records automatically become read-only",
      "The transaction may exceed the SOQL governor limit",
      "The query becomes a SOSL query",
      "The loop automatically stops after one record"
    ],
    answer: 1
  },
  {
    id: 38,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Debugging",
    scenario: "A developer wants to print the value of an Integer variable named total in the debug log.",
    question: "Which statement should be used?",
    options: [
      "System.debug(total);",
      "System.print(total);",
      "Console.log(total);",
      "Debug.write(total);"
    ],
    answer: 0
  },
  {
    id: 39,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Exception Handling",
    scenario: "An Apex operation may throw an exception that the developer wants to catch and handle.",
    question: "Which structure is used to handle the exception?",
    options: [
      "if-else",
      "for-while",
      "try-catch",
      "switch-case"
    ],
    answer: 2
  },
  {
    id: 40,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex — Database Methods",
    scenario: "A developer needs to insert multiple Account records and collect individual success or failure results without allowing one failed record to roll back all successful records.",
    question: "Which approach is most appropriate?",
    options: [
      "insert accounts;",
      "Database.insert(accounts, false);",
      "Database.query(accounts);",
      "System.debug(accounts);"
    ],
    answer: 1
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 3 — LIVE CODING — TRIGGERS  (Q41 – Q45)
  // ══════════════════════════════════════════════════════════════

  {
    id: 41,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — Variables and Conditional Statements",
    language: "Apex",
    file: "EmployeeSalaryCalculator.cls",
    scenario: "A company wants to calculate an employee's salary bonus based on performance.",
    question: "Write an Apex class with a method that accepts an employee's salary and performance rating. Award a 20% bonus for ratings of 5, a 10% bonus for ratings of 4, and a 5% bonus for ratings of 3. Return the final salary using appropriate variables and conditional statements.",
    placeholder: "",
    hint: "Use Decimal variables and if-else statements. Validate the rating before calculating the bonus."
  },
  {
    id: 42,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex Basics — Iterations and Collections",
    language: "Apex",
    file: "AccountIndustryCounter.cls",
    scenario: "A company needs to count Account records by industry from a collection of Account sObjects.",
    question: "Write an Apex class with a method that accepts a List<Account>, iterates through the list, and returns a Map<String, Integer> containing the count of Accounts for each Industry. Handle records whose Industry field is null.",
    placeholder: "",
    hint: "Use a for loop and Map<String, Integer>. Check whether the map already contains the industry key before incrementing its count."
  },
  {
    id: 43,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex — SOQL and Relationship Queries",
    language: "Apex",
    file: "AccountContactRetriever.cls",
    scenario: "A sales manager wants to retrieve Accounts along with their related Contacts.",
    question: "Write an Apex class with a method that accepts a list of Account IDs and returns the Account records with their related Contact IDs, names, and email addresses using a single parent-to-child SOQL query. Handle an empty or null input list.",
    placeholder: "",
    hint: "Use the Contacts child relationship in the SELECT clause and a WHERE Id IN clause. Avoid querying inside loops."
  },
  {
    id: 44,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex — SOSL Search",
    language: "Apex",
    file: "CustomerSearch.cls",
    scenario: "A support team needs to find customers using a keyword that may appear in Account or Contact names.",
    question: "Write an Apex class with a method that accepts a search keyword and uses SOSL to search Account and Contact records. Return the matching Account and Contact records in a Map<String, List<SObject>> with separate entries for each object type. Handle a blank search keyword.",
    placeholder: "",
    hint: "Use FIND with a wildcard search term and RETURNING Account and Contact. SOSL returns a list of result lists in the order of the RETURNING objects."
  },
  {
    id: 45,
    part: "Part 3 — Live Coding",
    type: "coding",
    category: "Apex — Bulk DML and Exception Handling",
    language: "Apex",
    file: "BulkAccountCreator.cls",
    scenario: "A company needs to create multiple Accounts from user-provided names, even when some records fail validation.",
    question: "Write an Apex class with a method that accepts a List<String> of Account names, creates Account records for valid nonblank names, and inserts them using Database.insert with allOrNone set to false. Return a Map<String, Object> containing the successful record count and the error messages for failed records.",
    placeholder: "",
    hint: "Prepare all Account records before DML. Use Database.SaveResult to inspect each outcome and collect errors with getErrors()."
  }
];
