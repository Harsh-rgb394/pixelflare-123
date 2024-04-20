import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import AIRoutes from './routes/AIRoutes.js';
import userRoute from "./routes/userRoute.js"

dotenv.config();
connectDB(process.env.MONGO_URL);

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ai', AIRoutes);
app.use("/api/v1/user",userRoute);


app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from PIXELFLARE!',
  });
});

const startServer = async () => {
  try {
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();