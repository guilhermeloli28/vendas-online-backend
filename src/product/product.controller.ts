import {
  Controller,
  Get,
  ValidationPipe,
  UsePipes,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { UserType } from 'src/user/enum/user-type.enum';
import { ReturnProduct } from './dtos/return-product.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { DeleteResult } from 'typeorm';

@Roles(UserType.Admin, UserType.User)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAllProducts(): Promise<ReturnProduct[]> {
    return (await this.productService.findAllProducts()).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDto,
  ): Promise<ProductEntity> {
    return await this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }
}
