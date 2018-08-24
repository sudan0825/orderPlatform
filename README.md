More functions are adding on...

This project is a transaction platform built for small business daily operation. It provides following functions: SignUp/SignIn, files storage, items' information storage, router links' protection, stocks' state management in database, information manangement before permernent stored, stocks' information sync up etc. 

I use beer shop as an example. To name a few operations: Business owner can upload new items in inventory management page. The inventory list will be displayed under the 'Add New Production' form. Business owner can check/delete/add/ modify production information. Items informations are retrieved from database/storage through Restful API and displayed in Menu tab. Small business owner can make an order there. If there is no a specific beer in stock, the plus button for that beer will be disabled. The daily transaction/all trasaction are checkable in orders page. 

Technical stack: React/Redux, JavaScript, HTML, CSS, Firebase, Restful API, Axios...
Live show here: https://orderplatform2018.firebaseapp.com/

To run project on local machine, please:

1. Create a folder and run git init in the folder
2. run git pull https://github.com/sudan0825/orderPlatform.git
3. run npm install 
5. run npm start

Then the project is ready for you to use.