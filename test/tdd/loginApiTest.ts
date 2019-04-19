var request = require("request");

describe('Login API Test', function() {
    // Function
    it('Login API Test should pass with correct credential', async function() {
        var options = { method: 'POST',
        url: 'http://localhost:3000/login',
        headers: 
        { 'cache-control': 'no-cache',
            'Content-Type': 'application/json' },
        body: { email: 'dmhuy@tma.com.vn', password: '123456' },
        json: true };
        request(options,async function (error, response, body) {
            console.log(response.body.message);
            console.log(response.statusCode);
            await expect(response.body.message).toEqual("login successfully");
            await expect(response.statusCode).toEqual(200);
        })
    });

    it('Login API Test should fail with incorrect credential', async function(){
        var options = { method: 'POST',
        url: 'http://localhost:3000/login',
        headers: 
        { 'cache-control': 'no-cache',
            'Content-Type': 'application/json' },
        body: { email: 'pttlong@tma.com.vn', password: '123456' },
        json: true };

        request(options, function (error, response, body) {
            console.log(response.body.message);
            expect(response.body.message).toEqual("login failed");
        })
    })
});