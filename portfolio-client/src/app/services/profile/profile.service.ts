import {HttpClient} from '@angular/common/http';
import {CacheService} from '../cache/cache.service';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ProfileHeaderInfo} from "../../components/model/profileHeaderInfo";
import {ProfileInfo} from "../../components/model/profileInfo";

const PROFILE_URL = 'api/profile';
const PROFILE_HEADER_URL = 'api/profile/header';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private cacheService: CacheService) {
  }

  public getProfileInfo(): Observable<any> | Subject<any> {
    return this.cacheService.get('ProfileInfo', this._getProfileInfoInternal());
  }

  public getProfileHeaderInfo(): Observable<any> | Subject<any> {
    return this.cacheService.get('ProfileHeaderInfo', this._getProfileHeaderInfoInternal());
  }

  private _getProfileInfoInternal(): Observable<ProfileInfo> | Subject<ProfileInfo> {
    return this.http.get<ProfileInfo>(`${PROFILE_URL}`);
  }

  private _getProfileHeaderInfoInternal(): Observable<ProfileHeaderInfo> | Subject<ProfileHeaderInfo> {
    return this.http.get<ProfileHeaderInfo>(`${PROFILE_HEADER_URL}`);
  }

}
