import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RedirectCommand, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../core/services/auth/auth.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);


   if (!authService.isLoggedIn()) {
        const loginPath = router.parseUrl("/login");
        return new RedirectCommand(loginPath, {
          skipLocationChange: true,
        });
      }
  return true;
};
