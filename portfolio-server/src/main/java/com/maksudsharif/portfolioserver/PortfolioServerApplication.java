package com.maksudsharif.portfolioserver;

import com.maksudsharif.portfolioserver.model.Education;
import com.maksudsharif.portfolioserver.model.OtherPosition;
import com.maksudsharif.portfolioserver.model.Profile;
import com.maksudsharif.portfolioserver.model.Skill;
import com.maksudsharif.portfolioserver.model.SkillGroup;
import com.maksudsharif.portfolioserver.model.SkillTypeView;
import com.maksudsharif.portfolioserver.model.WorkItem;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PortfolioServerApplication {

  @Value("${portfolio.showProfileImage}")
  private boolean showProfileImages;

  public static void main(String[] args) {
    SpringApplication.run(PortfolioServerApplication.class, args);
  }

  @Bean
  public Profile profileInfo() {
    Profile profile = new Profile();
    profile.setName("Maksud Sharif");
    profile.setTitle("Software Engineer");
    profile.setEmail("maksudsharif@gmail.com");
    profile.setClearance("TS/SCI w/ CI Polygraph");
    profile.setClearanceStatus("Active");
    profile.setClearanceDate("09/2020");
    profile.setLinkedIn("https://linkedin.com/in/maksudsharif");
    profile.setLinkedInTitle("linkedin.com/in/maksudsharif");
    profile.setPersonalSite("https://maksudsharif.com");
    profile.setPersonalSiteTitle("maksudsharif.com");
    profile.setGithub("https://github.com/maksudsharif");
    profile.setGithubTitle("github.com/maksudsharif");
    profile.setShowProfileImage(showProfileImages);

    profile.setSummary(
        "Driven software engineer with over 10 years of technical experience and proven ability leading development and delivery of secure high-performance cloud applications. Skilled in full-stack enterprise Java development throughout the software development life-cycle including analysis, design, implementation, testing, operations, maintenance, monitoring, and automated deployment of applications to on-premise and cloud environments. Ask me about my homelab!");

    Education education = Education.builder()
        .addendum("(Coursework Towards)")
        .institution("University of Virginia")
        .range("2011 - 2015")
        .title("Bachelor of Science, Computer Science")
        .build();
    profile.setEducation(List.of(education));

    List<Skill> tbgSkills = Skill.from("Java"
        , "Spring Boot"
        , "Angular"
        , "React"
        , "CI/CD"
        , "Linux"
        , "AWS"
        , "Jenkins"
        , "SonarQube"
        , "Python"
        , "Kafka"
        , "Wildfly"
        , "Docker"
        , "OpenShift"
        , "PostGIS"
        , "SOAP/WSDL"
        , "ElasticSearch"
        , "Redis"
        , "Activiti"
        , "Alfresco"
    );
    List<OtherPosition> tbgOtherPositions = List.of(
        OtherPosition.from("Software Engineer", "Oct. 2019", "Sept. 2020")
    );
    WorkItem tbg = WorkItem.builder()
        .description("""
            <p>Take lead of the direction, capabilities, and implementation
            of multiple web-based solutions in classified and unclassified
            environments. Coordinate with customers (internal and external),
            write code, resolve technical issues, mentor juniors, provide
            tasking for technical and non-technical team members, and manage
            DevOps lifecycle for multiple applications.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Spear-headed development of mission-critical
              (mapping, workflow, authentication/authorization)
              features/capabilities for Spring Boot application
              and completed 2 months ahead of schedule.</li>
              <li>Modernized data ingestion pipeline from legacy SOAP
              systems to modern search application with Python, Kafka,
              and Elasticsearch.</li>
              <li>Take ownership of hastily constructed proof of concept
              Java application and transformed in 6 months to a secure,
              scalable, and modern application that is deployed to production
              with multiple subsequent releases.</li>
            </ul>
            """)
        .employer("Jacobs Engineering Group")
        .formerly("The Buffalo Group, LLC")
        .title("Lead Software Engineer")
        .start("Oct. 2019")
        .end("Present")
        .skillsUsed(tbgSkills)
        .otherPositions(tbgOtherPositions)
        .build();

    List<Skill> armLeadSkills = Skill.from("Java"
        , "Spring"
        , "Spring Boot"
        , "Angular"
        , "AngularJS"
        , "CI/CD"
        , "Linux"
        , "AWS"
        , "Solr"
        , "Solr Cloud"
        , "SolrJ"
        , "MFA"
        , "Security"
        , "Agile/Scrum"
    );
    List<OtherPosition> armOtherPositions = List.of(
        OtherPosition.from("Software Engineer", "Feb. 2016", "Sept. 2018"),
        OtherPosition.from("Junior Software Engineer", "Sept. 2015", "Feb. 2016")
    );
    WorkItem armLead = WorkItem.builder()
        .description("""
            <p>As architect and tech lead for high-visibility project, direct the
               design, implementation, testing, and deployment for multiple
               production applications. Took ownership of delivery for high-visibility,
               high-impact end-user features for global health
               organization with global user-base. Analyze and implement new
               features from product road-map in Agile team for enterprise
               product with Spring and AngularJS.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Delivered 5 product releases to production environments
               in AWS to global user-base improving average API response times
                by 2-3x and enhancing security controls as verified by third-party audits.</li>
              <li>Propose and re-architect search subsystem of production
               application with Solr Cloud to cut down query response times by 2-10x.</li>
              <li>Deployed to production in AWS a greenfield enterprise Java/Spring/AngularJS
               application with real-time auditing, alerts, multi-factor authentication, and
                automated analysis of user-generated field reports for global health organizations.</li>
              <li>Use CI/CD pipelines for both Java and AngularJS application to shrink time
               to production from days to minutes with Bamboo.</li>
              <li>Build and execute end-to-end data migration from legacy system reducing time
               to production by months with Spring Boot.</li>
            </ul>
            """)
        .employer("Armedia LLC.")
        .title("Lead Software Engineer")
        .start("Sept. 2015")
        .end("Oct. 2019")
        .skillsUsed(armLeadSkills)
        .otherPositions(armOtherPositions)
        .build();

    profile.setWorkItems(List.of(tbg, armLead));

    profile.setInterests(List.of("Homelab", "Foodie", "Travel"));

    List<Skill> techSkills = Skill.from(
        "Spring"
        , "Spring Security"
        , "Spring Boot"
        , "Spring Integration"
        , "Angular"
        , "AngularJS"
        , "Angular Material"
        , "React"
        , "PostgreSQL"
        , "PostGIS"
        , "MySQL"
        , "MongoDB"
        , "Hibernate"
        , "Solr"
        , "Elasticsearch"
        , "ActiveMQ"
        , "Kafka"
        , "Hazelcast"
        , "Alfresco"
        , "Apache Tomcat"
        , "Wildfly"
        , "Git"
        , "REST API"
        , "Maven/Gradle"
        , "NPM"
        , "Yarn"
        , "JMeter"
        , "Karma/Jasmine/Protractor"
        , "JUnit"
        , "Apache Geode"
        , "Apache Camel"
        , "SOAP");

    List<Skill> programmingSkills = List.of(
        Skill.builder()
            .name("Java")
            .level("100")
            .years("10")
            .build()
        , Skill.builder()
            .name("Javascript/Typescript")
            .level("60")
            .years("6")
            .build()
        , Skill.builder()
            .name("SQL")
            .level("40")
            .years("6")
            .build()
        , Skill.builder()
            .name("HTML/CSS")
            .level("60")
            .years("6")
            .build()
        , Skill.builder()
            .name("Bash")
            .level("50")
            .years("5")
            .build()
        , Skill.builder()
            .name("Python")
            .level("55")
            .years("3")
            .build()
    );

    List<Skill> cloudSkills = Skill.from(
        "AWS"
        , "EC2"
        , "S3"
        , "RDS"
        , "AmazonMQ"
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
        , "OpenShift"
        , "Kubernetes");

    List<Skill> otherSkills = Skill.from(
        "Gitlab"
        , "Bitbucket"
        , "JIRA"
        , "Bamboo"
        , "Jenkins"
        , "SonarQube"
        , "Artifactory"
        , "Contour"
        , "Software Development Lifecycle"
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
