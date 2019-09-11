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

        List<Skill> techSkills = List.of(
                Skill.builder()
                        .name("Spring")
                        .build()
                , Skill.builder()
                        .name("Spring Boot")
                        .build()
                , Skill.builder()
                        .name("SQL")
                        .build()
                , Skill.builder()
                        .name("ORM")
                        .build()
                , Skill.builder()
                        .name("Solr")
                        .build()
                , Skill.builder()
                        .name("ActiveMQ")
                        .build()
                , Skill.builder()
                        .name("Hazelcast")
                        .build()
                , Skill.builder()
                        .name("Alfresco")
                        .build()
                , Skill.builder()
                        .name("PostgreSQL")
                        .build()
                , Skill.builder()
                        .name("Apache Tomcat")
                        .build()
                , Skill.builder()
                        .name("AngularJS")
                        .build()
                , Skill.builder()
                        .name("Typescript")
                        .build()
                , Skill.builder()
                        .name("Angular")
                        .build()
                , Skill.builder()
                        .name("Git")
                        .build()
                , Skill.builder()
                        .name("REST API")
                        .build()
                , Skill.builder()
                        .name("Maven/Gradle")
                        .build()
                , Skill.builder()
                        .name("NPM")
                        .build()
                , Skill.builder()
                        .name("JMeter")
                        .build()
                , Skill.builder()
                        .name("JUnit")
                        .build()
                , Skill.builder()
                        .name("HTML/CSS")
                        .build()
                , Skill.builder()
                        .name("Apache Geode")
                        .build()
                , Skill.builder()
                        .name("Spring Security")
                        .build()
                , Skill.builder()
                        .name("Spring Integration")
                        .build()
                , Skill.builder()
                        .name("Apache Camel")
                        .build()
        );

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

        List<Skill> cloudSkills = List.of(
                Skill.builder()
                        .name("AWS")
                        .build()
                , Skill.builder()
                        .name("EC2")
                        .build()
                , Skill.builder()
                        .name("S3")
                        .build()
                , Skill.builder()
                        .name("RDS")
                        .build()
                , Skill.builder()
                        .name("Ansible")
                        .build()
                , Skill.builder()
                        .name("Docker")
                        .build()
                , Skill.builder()
                        .name("Linux")
                        .build()
                , Skill.builder()
                        .name("CI/CD")
                        .build()
                , Skill.builder()
                        .name("Scalable Architecture")
                        .build()
                , Skill.builder()
                        .name("Distributed Systems")
                        .build()
                , Skill.builder()
                        .name("Varnish")
                        .build()
                , Skill.builder()
                        .name("HAProxy")
                        .build()
                , Skill.builder()
                        .name("Apache")
                        .build()
                , Skill.builder()
                        .name("Spring Cloud")
                        .build()
                , Skill.builder()
                        .name("AmazonMQ")
                        .build()
        );

        List<Skill> otherSkills = List.of(
                Skill.builder()
                        .name("Gitlab")
                        .build()
                , Skill.builder()
                        .name("JIRA")
                        .build()
                , Skill.builder()
                        .name("Bamboo")
                        .build()
                , Skill.builder()
                        .name("Contour")
                        .build()
                , Skill.builder()
                        .name("Software Development Lifecycle")
                        .build()
                , Skill.builder()
                        .name("Team Management")
                        .build()
                , Skill.builder()
                        .name("Agile")
                        .build()
                , Skill.builder()
                        .name("Scrum")
                        .build()
        );

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
