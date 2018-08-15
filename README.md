More functions are adding on...

This project is a transaction platform built for small business daily operation. It provides following functions: Upload new productions, manage productions in stock, check daily orders/all orders, transaction interface, productions state sync between inventory & transaction tab, router protection...

I use beer shop as an example. Business owner can upload new items in inventory management page. The inventory list will be displayed under the 'Add New Production' form. Business owner can check/delete/add/ modify production information. The menu tab displays items that instock. Small business owner can make an order there. Bussines owner can sell beers  only if there is any stock. The daily transaction/all trasaction are checkable in orders page. The inventory state is managed by Redux.

Data are stored in the Firebase database; Image files are stored in Firebase Storage. Autherization with email/password. The whole project is hosted on Firebase. Live show here: https://orderplatform2018.firebaseapp.com/

To run project on local machine, please:

1. Create a folder and run git init in the folder
2. run git pull https://github.com/sudan0825/orderPlatform.git
3. run npm install 
5. run npm start

Then the project is ready for you to use.