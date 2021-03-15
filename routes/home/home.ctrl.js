const hello = (req, res) => {
    res.render("home/home");
}


const login = (req, res) => {
    res.render("home/login");

};

module.exports = {

    hello,
    login
};

// 이거와 같다
// function hello(req, res) {
//     res.render("home/index");
// }