import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingService } from '../hashing/hashing.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: signUpDto.email,
      },
    });

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await this.hashingService.hash(signUpDto.password);

    const user = await this.prisma.user.create({
      data: {
        email: signUpDto.email,
        password: hashedPassword,
      },
    });

    return user;
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signInDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    const isPasswordValid = await this.hashingService.compare(
      signInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return true;
  }
}