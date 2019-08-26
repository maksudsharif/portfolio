package com.maksudsharif.portfolioserver.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Skill implements Serializable
{
    private String name;
    private String years;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String level;
}
