package com.maksudsharif.portfolioserver.service;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.ProfileHeader;

public interface ProfileInfoService
{
    String getName();

    Profile getProfile();

    ProfileHeader getProfileHeader();
}
