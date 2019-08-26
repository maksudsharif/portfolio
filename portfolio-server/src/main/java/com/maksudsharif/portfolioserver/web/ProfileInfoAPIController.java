package com.maksudsharif.portfolioserver.web;

import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.service.ProfileInfoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@AllArgsConstructor
@RestController
public class ProfileInfoAPIController
{
    private ProfileInfoService profileInfoService;

    @GetMapping("/api/profile")
    @ResponseBody
    public ResponseEntity<Profile> getProfile()
    {
        return ResponseEntity.of(Optional.ofNullable(profileInfoService.getProfile()));
    }
}
