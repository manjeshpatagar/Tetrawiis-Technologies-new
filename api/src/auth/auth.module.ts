import { Module } from '@nestjs/common';
import { JwtAuthModule } from '@/auth/jwt/jwt-auth.module';
import { RolesModule } from '@/auth/roles/roles.module';
@Module({
  imports: [JwtAuthModule, RolesModule],
  exports: [JwtAuthModule, RolesModule],
})
export class AuthModule {}
