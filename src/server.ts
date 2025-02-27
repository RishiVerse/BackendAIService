import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import { Request, Response } from "express";

const app = express();  // ✅ No `.default()`
app.use(express.json());
app.use(cors());  // ✅ No `.default()`

app.post("/ask-ai", async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    res.json({ message: `Your question was: ${question}` });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
