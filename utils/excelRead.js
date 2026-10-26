import XLSX from 'xlsx'
export function readExcelFile(row,column) {
    const workbook = XLSX.readFile('utils/testData.xlsx') //give the path of excel file
    const sheet = workbook.Sheets['Data'] //mention the sheet name
    const cellAddress = XLSX.utils.encode_cell({ r: row-1, c: column-1 }) //mention row and column
    const cell = sheet[cellAddress] // get the cell object from the sheet using the cell address
    return cell ? cell.v : undefined //return the value of the cell if it exists, otherwise return null
    
}

//BDD : Behavior driven development : define test scenarios in simple english language
//both technical and non technical people will understand
//we use gherkin format to write the test scenarios
//we use cucumber framework to implement BDD in automation testing
//install cucumber framework : npm install @cucumber/cucumber
//feature file : .feature extension : contains test scenarios in gherkin format
//step definition file : .js extension : contains the implementation of the test scenarios defined in feature file
//bdd keywords : feature , scenario,Given, When, Then, And, But
//feature keyword : defines the feature of the application under test, functionality being tested
//scenario keyword : defines the test scenario, test case
//given keyword : defines the precondition, initial state of the application
//when keyword : defines the action, event that triggers the test scenario
//then keyword : defines the expected outcome, result of the test scenario
//and keyword : defines additional steps, actions or conditions that are part of the test scenario
//but keyword : defines alternative steps, actions or conditions that are part of the test scenario
//allure report : generate test execution report in html format, provides detailed information about the test execution, including test results, logs, screenshots, and other relevant data
//allure playwright and commandline : npm install allure-playwright allure-commandline --save-dev
