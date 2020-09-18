
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {listingsId: 1, userId:"", listingsName:"", description:"", location:"", city:"", state:"", zipCode:"", upVotes: 1 },
        {listingsId: 2, userId:"", listingsName:"", description:"", location:"", city:"", state:"", zipCode:"", upVotes: 1},
        {listingsId: 3, userId:"", listingsName:"", description:"", location:"", city:"", state:"",zipCode:"", upVotes: 1},
        {listingsId: 4, userId:"", listingsName:"", description:"", location:"", city:"", state:"",zipCode:"", upVotes: 1}
      ]);
    });
};
