import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Product, ProductSchema} from "../entity/product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
    ],
    exports: [MongooseModule],
    // providers: [
    //     {
    //         provide: 'ProductsService',
    //         useClass: DefaultProductsService,
    //     },
    //     DefaultProductsService,
    // ],
    // controllers: [ProductsController],
})

export class ProductsModule {
}
