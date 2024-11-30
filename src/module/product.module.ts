import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Product, ProductSchema} from "../schema/product.entity";
import {DefaultProductsService} from "../service/impl/default-products.service";
import {ProductsController} from "../api/products.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
    ],
    providers: [
        {
            provide: 'ProductsService',
            useClass: DefaultProductsService,
        },
        DefaultProductsService,
    ],
    controllers: [ProductsController],
})

export class ProductModule {
}
