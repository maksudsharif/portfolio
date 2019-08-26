package com.maksudsharif.portfolioserver.model;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Education implements Serializable
{
    private String title;
    private String addendum;
    private String institution;
    private String range;
}
