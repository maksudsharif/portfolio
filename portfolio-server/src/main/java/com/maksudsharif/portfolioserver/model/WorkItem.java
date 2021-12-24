package com.maksudsharif.portfolioserver.model;

import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WorkItem {
  private String title;
  private String employer;
  private String formerly;
  private String start;
  private String end;
  private String description;
  @Builder.Default
  private List<Skill> skillsUsed = new ArrayList<>();
  private String accomplishments;
  @Builder.Default
  private List<OtherPosition> otherPositions = new ArrayList<>();
}
