pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


const $ = cheerio.load(pm.response.text())

pm.test("Status code is 200", function () {
    var bodyText = [pm.response.text()];
    var count = (bodyText.join("").match(/<item>/ig) || []).length
    console.log(count)
    pm.expect(count).to.eql(10);
});