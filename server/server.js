import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from '@sentry/node';
import { clerkWebhook } from './controllers/webhooks.js'
import User from './models/User.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'

//Initialize app
const app = express()

//Connect to Database

connectDB()
await connectCloudinary()

//Middlewares
app.use(cors())
app.use(express.json())
//app.use(clerkMiddleware())

//Routes
app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhook', clerkWebhook)
//app.use('/api/user',User)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)

//Port
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`
  ))


