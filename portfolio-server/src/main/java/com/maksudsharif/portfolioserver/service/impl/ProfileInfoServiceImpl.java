package com.maksudsharif.portfolioserver.service.impl;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.service.ProfileInfoService;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProfileInfoServiceImpl implements ProfileInfoService
{
    private Profile profile;

    @Override
    @Cacheable(cacheNames = "profileInfo", key = "'profileName'", condition = "#result != null && #result.trim().length() != 0")
    public String getName()
    {
        return profile.getName();
    }

    @Override
    @Cacheable(cacheNames = "profileInfo", key = "'profile'")
    public Profile getProfile()
    {
        return profile;
    }
}
