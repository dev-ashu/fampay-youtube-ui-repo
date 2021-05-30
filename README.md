Youtube Video Dashboard

This is a simple dashboard application.
It will fetch video details by calling REST api and it will display it in UI.
I have used jquery DataTable for displaying details in Paginated and Sorted format.

Jquery DataTable has good documentation and forum.
Refer below link for Jquery DataTable
https://datatables.net/


Note - Please deploy server side first before this application

To install this application on docker use below commands
1. Go to the project root directory and run below commands
    npm install

    ng build --prod

    docker build -t fampay-ui .

2. To run fampay-ui use below command

    docker run --net fampay-net --name fampay-ui -d -p 8081:80 fampay-ui