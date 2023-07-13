const express = require("express");
const cors = require("cors");
const{default:axios}=require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
          "https://api.chatengine.io/users/",
          { username, secret: username, first_name:username},
          { headers: { "Private-Key": "2387296d-101d-4fef-bb7d-98de950f724d " } }
        );
        return res.status(r.status).json(r.data);
      } catch (e) {
        return res.status(e.response.status).json(e.response.data);
      }
    });
app.listen(3001);