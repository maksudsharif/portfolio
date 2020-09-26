package com.maksudsharif.portfolioserver.service.impl;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.ProfileHeader;
import com.maksudsharif.portfolioserver.model.ProfileInfo;
import com.maksudsharif.portfolioserver.service.ProfileInfoService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class ProfileInfoServiceImpl implements ProfileInfoService {

  private final Profile profile;
  private final ProfileHeader profileHeader;
  private final ProfileInfo profileInfo;

  public ProfileInfoServiceImpl(Profile profile) {
    this.profile = profile;
    this.profileHeader = new ProfileHeader(profile);
    this.profileInfo = new ProfileInfo(profile);
  }

  @Override
  public String getName() {
    return profile.getName();
  }

  @Override
  public Profile getProfile() {
    return profile;
  }

  @Override
  public ProfileInfo getProfileInfo() {
    return profileInfo;
  }

  @Override
  public ProfileHeader getProfileHeader() {
    return profileHeader;
  }
}
