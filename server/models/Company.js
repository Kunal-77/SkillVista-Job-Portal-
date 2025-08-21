import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    password: { type: String, required: true },
    // Add other company-specific fields as needed
});

const Company = mongoose.model("Company", companySchema);

export default Company;
