import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ProfileHeaderInfo} from '../../components/model/profileHeaderInfo';
import {ProfileInfo} from '../../components/model/profileInfo';
import {shareReplay} from 'rxjs/operators';

const PROFILE_URL = 'api/profile/info';
const PROFILE_HEADER_URL = 'api/profile/header';

@Injectable()
export class ProfileService {
  headerInfo: Observable<any>;
  profileInfo: Observable<any>;

  constructor(private http: HttpClient) {
  }

  public getProfileInfo(): Observable<any> | Subject<any> {
    return this.profileInfo ? this.profileInfo : this._getProfileInfoInternal();
  }

  public getProfileHeaderInfo(): Observable<any> | Subject<any> {
    return this.headerInfo ? this.headerInfo : this._getProfileHeaderInfoInternal();
  }

  private _getProfileInfoInternal(): Observable<any> | Subject<any> {
    const profileRequest = this.http.get<ProfileInfo>(PROFILE_URL).pipe(shareReplay());
    this.profileInfo = profileRequest;
    return profileRequest;
  }

  private _getProfileHeaderInfoInternal(): Observable<any> | Subject<any> {
    const headerRequest = this.http.get<ProfileHeaderInfo>(PROFILE_HEADER_URL).pipe(shareReplay());
    this.headerInfo = headerRequest;
    return headerRequest;
  }

}
