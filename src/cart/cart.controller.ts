import {
  Controller,
  UsePipes,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CartService } from './cart.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { ReturnCartDto } from './dtos/return-cart.dto';

@Roles(UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createCart(
    @Body() insertCart: InsertCartDTO,
    @UserId() userId: number,
  ): Promise<ReturnCartDto> {
    const cart = await this.cartService.insertProductInCart(insertCart, userId);
    return new ReturnCartDto(cart);
  }
}
