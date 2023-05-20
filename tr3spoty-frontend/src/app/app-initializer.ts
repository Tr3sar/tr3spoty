import { AuthService } from './services/auth.service';
import { from } from 'rxjs';

export function initializeApp(authService: AuthService) {
  /* return async () => {
    // Realiza cualquier lógica de inicialización aquí
    return authService.getTokenRequest().toPromise()
      .then((token : any) => {
        console.log('token', token)
        authService.setToken(token.access_token);
      })
  }; */
}