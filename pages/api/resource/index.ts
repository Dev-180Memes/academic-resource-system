import Resource, { IResource } from "@/model/resource.model";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/utils/connectDb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDb();

    if (req.method === "GET") {
        try {
            const resources = await Resource.find();
            if (!resources) {
                return res.status(400).json({ message: "No resources found" });
            }

            return res.status(200).json(resources);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    } else if (req.method === "POST") {
        try {
            const { name, description, url } = req.body;

            if (!name || !description || !url) {
                return res.status(400).json({ message: "Please fill in all fields" });
            }

            const newResource: IResource = new Resource({
                name,
                description,
                url,
            });

            await newResource.save();

            return res.status(201).json(newResource);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
};