Feature:Login functionality
@validLogin
Scenario:Successful login


Given The user is on the login page
When The user enters valid username and valid password
And The user clicks the login button
Then The user should navigate to the inventory page

#install cucumber gherkin full support for the color change in the feature file

Scenario:Unsuccessful login


Given The user is on the login page
When The user enters invalid username and invalid password
And The user clicks the login button
Then An error message should be displayed


