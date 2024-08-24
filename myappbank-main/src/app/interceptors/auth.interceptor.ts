import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('authInterseptor');
  console.log(req);
  var newreq = req.clone({ setHeaders: { Autorization: 'My token' } });
  console.log(newreq);
  return next(newreq);
};
