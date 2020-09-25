
//pre-hashed password for whatup 
const hashedPassword = "$2a$15$KJYjWGENwpdazhjsv6ESSuRaFLm9qjBWzbqww1T/KIPbboGSbT.eK";


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'a.dunn406', password: hashedPassword},
        {username: 'jdoe123', password: hashedPassword},
        {username: 'emo.g0rl666', password: hashedPassword}
      ]);
    });
};
