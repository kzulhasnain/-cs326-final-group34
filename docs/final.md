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

## APIs:
GET endpoints:
  '/login'    renders login in page
  '/register'   renders sign up page
  '/create-post'    renders a form that allows user to input job details for new post
  '/'   checks browser cookies and redirects to home page if user already logged in, returns to login page otherwise
  
 POST endpoints:
  '/login'    checks database to see if email and password is valid or not. Redirects to home page if valid.
  '/register'   checks if user already exists or not. If not, then new user is created and added to database
  '/logout'   clears cookie, logs user out, and redirects to login page
  '/create-post'    takes job title and description and adds to database under the logged in user
  '/delete'   deletes post if and only if post is created by the logged in user

## Database:

## URL Routes/Mappings:

## Authentication/Authorization:

## Division of Labor:
Kazi Sadman Zul Hasnain&ensp;&ensp;&ensp;&ensp;&ensp;back-end  
Kazi Zeedan Jul Kawnain&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;back-end  
Baitong Zhao  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&nbsp;&nbsp; front-end   
Runyu Xi&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;front-end

## Conclusion:
