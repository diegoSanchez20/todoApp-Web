import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderComponentVars } from '../shared/loader/loader.component.vars';
// import { AlertErrorVars } from '../shared/alert-error/alert-error.component.vars';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private countRequest = 0;
  constructor(
    public loaderVars: LoaderComponentVars,
    private jwtService: LocalStorageService,
    private router: Router
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this.showLoader();
    this.countRequest++;

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {

            if (this.jwtService.isLoggedIn()) {
              this.jwtService.signout();
            }

            if (!request.url.endsWith('/logout')) {
              this.showErrorModal('Su sesión ha expirado.');
              this.router.navigate(['/login']);
            }

          } else if (error.status === 0) {

            this.showErrorModal(
              'No se pudo conectar con el servidor.'
            );

          } else {

            const mensaje =
              error.error?.mensaje?.descripcion ??
              error.error?.message ??
              'Ocurrió un error.';

            this.showErrorModal(mensaje);
          }

          return throwError(() => error);
        }),

        finalize(() => {
          this.countRequest--;

          if (!this.countRequest) {
            this.hideLoader();
          }
        })
      );
  }
  private showLoader(): void {
    this.loaderVars.showLoader = true;
  }
  private hideLoader(): void {
    this.loaderVars.showLoader = false;
  }
  private showErrorModal(desc: string): void {

    Swal.fire({
      icon: 'error',
      title: "Error",
      text: desc,
    })
  }
}
