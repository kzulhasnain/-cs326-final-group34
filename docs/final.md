# Team 34

## On-campus Shift Cover Website: Ucover

## Semester: Spring 2022

## Overview:
A website built by Umass students to make Job Posting and Shift Coverage convenient. We welcome partnerships with schools and companies to make the exchange of information easier. This website allows you to post jobs and shift covers. Users need to sign up and login in order post. Users can also delete their own posts, and logout as well. The app is deployed on heroku. All the information is saved in the heroku database. Heroku link: https://umassjobpostgrp34.herokuapp.com/

## Team Members:  
Kazi Sadman Zul Hasnain&ensp;&ensp;&ensp;&ensp;&ensp;github profile: kzulhasnain  
Kazi Zeedan Jul Kawnain&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;github profile: kjulkawnain  
Baitong Zhao  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&nbsp;&nbsp;	 github profile: Zeddie123	  
Runyu Xi&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;github profile: bloguser

## User Interface:

=======

Screenshot 1: user login page

It is the log-in page for users who has already created an  account can insert the email and password set up in the register page. After filling out the requested information, click "Sign in". System will navigate to the main page.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/signin.png)


Screenshot 2: user register page

This is the register page where users can sign up with new name, email, and password.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/signup%20detail.png)

Screenshot 3: user login failed page

It is the interface of the login page, where users will received a failed notification if they are not already registered.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/sign%20up%20failed.png)

Screenshot 4: website home page

In the home page we can see the job posts displaying the Job title, Owner of the post, and Job description. We can also see the Add post button used to add new posts.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/mainpage.png)

Screenshot 5: add post button

This is the create-post page where users input there Job title and description.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/addpost.png)

Screenshot 6: delete post button

This is the delete-post button where users delete their Job post. User cannot delete a post which is posted by others.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/delete.png)

Screenshot 7: about website & logout

Navbar in the home page that displays website description and logout button.
![alt text](https://github.com/kzulhasnain/cs326-final-group34/blob/main/docs/screenshots3/website%20about.png)

## APIs:
GET endpoints:

  &ensp;&ensp;'/login'    ```renders login in page```
  
 &ensp;&ensp;'/register'   ```renders sign up page```
  
&ensp;&ensp;'/create-post'    ```renders a form that allows user to input job details for new post```
  
  &ensp;&ensp;'/'   ```checks browser cookies and redirects to home page if user already logged in, returns to login page otherwise```
  
 POST endpoints:
 
  &ensp;&ensp;'/login'    ```checks database to see if email and password is valid or not. Redirects to home page if valid.```
  
  &ensp;&ensp;'/register'   ```checks if user already exists or not. If not, then new user is created and added to database```
  
  &ensp;&ensp;'/logout'   ```clears cookie, logs user out, and redirects to login page```
 
  &ensp;&ensp;'/create-post'    ```takes job title and description and adds to database under the logged in user```
  
  &ensp;&ensp;'/delete'   ```deletes post if and only if post is created by the logged in user```

## Database:
ClearDB mySQL database is used from heroku add ons to save user and post data into 2 tables inside the database.

TABLE `posts` {
  `id` type: int (serial of user),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`title` type: varchar (saves job title),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`body` type: text (saves job description),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`user_id` type: int (saves id of the user),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`is_assigned` type: int (saves assigned user id),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`assigned_to` type: varchar (usually NULL),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`created_at` type: datetime (used to update post timestamp),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`updated_at` type: datetime (used to update post timestamp)
}

TABLE `users` {
  `id` type: int (serial of user),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`name` type: varchar (saves username),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`email` type: varchar (saves user email),
  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`password` type: varchar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci (saves hashed passwords)
}

## URL Routes/Mappings:
Home page --> Login page if user not already logged in (no cookie found)

Login page --> Register page using "register new account" link

Register page --> Login page using "already registered" link

Login page --> Home page if credentials are correct       

Home page --> Create post page using "add new post" button

Create post page --> Home page using "back button" on top left

Create post page --> Home page using using "create post" button with successful post creation

Home page --> Home page with "delete button" which removes a post that being deleted by user

Home page --> Login page using logout button on top navbar (clears cookie)




## Authentication/Authorization:
While loggin in, the input email and password are cross checked with database. If email does not exist, invalid email error pops up. If email is valid but password is wrong, then invalid password error pops up. While registering if user name and email already exist in database, user already exist error pops up. All of these are checked manually using functions created in database.js. Passwords are hashed before saving into database using bcrypt.

## Division of Labor:
Kazi Sadman Zul Hasnain&ensp;&ensp;&ensp;&ensp;&ensp;back-end  
Kazi Zeedan Jul Kawnain&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;back-end  
Baitong Zhao  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&nbsp;&nbsp; front-end   
Runyu Xi&nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;front-end

## Conclusion:

We created this shift coverage website through the learning and practical application of cs326. We learned about front-end and back-end in the course, including how to write html, css, javascript. We also learned how to link the front-end web page and the back-end server together with the creation, connection, and management of database. We found that the most difficult part was to make the various components connected. For example, connecting web page inputs to the app and app to the database. We also found it difficult to communicate at work with everyone busy with their own schedules. It is hard to imagine how large companies assign work to programmers in a project. We hope that future courses will teach more efficient teamwork (including techniques for physical meetings and WFH). Overall we had fun building this website and we are hopeful that this website will become very useful for students and staffs who find it difficult to connect and communicate about job positngs.



## Grading rubric:

out of 100

    login - 15 pts (displayed when you first visit website)

    register - 15 pts (displayed when you first visit website, belowed the signin button, click to view create account)

    logout - 10 pts (logout inside the navbar. inside the top of left button)

    make a post - 15 pts (add post button, locate on the top part of webpage, blue, Add New Post button)

    delete a post - 15 pts (once you create a post you can delete it)

    Heroku deployment - 15 pts (https://umassjobpostgrp34.herokuapp.com/)

    final video - 15 pts (see youtube playlist "team 34 ucover")
