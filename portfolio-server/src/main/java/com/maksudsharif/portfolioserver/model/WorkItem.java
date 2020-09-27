package com.maksudsharif.portfolioserver.model;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WorkItem {
  private String title;
  private String employer;
  private String start;
  private String end;
  private String description;
  private List<Skill> skillsUsed;
  private String accomplishments;
}
