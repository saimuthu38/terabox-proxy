import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/terabox', async (req, res) => {
  try {
    const apiResponse = await fetch("https://edfr68qfrnt.teraboxfast.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await apiResponse.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", message: err.message });
  }
});

app.get("/", (req, res) => res.send("TeraBox Proxy Running"));

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
