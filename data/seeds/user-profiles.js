
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {userId: 1, username: 'a.dunn406', name: 'Albert Dunn', location: 'Sarasota, PA', skills: 'Animal control, Pest control', listings: ''},
        {userId: 2, username: 'jdoe123', name: 'Jennifer Doenhauer', location: 'Billings, MT', skills: 'Carpentry, Tree Removal, Operating large machnery', listings: ''},
        {userId: 3, username: 'emo.g0rl666', name: 'Stacey Ahbrams', location: 'Billings, MT', skills: 'Skinning deer, Looking sad, Yelling at my step-dad Steve', listings: ''}
      ]);
    });
};
