package com.maksudsharif.portfolioserver.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OtherPosition {

  private String title;
  private String start;
  private String end;

  public static OtherPosition from(String title, String start, String end) {
    return OtherPosition.builder().title(title).start(start).end(end).build();
  }
}
