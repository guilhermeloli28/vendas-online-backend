import { Controller, Get } from '@nestjs/common';
import { UserType } from 'src/user/enum/user-type.enum';
import { ReturnProduct } from './dtos/return-product.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { ProductService } from './product.service';

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
}
