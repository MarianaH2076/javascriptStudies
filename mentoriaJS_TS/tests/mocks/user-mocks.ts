const { faker } = require ("@faker-js/faker");

module.exports = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    id: faker.datatype.uuid()
}