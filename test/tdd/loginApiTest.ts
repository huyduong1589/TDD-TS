var request = require("request");
var ejs = require("ejs");

describe('Login API Test', function() {
    // Function
    it('should pass with correct credentials', async function() {
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
        })
    });

    it('should fail with incorrect credentials', async function(){
        var options = { method: 'POST',
        url: 'http://localhost:3000/login',
        headers: 
        { 'cache-control': 'no-cache',
            'Content-Type': 'application/json' },
        body: { email: 'pttlong@tma.com.vn', password: '123456' },
        json: true };
        request(options,async function (error, response, body) {
            console.log(response.body.message);
            console.log(response.statusCode);
            await expect(response.body.message).toEqual("login failed");
        })
    });

    it('should fail when missing field', async function(){
        var options = { method: 'POST',
        url: 'http://localhost:3000/login',
        headers: 
        { 'cache-control': 'no-cache',
            'Content-Type': 'application/json' },
        body: { password: '123456' },
        json: true };

        request(options,async function (error, response, body) {
            console.log(response.body.message);
            console.log(response.statusCode);
            await expect(response.body.message).toEqual("bad request");
        })
    })
});