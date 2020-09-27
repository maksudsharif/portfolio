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
    profile.setClearanceStatus("Current");
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
            <p>Responsible for developing full-stack solutions for a
              variety of web based applications including business
              systems, mission systems, and support systems.</p>
            <p>Work as part of multiple teams developing applications
              for both classified and unclassified environments. Help
              set the direction, implementation, and capabilities of
              the solutions to meet restrictions.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Design and develop geo-spatial, workflow, and
                authentication/authorization and other business
                critical features for reporting and mapping
                application.</li>
              <li>Develop and refine Python data ingestion pipeline
                from legacy SOAP systems to modern search
                application with Kafka.</li>
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
            <p>As architect and tech lead, provide guidance and
              mentorship for development teams in addition to the
              design, implementation, testing, and deployment of
              multiple new features for production applications.</p>
            """)
        .accomplishments("""
            <ul>
              <li>Deliver multiple product releases to production
                environments in AWS to global user-base improving
                average API response times by 2-3x and improve
                security based off third-party audits.
              </li>
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
            <p>Design, implement, test, and deploy application for global health
              organization with global user-base. Took
              ownership of business critical features with high
              visibility from end-users. Including, but not limited to:</p>
            <ul>
              <li>On-demand OCR: Remove manual parsing and copying of multi-page PDF documents.</li>
              <li>Real-time Auditing: Track all changes to user-data for analytics and compliance.</li>
              <li>Automated validation of external data sources to streamline data ingestion and reduce user error by 20%.</li>
            </ul>
            """)
        .accomplishments("""
            <ul>
              <li>Deploy enterprise Java/Spring/AngularJS
                application with real-time auditing, alerts, multi-factor authentication, and analysis of usergenerated field reports to production in AWS for
                global health organizations.
              </li>
              <li>Use CI/CD pipelines for
                both Java and AngularJS application to reduce time
                to production from days to minutes.
              </li>
              <li>Implement and execute end-to-end data migration
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
        , "Angular Material"
        , "React"
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
        , "Apache Camel"
        , "PostGIS");

    List<Skill> programmingSkills = List.of(
        Skill.builder()
            .name("Java")
            .level("100")
            .years("10")
            .build()
        , Skill.builder()
            .name("Javascript")
            .level("60")
            .years("6")
            .build()
        , Skill.builder()
            .name("Bash")
            .level("50")
            .years("5")
            .build()
    );

    List<Skill> cloudSkills = Skill.from(
        "AWS"
        , "EC2"
        , "S3"
        , "RDS"
        , "Ansible"
        , "Docker"
        , "OpenShift"
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
