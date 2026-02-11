Complete backend and frontend of complaint management system made with Vanilla JS, HTML and CSS.

Prereq: Node.js and express.js

Objective
To build a basic full-stack web application using HTML, CSS, JavaScript, Node.js, and Express.js without using any
database.
Problem Statement
Design and develop a web-based Online Complaint / Issue Tracker System where users can submit complaints and
an admin can manage them. Complaints must be stored using in-memory data structures.
Technology Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: Not allowed
Functional Requirements
User Module
• Submit complaint
• Auto-generated complaint ID
• Status set to pending
Admin Module
• View all complaints
• Update status (pending / resolved / rejected)
• Delete complaint
Mandatory API Routes
GET /complaints – Get all complaints
GET /complaints/:id – Get complaint by ID
POST /complaints – Add complaint
PUT /complaints/:id – Update complaint status
DELETE /complaints/:id – Delete complaint
Folder Structure
complaint-tracker/
server.js
package.json
public/
index.html
admin.html
style.css
script.js
Rules & Constraints
• No database allowed
• No frontend frameworks
• Only Vanilla JavaScript

Left to do: 
* ID notation doesn't auto-generate in postman. have to manually add in POST body. Can't find way to do cause the post api runs before I can create the custom ID generation.
* Have to fix complaint generation where if new complaint is generated without page refresh, same complaint is created twice and so on.
* Design of the UI is imperfect.
