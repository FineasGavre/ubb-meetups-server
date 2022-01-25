import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class UmsAuthGuard extends AuthGuard('jwt') {}
