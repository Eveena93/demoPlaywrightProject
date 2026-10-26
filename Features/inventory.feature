Feature:Inventory page validation
Scenario:Validating items count for different users



Given The user is on application login page
When The user enters username "<usernameval>" and password "<passwordval>"
Then The user should see "<result>"
And Inventory item count should be "<itemcount>"



Examples:
|usernameval       |passwordval    |result          |itemcount|
|standard_user     |secret_sauce   |Inventory page  |6        |
|locked_out_user   |secret_sauce   |Error message   |0        |
|problem_user      |secret_sauce   |Inventory page  |6        |