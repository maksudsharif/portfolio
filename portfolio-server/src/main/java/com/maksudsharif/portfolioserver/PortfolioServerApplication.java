package com.maksudsharif.portfolioserver;

import com.maksudsharif.portfolioserver.model.Education;
import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.Skill;
import com.maksudsharif.portfolioserver.model.SkillGroup;
import com.maksudsharif.portfolioserver.model.SkillTypeView;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class PortfolioServerApplication
{

    @Value("${portfolio.showProfileImage}")
    private boolean showProfileImages;

    public static void main(String[] args)
    {
        SpringApplication.run(PortfolioServerApplication.class, args);
    }

    @Bean
    public Profile profileInfo()
    {
        Profile profile = new Profile();
        profile.setName("Maksud Sharif");
        profile.setTitle("Software Engineer");
        profile.setEmail("maksudsharif@gmail.com");
        profile.setClearance("Secret");
        profile.setClearanceStatus("Current");
        profile.setLinkedIn("https://linkedin.com/in/maksudsharif");
        profile.setLinkedInTitle("linkedin.com/in/maksudsharif");
        profile.setPersonalSite("https://maksudsharif.com");
        profile.setPersonalSiteTitle("maksudsharif.com");
        profile.setGithub("https://github.com/maksudsharif");
        profile.setGithubTitle("github.com/maksudsharif");
        profile.setShowProfileImage(showProfileImages);

        profile.setSummary("Driven software engineer with over 8 years of technical experience and proven ability leading development and delivery of secure high-performance cloud applications. Skilled in full-stack enterprise Java development throughout the software development life-cycle including analysis, design, implementation, and testing. Also experienced with operations, maintenance, troubleshooting, monitoring, and automated deployment of applications to on-premise and cloud environments. Ask me about my homelab!");

        Education education = Education.builder()
                .addendum("(Coursework Towards)")
                .institution("University of Virginia")
                .range("2011 - 2015")
                .title("Bachelor of Science, Computer Science")
                .build();
        profile.setEducation(List.of(education));

        profile.setInterests(List.of("Homelab", "Foodie", "Travel"));

        List<Skill> techSkills = Skill.from(
                "Spring"
                , "Spring Boot"
                , "SQL"
                , "ORM"
                , "Solr"
                , "ActiveMQ"
                , "Hazelcast"
                , "Alfresco"
                , "PostgreSQL"
                , "Apache Tomcat"
                , "AngularJS"
                , "Typescript"
                , "Angular"
                , "Git"
                , "REST API"
                , "Maven"
                , "NPM"
                , "JMeter"
                , "Karma/Jasmine/Protractor"
                , "JUnit"
                , "HTML/CSS"
                , "Apache Geode"
                , "Spring Security"
                , "Spring Security"
                , "Spring Integration"
                , "Apache Camel");

        List<Skill> programmingSkills = List.of(
                Skill.builder()
                        .name("Java")
                        .level("100")
                        .years("8")
                        .build()
                , Skill.builder()
                        .name("Javascript")
                        .level("50")
                        .years("4")
                        .build()
                , Skill.builder()
                        .name("Bash")
                        .level("25")
                        .years("2")
                        .build()
        );

        List<Skill> cloudSkills = Skill.from(
                "AWS"
                , "EC2"
                , "S3"
                , "RDS"
                , "Ansible"
                , "Docker"
                , "Linux"
                , "CI/CD"
                , "Scalable Architecture"
                , "Distributed Systems"
                , "Varnish"
                , "HAProxy"
                , "Apache"
                , "Spring Cloud"
                , "AmazonMQ");

        List<Skill> otherSkills = Skill.from(
                "Gitlab"
                , "JIRA"
                , "Bamboo"
                , "Contour"
                , "Software Development Lifecycle"
                , "Team Management"
                , "Agile"
                , "Scrum");

        SkillGroup programmingLanguages = SkillGroup.builder()
                .name("Programming Languages")
                .skills(programmingSkills)
                .type(SkillTypeView.BAR)
                .build();
        SkillGroup technologies = SkillGroup.builder()
                .name("Technologies")
                .skills(techSkills)
                .type(SkillTypeView.BADGE)
                .build();
        SkillGroup cloud = SkillGroup.builder()
                .name("Cloud/DevOps")
                .skills(cloudSkills)
                .type(SkillTypeView.BADGE)
                .build();
        SkillGroup other = SkillGroup.builder()
                .name("Other")
                .skills(otherSkills)
                .type(SkillTypeView.BADGE)
                .build();
        profile.setSkills(List.of(programmingLanguages, technologies, cloud, other));

        return profile;
    }
}
