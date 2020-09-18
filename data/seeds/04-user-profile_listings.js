
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user-profile_listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('user-profile_listings').insert([
        {userId:"1", listingsId:"1"},
        {userId:"1", listingsId:"2"},
        {userId:"2", listingsId:"3"},
        {userId:"3", listingsId:"4"}
      ]);
    });
};
