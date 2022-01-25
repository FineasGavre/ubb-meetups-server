import { createParamDecorator } from '@nestjs/common'

export const ReqUser = createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
})
