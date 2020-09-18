
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'a.dunn406', password: 'supersecretpassword'},
        {username: 'jdoe123', password: 'passwordpassword'},
        {username: 'emo.g0rl666', password: 'mych3micalr0manc3'}
      ]);
    });
};
