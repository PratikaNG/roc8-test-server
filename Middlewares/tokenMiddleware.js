const axios = require("axios");

function getToken(req, res, next) {
  axios({
    method: "post",
    url: "https://dev-test.cimet.io/generate-token",
    headers: {
      "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
    },
  })
    .then((res) => {
      //   console.log(res);
      req.body.token = res.data.token;
      //   res.json({ msg: "was here" });
      next();
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { getToken };
