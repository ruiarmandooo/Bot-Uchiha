const dotenv = require('dotenv');
const Joi = require('joi');

// Load environment variables from a .env file, if it exists
dotenv.config();

// Define a schema for validating the environment variables
const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().uri().required(),
    // Add additional variables as needed
}).unknown()
  .required();

// Validate the environment variables
const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Configuration error: ${error.message}`);
}

// Export the validated environment variables
module.exports = {
    nodeEnv: value.NODE_ENV,
    port: value.PORT,
    databaseUrl: value.DATABASE_URL,
    // Add additional variables as needed
};
