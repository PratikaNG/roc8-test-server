const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { getToken } = require("./Middlewares/tokenMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.all("/", getToken, async (req, res) => {
  const { url, session_id, method, token } = req.body;
  // console.log(req.body.token);
  // const {auth-token, api-key} = req.headers;
  try {
    axios({
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        "Auth-token": `${token}`,
      },
      data: { session_id },
    })
      .then((result) => {
        res.json({ msg: "Success", data: result.data });
      })
      .catch((err) => {
        res.json({ msg: err.message, err: "HERE" });
      });
    // console.log(req.headers["auth-token"], "BODY");

    // res.json({ msg: "Hi" });
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message });
  }
});

app.listen(8080, () => {
  console.log(`Server running at 8080`);
});
