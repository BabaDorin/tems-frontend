import { CAN_VIEW_ENTITIES, CAN_MANAGE_ANNOUNCEMENTS, CAN_MANAGE_ENTITIES, CAN_MANAGE_SYSTEM_CONFIGURATION } from './../models/claims';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CanViewEntitiesGuard implements CanActivate {
  constructor(
    private tokenService: TokenService
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.tokenService.hasClaim(CAN_VIEW_ENTITIES) 
      || this.tokenService.hasClaim(CAN_MANAGE_ENTITIES) 
      || this.tokenService.hasClaim(CAN_MANAGE_SYSTEM_CONFIGURATION); 
  }
}
