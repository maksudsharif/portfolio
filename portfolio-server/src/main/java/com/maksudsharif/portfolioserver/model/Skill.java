package com.maksudsharif.portfolioserver.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Skill implements Serializable
{

  private String name;
  private String years;

  @JsonInclude(JsonInclude.Include.NON_NULL)
  private String level;

  public Skill(String name)
  {
    this.name = name;
  }

  public static List<Skill> from(String... skills)
  {
    return skills != null && skills.length > 0 ? Arrays.stream(skills).map(Skill::new)
        .collect(Collectors.toList()) : Collections.emptyList();
  }
}
