import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product extends Document {

    @Prop({required: true, unique: true})
    id: number;

    @Prop({required: true, unique: true})
    name: string;

    @Prop()
    description: string;

    @Prop({required: true})
    image: string;

    @Prop({required: true})
    price: number;

    @Prop()
    count: number;

    @Prop()
    size: string;

    @Prop()
    color: string;

    @Prop()
    brand: string;

    @Prop()
    isDeleted: boolean;

    @Prop({default: Date.now})
    created: Date;

    @Prop()
    updated: Date;

    @Prop()
    deleted: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
