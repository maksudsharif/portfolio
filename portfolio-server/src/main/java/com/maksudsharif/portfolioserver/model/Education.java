package com.maksudsharif.portfolioserver.model;

import java.io.Serializable;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Education implements Serializable
{

  private String title;
  private String addendum;
  private String institution;
  private String range;
}
