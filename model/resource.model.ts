import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResource extends Document {
  name: string;
  description: string;
  url: string;
}

const ResourceSchema: Schema<IResource> = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
});

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);

export default Resource;