const prompt = require('prompt')

const CreateUser = require('./services/create-user.js')

function main() {
    prompt.get(['nome', 'peso', 'altura'], (err, result) => {
        console.log(result)

        CreateUser.create()
    })

}

main()