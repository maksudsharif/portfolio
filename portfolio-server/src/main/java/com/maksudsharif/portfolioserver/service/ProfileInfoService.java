package com.maksudsharif.portfolioserver.service;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.ProfileHeader;
import com.maksudsharif.portfolioserver.model.ProfileInfo;

public interface ProfileInfoService
{

  String getName();

  Profile getProfile();

  ProfileInfo getProfileInfo();

  ProfileHeader getProfileHeader();
}
