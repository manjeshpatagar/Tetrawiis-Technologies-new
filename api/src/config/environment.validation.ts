import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsString,
  IsUrl,
  Min,
  validateSync,
} from 'class-validator';
enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}
class EnvironmentVariables {
  @IsEnum(Environment) NODE_ENV: Environment = Environment.Development;
  @IsInt() @Min(1) PORT: number = 4000;
  @IsString() API_PREFIX: string = 'api/v1';
  @IsString() DATABASE_URL!: string;
  @IsString() JWT_SECRET!: string;
  @IsString() JWT_EXPIRES_IN: string = '15m';
  @IsUrl({ require_tld: false }) CORS_ORIGIN!: string;
}
export function validate(config: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validated, { skipMissingProperties: false });
  if (errors.length) throw new Error(errors.toString());
  return validated;
}
