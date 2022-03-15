import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  HttpStatus,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Request, Response } from "express";

@Controller("api/v1/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return this.userService.create(body);
  }
  
  // @Post()
  // create(@Req() request: Request) {
  //   console.log(request.);
  //   return this.userService.create(request.body);
  // }

  @Get()
  async findAll(@Res() res: Response) {
    // return this.userService.findAll();
    let rtnCode = 200;
    let rtnRes: any = new Object();
    try {
      rtnRes.body = await this.userService.findAll();
      rtnRes.message = "success user data all";
    } catch (e) {
      rtnCode = 500;
      rtnRes.body = null;
      rtnRes.message = e.message;
    }
    res.status(rtnCode).json(rtnRes);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
