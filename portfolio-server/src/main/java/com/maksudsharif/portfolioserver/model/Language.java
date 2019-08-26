package com.maksudsharif.portfolioserver.model;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Language implements Serializable
{
    private String name;
    private String proficiency;
}
