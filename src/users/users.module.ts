import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './service/users/users.service';
import { User } from 'src/typeorm/entities/user.entity';
import { Profile } from 'src/typeorm/entities/profile.entity';
import { Post } from 'src/typeorm/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
