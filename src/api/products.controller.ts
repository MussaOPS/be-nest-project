import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Post, Put, Req} from "@nestjs/common";
import {DefaultProductsService} from "../service/impl/default-products.service";
import {ProductCreateRequestDto} from "../dto/product-create-request.dto";

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: DefaultProductsService) {
    }

    @Post('create')
    @ApiOperation({summary: 'Product creation'})
    @ApiResponse({status: 201, description: 'Product successfully created.'})
    signUp(@Body() request: ProductCreateRequestDto): Promise<void> {
        return this.productsService.createProduct(request);
    }

    @Get('list')
    @ApiOperation({summary: 'Get products list'})
    @ApiResponse({status: 200, description: 'Products list retrieved successfully.'})
    getProductsList(): Promise<Product[]> {
        return this.productsService.getProductsList();
    }

    @Get('detail')
    @ApiOperation({summary: 'Get product detail'})
    @ApiResponse({status: 200, description: 'Product detail retrieved successfully.'})
    getProductDetail(@Req() req): Promise<Product> {
        return this.productsService.getProductDetail(req.product.productId);
    }

    @Put('update')
    @ApiOperation({summary: 'Update product'})
    @ApiResponse({status: 200, description: 'Product updated successfully.'})
    updateUser(@Req() req, @Body() request: ProductCreateRequestDto): Promise<void> {
        return this.productsService.updateProduct(req.product.productId, request);
    }

    @Delete('delete')
    @ApiOperation({summary: 'Delete product'})
    @ApiResponse({status: 200, description: 'Product deleted successfully.'})
    deleteUser(@Req() req): Promise<void> {
        return this.productsService.deleteProduct(req.product.productId);
    }

    @Get('search')
    @ApiOperation({summary: 'Search products'})
    @ApiResponse({status: 200, description: 'Products search results.'})
    searchProducts(@Req() req): Promise<Product[]> {
        return this.productsService.searchProducts(req.query.search);
    }
}
