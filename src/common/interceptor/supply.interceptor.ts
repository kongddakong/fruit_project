import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SupplyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // Request Body 가져오기
    const payloadParams = context.switchToHttp().getRequest().body;
console.log(payloadParams)
    // total 값 계산하기
    payloadParams.total = payloadParams.box * payloadParams.pcs + payloadParams.bonus;

    // box, pcs, bonus 값 제거하기
    delete payloadParams.box;
    delete payloadParams.pcs;
    delete payloadParams.bonus;

    return next.handle().pipe(
      map((data) => {
        data.msg += ' ' + payloadParams.msg;
        return data;
      })
    );
  }
}
