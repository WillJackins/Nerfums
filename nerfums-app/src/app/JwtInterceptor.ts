import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {NerfumsService} from "./nerfums.service";
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private nerfumsService: NerfumsService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let session = this.nerfumsService.currentSessionValue;
    if (session && session.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${session.token}`
        }
      });
    }

    return next.handle(request);
  }

}
