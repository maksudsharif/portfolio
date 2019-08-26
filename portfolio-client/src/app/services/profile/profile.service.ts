import {HttpClient} from '@angular/common/http';
import {CacheService} from '../cache/cache.service';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

const BASE_URL = 'api/profile';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private cacheService: CacheService) {
  }

  public getProfileInfo(): Observable<any> | Subject<any> {
    return this.cacheService.get('ProfileInfo', this._getProfileInfoInternal());
  }

  private _getProfileInfoInternal(): Observable<any> | Subject<any> {
    return this.http.get(`${BASE_URL}`);
  }

}
