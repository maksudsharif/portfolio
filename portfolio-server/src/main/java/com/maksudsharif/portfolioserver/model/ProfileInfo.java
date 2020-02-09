package com.maksudsharif.portfolioserver.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProfileInfo implements Serializable
{
    private String clearance;
    private String clearanceStatus;
    private String summary;
    private List<Education> education;
    private List<String> interests;
    private List<Language> languages;
    private List<SkillGroup> skills;

    public ProfileInfo(Profile profile)
    {
        this.clearance = profile.getClearance();
        this.clearanceStatus = profile.getClearanceStatus();
        this.summary = profile.getSummary();
        this.education = profile.getEducation();
        this.interests = profile.getInterests();
        this.languages = profile.getLanguages();
        this.skills = profile.getSkills();
    }
}
