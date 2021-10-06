import { UserService } from '@app/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from './decorators/user.decorator';
import { CreateUserBody, CreateUserDto } from './dto/createUser.dto';
import { LoginUserBody, LoginUserDto } from './dto/loginUser.dto';
import { UpdateUserDto, UserUpdateBody } from './dto/updateUser.dto';
import { UserEntity } from './entites/user.entity';
import { AuthGuard } from './guards/auth.guard';
import { UserResponseInterface } from './types/userResponse.interface';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @ApiCreatedResponse({ description: 'User Registration' })
  @ApiBody({ type: CreateUserBody })
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @ApiCreatedResponse({ description: 'User Login' })
  @ApiBody({ type: LoginUserBody })
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'who am i' })
  @ApiUnauthorizedResponse()
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }

  @Put('user')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Update User profile' })
  @ApiBody({ type: UserUpdateBody })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') currentUserId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(
      currentUserId,
      updateUserDto,
    );
    return this.userService.buildUserResponse(user);
  }
}
