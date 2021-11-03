const github = require('./github');
require('colors');

const username = process.argv[2];

github.getRepos(username, (err, repos) => {
    if(err) {
        console.log(err.message)
    } else {
        repos.forEach(repo => console.log(repo.name.rainbow));
    }
})