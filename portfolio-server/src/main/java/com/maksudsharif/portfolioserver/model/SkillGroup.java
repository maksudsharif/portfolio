package com.maksudsharif.portfolioserver.model;

import java.io.Serializable;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SkillGroup implements Serializable
{

  private String name;
  private List<Skill> skills;
  private SkillTypeView type;
}
