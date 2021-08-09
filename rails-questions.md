# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
SQL is a domain specific language used for dealing with relational databases

2. What the PostgreSQL query that would return all the content in a particular table?
 SELECT *
 from table

3. What is the command to create a new Rails application with a PostgreSQL database?
$ rails new app_name -d postgresql

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
$ rails g new model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
a migration is a way to update your schema you can use them to add, remove, update columns within your table.

6. What is the command to generate a migration file?
$ rails g migration name_of_change

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
model name convention is PascalCasw, the name convention for tables that are generated is snake_case

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
The schema file in your rails app is a current representation of the contents of your app from the latest ran migration we cannot update the schema directly because rails does this for you and is very particular with how this data is supposed to be input.

9. What is the Rails console?
The Rails consel is a command line program for interacting with your rails application.

10. What is the Rails console command to see all the content in a particular table?
$ Table.all