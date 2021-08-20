var express = require('express');
var router = express.Router();
var clientObj = require('../../config/secret');
var client_id = clientObj.client_id;
var client_secret = clientObj.client_secret;

router.get('/search/news', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(req.query.query); // json 결과
//  var api_url = 'https://openapi.naver.com/v1/search/news.xml?query=' + encodeURI(req.query.query); // xml 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        console.log('검색 성공, 검색어: ' + req.query.query);

        var searched_data = JSON.parse(body);
        var items = searched_data.items;
        // 검색된 title만 띄우기
        items.forEach(item => {
            console.log(item.title);
        });
        // 검색된 URL만 띄우기
        items.forEach(item => {
            console.log(item.originallink);
        });
        
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
});

 // exports
 module.exports = router;