package com.maksudsharif.portfolioserver.model;

import lombok.Builder;
import lombok.Data;

import javax.sql.rowset.serial.SerialArray;
import java.io.Serializable;
import java.util.List;

@Data
@Builder
public class SkillGroup implements Serializable
{
    private String name;
    private List<Skill> skills;
    private SkillTypeView type;
}
