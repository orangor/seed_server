import express from "express"
import { SEED } from "../db/db"
import { CARD_CELL } from "../const/const"
var server = express();
server.all("*", function (req, res, next) {
    var origin = req.headers.origin;
    console.log(origin);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", "3.2.1");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})
server.get("/seed/get_data", async function (req, res) {
    let data = await SEED.getData()

    res.json({
        method: "GET",
        data
    })
});
server.post("/seed/add_data", async function (req, res) {
    console.log(req)
    let dd: CARD_CELL = { id: "12344", name: "小炮" }
    let zz = await SEED.addData(dd)
    res.json({
        method: "POST",
        car: {
            brand: 'BWN',
            price: 1900
        }
    })
})
server.post("/api/post", function (req, res) {
    res.json({
        method: "POST",
        car: {
            brand: 'BWN',
            price: 1900
        }
    })
})
server.listen(8085, () => {
    console.log("成功开启8085");
});