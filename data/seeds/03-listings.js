
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
<<<<<<< HEAD
        {listingsId: 1, userId:"", listingsName:"", description:"", location:"", city:"", state:"", zipCode:"", upVotes: 1 },
        {listingsId: 2, userId:"", listingsName:"", description:"", location:"", city:"", state:"", zipCode:"", upVotes: 1},
        {listingsId: 3, userId:"", listingsName:"", description:"", location:"", city:"", state:"",zipCode:"", upVotes: 1},
        {listingsId: 4, userId:"", listingsName:"", description:"", location:"", city:"", state:"",zipCode:"", upVotes: 1}
=======
        {listingsId: 1, userId:"1", listingsName:"obstructed view", description:"overgrown hedges exiting store parking lot", location:"224 Main Street", city:"Sarasota", state:"PA", zipCode:"56759", upVotes: 2 },
        {listingsId: 2, userId:"1", listingsName:"pothole", description:"large deep pothole ", location:"intersection of Smith Street and Main Street", city:"Sarasota", state:"PA", zipCode:"56759", upVotes: 1},
        {listingsId: 3, userId:"2", listingsName:"injured deer", description:"deer with a broken leg", location:"near the highway", city:"Billings", state:"MT",zipCode:"55555", upVotes: 1},
        {listingsId: 4, userId:"3", listingsName:"tree in road", description:"tree in the road on 4th street", location:"4th Street", city:"Billings", state:"MT",zipCode:"77777", upVotes: 1}
>>>>>>> 9921383967acfe2b9fb2bb2ba3b7e2c24ceba7dc
      ]);
    });
};