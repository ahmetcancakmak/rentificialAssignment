import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(request: HttpRequest<any>,next: HttpHandler){
    var authService = this.injector.get(AuthServiceService)
    if(authService.isAuthenticated){
      var authRequest = request.clone({
        headers : request.headers.set('authorization','bearer ' + authService.token)
      })      
      return next.handle(authRequest)
    }
    else{
      return next.handle(request)
    }
    
  }
}
