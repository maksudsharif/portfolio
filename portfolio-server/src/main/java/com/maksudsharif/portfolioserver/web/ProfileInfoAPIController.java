package com.maksudsharif.portfolioserver.web;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.ProfileHeader;
import com.maksudsharif.portfolioserver.service.ProfileInfoService;
import lombok.AllArgsConstructor;
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
    public Mono<Profile> getProfile()
    {
        return Mono.just(profileInfoService.getProfile());
    }

    @GetMapping("/profile/header")
    @ResponseBody
    public Mono<ProfileHeader> getProfileHeader()
    {
        return Mono.just(profileInfoService.getProfileHeader());
    }
}
