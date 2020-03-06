package com.maksudsharif.portfolioserver.web;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.ProfileHeader;
import com.maksudsharif.portfolioserver.model.ProfileInfo;
import com.maksudsharif.portfolioserver.service.ProfileInfoService;
import java.util.concurrent.TimeUnit;
import lombok.AllArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@AllArgsConstructor
@RestController
public class ProfileInfoAPIController
{

  private ProfileInfoService profileInfoService;

  @GetMapping("/profile")
  @ResponseBody
  public ResponseEntity<Mono<Profile>> getProfile()
  {
    return ResponseEntity.ok()
        .cacheControl(CacheControl.maxAge(5, TimeUnit.MINUTES))
        .body(Mono.just(profileInfoService.getProfile()));
  }

  @GetMapping("/profile/info")
  @ResponseBody
  public ResponseEntity<Mono<ProfileInfo>> getProfileInfo()
  {
    return ResponseEntity.ok()
        .cacheControl(CacheControl.maxAge(5, TimeUnit.MINUTES))
        .body(Mono.just(profileInfoService.getProfileInfo()));
  }

  @GetMapping("/profile/header")
  @ResponseBody
  public ResponseEntity<Mono<ProfileHeader>> getProfileHeader()
  {
    return ResponseEntity.ok()
        .cacheControl(CacheControl.maxAge(5, TimeUnit.MINUTES))
        .body(Mono.just(profileInfoService.getProfileHeader()));
  }
}
