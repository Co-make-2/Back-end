# Back-end
/****************************************************************************************************************************/
register

post to   https://comake-app.herokuapp.com/api/register
expects a username and a password

/***************************************************************************************************************************/

login

post to  https://comake-app.herokuapp.com/api/login
expects a username and a password upon successful login a json token will be sent to the front end in both the headers and a seperate token in the body. 

/**************************************************************************************************************************/

Listings endpoints

get all listings endpoint

get to https://comake-app.herokuapp.com/api/listings 
expects a log in token and returns an array of all listings 

add a listing

post to  https://comake-app.herokuapp.com/api/listings
as of now you'll be getting the entire object but the listingsId is set when it's sent to the backend and the userId and username should be set automatically on the frontend as you have to be a registered user to make a listing the listingsName, description, location, city, state, zipCode should be filled in the upvote will be taken care of later whenever you want the users to vote.


get listings by userId 

get to  https://comake-app.herokuapp.com/api/listings/users/:id
returns an array of all user created listings if the user has not created any listings and error 401 is sent with a message saying the user has not created any listings.

get listings by city 

post to  https://comake-app.herokuapp.com/api/listings/city
expects "city":"name"   object and will return all listings for that city if no listings found for that city error 401 returned and a message saying there are no listings for that area currently.

get listings by zipcode

post to https://comake-app.herokuapp.com/api/listings/zipcode
expects "zipCode":"whateverthezipcodeis"   object and will return all listings for that zipcode if no listings found for that zipcode error 401 returned with a message there are no listings for that area currently.

edit listing

put to   https://comake-app.herokuapp.com/api/listings/:id
listingsName, description, location, city, state, zipCode can be changed if edit is successful a message saying Listing edited successfully is returned. 

delete listing

delete to   https://comake-app.herokuapp.com/api/listings/:id
listing with the specified id is deleted upon successful completion a message is returned saying Listing deleted successfully.

increment or decrement on vote 

put to   https://comake-app.herokuapp.com/api/listings/:id/upvote
expects   "upVote":1  or "upVote":-1  mvp is up vote so if you don't want to do a down vote you don't have to but the option is there upon success a message is returned saying Vote recorded.