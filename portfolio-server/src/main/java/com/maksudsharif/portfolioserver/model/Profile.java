package com.maksudsharif.portfolioserver.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Profile implements Serializable
{
    private String name;
    private String title;
    private String email;
    private String linkedIn;
    private String linkedInTitle;
    private String github;
    private String githubTitle;
    private String personalSite;
    private String personalSiteTitle;
    private String clearance;
    private String summary;
    private List<Education> education;
    private List<String> interests;
    private List<Language> languages;
    private List<SkillGroup> skills;
    private boolean showProfileImage;
}
