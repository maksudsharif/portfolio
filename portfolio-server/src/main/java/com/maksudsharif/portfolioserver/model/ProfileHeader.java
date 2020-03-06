package com.maksudsharif.portfolioserver.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProfileHeader implements Serializable
{

  private String name;
  private String title;
  private String email;
  private String linkedIn;
  private String linkedInTitle;
  private String github;
  private String githubTitle;
  private String personalSiteTitle;
  private boolean showProfileImage;

  public ProfileHeader(Profile profile)
  {
    this.name = profile.getName();
    this.title = profile.getTitle();
    this.email = profile.getEmail();
    this.linkedIn = profile.getLinkedIn();
    this.linkedInTitle = profile.getLinkedInTitle();
    this.github = profile.getGithub();
    this.githubTitle = profile.getGithubTitle();
    this.personalSiteTitle = profile.getPersonalSiteTitle();
    this.showProfileImage = profile.isShowProfileImage();
  }
}
