package com.maksudsharif.portfolioserver.model;

import java.io.Serializable;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Language implements Serializable {

  private String name;
  private String proficiency;
}
