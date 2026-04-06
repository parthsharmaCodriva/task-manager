# task-manager
task manager using AI


The prompts that I have used for building the app

1) basic setup(thread one):-

I have been given a project as a task and I have to make a small backend in express. The data base is postgress hosted on supabase and I have the uri. Make a boilder plate code/ configuration code that I can use in my dbConfig.js file. I have installed express dotenv pg and where ever env has to be used write a comment so that I can use my env over there 

2)main task(some other text):-
   
   1.1)Provided the context:-
    
        okay so I have been give a task to make a small backend system using node and express for task management system that helps to manage daily tasks. The core functionalities are team members can create tasks, assign them to a teammate, set a priority(low,medium,high) and a due date, then mark them as done. the manager wants to see overdue taks and each member's pending task count.                  I am providing you the db schema users(id,name,email) tasks(id,title,assigned_to,priority,status,due_date,created_at) make the db schema with datatype for all the attributes and also dont use serial for id instead use uuid. Use enums for priority and status for tasks. I will update you with the further process

    1.2)Asked for business rule, API endpoints and User Stories:-

         okay so now you know what I am making and what the project is about:- task manager. I want you to help me write user stories,api end points and business rules


    1.2.1) Asked for edge cases and asked for the endpoints:-
              
              okay so can you please make the end points and consider missing cases here

                         ---------------while creating users the edge cases are-------
              *******missing cases that were handled were duplicate users, missing fields in create use api
              *******handling if the user id is wrong or does not exists
              *******handling 
                              
                        -------------while making tasks the edge cases are-------------
               ******create task api:-invalid assign to, past due date,missing title,invalid enum 
               ******get all tasks:- api/taks/quey params that would help to make one single end point instead    of            making 10 endpoints 
               ********get single tasks and if fails return 401 not found
               *********invalid assigned to 

               ----------------while fetching the tasks-------------------
                 *****************Invalid query params (wrong enum values) → 400
                 ***********************Invalid UUID format → 400
                 ****************************Task not found →400

                 -------while updating the tasks-------

                 *****Updating non-existent task → 404
                 ******Assigning to non-existent user → 400
                 *********Invalid enum values → 400
                ****************Empty update body → 400

                ---------TASK STATUS EDGE CASES---------------\
                ****Marking already done task as done again → either:return 200 (no-op) OR 400 (already completed)
                ******Invalid status transition (if restricted) → 400


                ----------------OVERDUE LOGIC EDGE CASES---------------------
               ********Overdue Only tasks where:status = 'pending' due_date < NOW() Completed tasks are NEVER overdue


    1.3)Gave prompt to add the entry into the data base:-okay so now make mock data for entry in my tables add 20 entries in both the tables provided the tables schema and consider that I am using uuid and uuid_generate_v4()
