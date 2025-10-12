import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("");
  const newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  //Questa sara' la chiamata all'Api che si inviera' da qui
  return next(newReq);
};
