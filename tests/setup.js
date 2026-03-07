import "dotenv/config";
import mongoose from "mongoose";

beforeAll(async () => {
	await mongoose.connect(process.env.MONGO_URI);
	await Promise.all(
		Object.values(mongoose.connection.collections).map((collection) => collection.deleteMany({}))
	);
});

afterAll(async () => {
	await Promise.all(
		Object.values(mongoose.connection.collections).map((collection) => collection.deleteMany({}))
	);
	await mongoose.disconnect();
});