package com.maksudsharif.portfolioserver;

import com.maksudsharif.portfolioserver.model.Education;
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
        , "Docker"
        , "OpenShift"
        , "PostGIS"
        , "SOAP/WSDL");
    WorkItem tbg = WorkItem.builder()
        .description("""
            <p>Take lead of the direction, capabilities, and implementation 
                of web-based solutions in classified and unclassified environments.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Spear-headed development of mission-critical 
                (mapping, workflow, authentication/authorization) 
                features/capabilities for Spring Boot application and 
                delivered 2 months ahead of schedule.</li>
              <li>Modernized data ingestion pipeline from legacy SOAP 
                systems to modern search application with Python, Kafka, 
                and Elasticsearch.</li>
            </ul>
            """)
        .employer("The Buffalo Group, LLC")
        .title("Software Engineer")
        .start("Oct. 2019")
        .end("Present")
        .skillsUsed(tbgSkills)
        .build();

    List<Skill> armLeadSkills = Skill.from("Java"
        , "Spring"
        , "Spring Boot"
        , "Angular"
        , "AngularJS"
        , "Linux"
        , "AWS"
        , "Solr"
        , "Solr Cloud"
        , "SolrJ");
    WorkItem armLead = WorkItem.builder()
        .description("""
            <p>As architect and tech lead for high visibility project,
              lead the design, implementation, testing, and deployment
              of new features for production applications.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Delivered 5 product releases to production 
                environments in AWS to global user-base improving 
                average API response times by 2-3x and improving 
                security controls as verified by third-party audits.</li>
              <li>Propose and re-architect search subsystem of
                production application with Solr Cloud to improve
                query response times by 2-10x.</li>
            </ul>
            """)
        .employer("Armedia LLC.")
        .title("Lead Software Engineer")
        .start("Sept. 2018")
        .end("Oct. 2019")
        .skillsUsed(armLeadSkills)
        .build();

    List<Skill> armSkills = Skill.from("Java"
        , "Spring"
        , "Spring Boot"
        , "AngularJS"
        , "Linux"
        , "AWS"
        , "CI/CD"
        , "Multifactor Authentication"
        , "Security"
        , "Agile/Scrum");
    WorkItem arm = WorkItem.builder()
        .description("""
            <p>Took ownership of high-visibility, high-impact end-user
              features and deployed to production an application
              for global health organization with global user-base. Features included:</p>
            <ul>
              <li>On-demand OCR: Remove manual parsing and copying of multi-page PDF documents.</li>
              <li>Real-time Auditing: Track all changes to user-data for analytics and compliance.</li>
              <li>Automated validation of external data sources to streamline data ingestion and reduce user error by 20%.</li>
            </ul>
            """)
        .accomplishments("""
            <ul>
              <li>Deployed to production in AWS an enterprise Java/Spring/AngularJS application
                with real-time auditing, alerts, multi-factor authentication, and automated
                analysis of user-generated field reports for global health organizations.
              </li>
              <li>Use CI/CD pipelines for
                both Java and AngularJS application to reduce time
                to production from days to minutes with Bamboo.
              </li>
              <li>Build and execute end-to-end data migration
                from legacy system reducing time to production by
                months.
              </li>
            </ul>
            """)
        .employer("Armedia LLC.")
        .title("Software Engineer")
        .start("Feb. 2016")
        .end("Sept. 2018")
        .skillsUsed(armSkills)
        .build();

    List<Skill> armJuniorSkills = Skill.from("Java"
        , "Spring"
        , "AngularJS"
        , "Alfresco"
        , "JUnit");
    WorkItem armJunior = WorkItem.builder()
        .description("""
            <p>Analyze and implement new features from product
              roadmap for enterprise Java application with Spring and
              AngularJS.</p>
            """)
        .accomplishments("""
             <ul>
              <li>Add user preferences module to product to allow quick customization of user dashboards in AngularJS application.</li>
              <li>Improve unit and integration test coverage of Java backend services by 5%.</li>
            </ul>
             """)
        .employer("Armedia LLC.")
        .title("Junior Software Engineer")
        .start("Sept. 2015")
        .end("Feb. 2016")
        .skillsUsed(armJuniorSkills)
        .build();

    profile.setWorkItems(List.of(tbg, armLead, arm, armJunior));

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
