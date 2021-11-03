const https = require('https');



function getRepos(username, done){
    const option = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: {
            'User-Agent': 'github-app'
        }
    }

    if(!username){
        return done(new Error('Потрібно вказати імя користувача'))
    }

    const req = https.get(option, res => {
        console.log(res.statusCode);
        if(res.statusCode === 200){
            res.setEncoding('utf-8');
            let body = '';
            res.on('data', data => body += data);
            res.on('end', () => {
                const result = JSON.parse(body);
                done(null, result);
            });
        } else {
            done(new Error(`Помилка при роботі з сервером ${res.statusCode} ${res.statusMessage}`))
        } 
    });
    req.on('error', (error) => done(new Error('Не вдалося відправити запит')));
}

module.exports = {getRepos}