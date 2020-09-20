
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {listingsId: 1, userId:"1", username:"a.dunn406", listingsName:"obstructed view", description:"overgrown hedges exiting store parking lot", location:"224 Main Street", city:"Sarasota", state:"PA", zipCode:"56759", upVotes: 2 },
        {listingsId: 2, userId:"1", username:"a.dunn406", listingsName:"pothole", description:"large deep pothole ", location:"intersection of Smith Street and Main Street", city:"Sarasota", state:"PA", zipCode:"56759", upVotes: 1},
        {listingsId: 3, userId:"2", username:"jdoe123", listingsName:"injured deer", description:"deer with a broken leg", location:"near the highway", city:"Billings", state:"MT",zipCode:"55555", upVotes: 1},
        {listingsId: 4, userId:"3", username:"emo.g0rl666", listingsName:"tree in road", description:"tree in the road on 4th street", location:"4th Street", city:"Billings", state:"MT",zipCode:"77777", upVotes: 1}
      ]);
    });
};
