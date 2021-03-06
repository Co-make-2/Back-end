
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user-profiles')
    .then(function () {
      // Inserts seed entries
      return knex('user-profiles').insert([
        {userId: 1, username: 'a.dunn406', name: 'Albert Dunn', city: 'Sarasota', state: 'PA', zipCode: '56759', skills: 'Animal control, Pest control'},
        {userId: 2, username: 'jdoe123', name: 'Jennifer Doenhauer', city: 'Billings', state: 'MT', zipCode: '59801', skills: 'Carpentry, Tree Removal, Operating large machnery'},
        {userId: 3, username: 'emo.g0rl666', name: 'Stacey Ahbrams', city: 'Billings', state: 'MT', zipCode: '59801', skills: 'Skinning deer, Looking sad, Yelling at my step-dad Steve'}
      ]);
    });
};
