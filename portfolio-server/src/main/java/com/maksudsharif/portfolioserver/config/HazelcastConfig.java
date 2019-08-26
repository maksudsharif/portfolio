package com.maksudsharif.portfolioserver.config;

import com.hazelcast.config.AwsConfig;
import com.hazelcast.config.Config;
import com.hazelcast.config.GroupConfig;
import com.hazelcast.config.InterfacesConfig;
import com.hazelcast.config.JoinConfig;
import com.hazelcast.config.ManagementCenterConfig;
import com.hazelcast.config.MulticastConfig;
import com.hazelcast.config.NetworkConfig;
import com.hazelcast.config.TcpIpConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.Assert;

import java.util.List;

@Configuration
public class HazelcastConfig
{
    private static final String AWS_ACCESS_KEY = "access-key";
    private static final String AWS_SECRET_KEY = "secret-key";
    private static final String AWS_REGION = "region";
    private static final String AWS_SECURITY_GROUP_NAME = "security-group-name";
    private static final String AWS_TAG_KEY = "tag-key";
    private static final String AWS_TAG_VALUE = "tag-value";
    private static final String AWS_HZ_PORT = "hz-port";
    private static final String AWS_USE_PUBLIC_IP = "use-public-ip";
    private static final String SLF4J = "slf4j";

    @Value("${profilehz.hazelcast.instance.id}")
    private String instanceId;
    @Value("${profilehz.hazelcast.instance.name}")
    private String instanceName;
    @Value("${profilehz.hazelcast.group.name}")
    private String groupName;
    @Value("${profilehz.hazelcast.group.password}")
    private String groupPassword;

    @Value("${profilehz.hazelcast.management_center.enabled}")
    private boolean enableManagementCenter = false;
    @Value("${profilehz.hazelcast.management_center.url}")
    private String managementCenterUrl;
    @Value("${profilehz.hazelcast.management_center.update_interval}")
    private int managementCenterUpdateInterval;

    @Value("${profilehz.hazelcast.network.port}")
    private int networkPort;
    @Value("${profilehz.hazelcast.network.port.auto_increment}")
    private boolean networkAutoIncrement = false;
    @Value("${profilehz.hazelcast.network.multicast.enabled}")
    private boolean networkEnableMulticast = false;
    @Value("${profilehz.hazelcast.network.multicast.port}")
    private int networkMulticastPort;
    @Value("${profilehz.hazelcast.network.multicast.group}")
    private String networkMulticastGroup;
    @Value("${profilehz.hazelcast.network.multicast.timeout_seconds}")
    private int networkMulticastTimeoutInSeconds;
    @Value("${profilehz.hazelcast.network.multicast.loopback_mode_enabled}")
    private boolean networkMulticastLoopbackEnabled = false;
    @Value("${profilehz.hazelcast.network.multicast.ttl}")
    private int networkMulticastTtl;
    @Value("${profilehz.hazelcast.network.tcp_ip.enabled}")
    private boolean networkEnableTcpIp = false;
    @Value("${profilehz.hazelcast.network.tcp_ip.members}")
    private List<String> networkTcpIpMembers;
    @Value("${profilehz.hazelcast.network.interfaces.enabled}")
    private boolean networkEnableInterfaces = false;
    @Value("${profilehz.hazelcast.network.interfaces.interface}")
    private List<String> networkInterfacesInterface;

    @Value("${profilehz.hazelcast.network.aws.enabled}")
    private boolean networkEnableAWS = false;
    @Value("${profilehz.hazelcast.network.aws.access-key}")
    private String awsAccessKey;
    @Value("${profilehz.hazelcast.network.aws.secret-key}")
    private String awsSecretKey;
    @Value("${profilehz.hazelcast.network.aws.region}")
    private String awsRegion;
    @Value("${profilehz.hazelcast.network.aws.security-group-name}")
    private String awsSecurityGroupName;
    @Value("${profilehz.hazelcast.network.aws.iam-role}")
    private String awsIamRole;
    @Value("${profilehz.hazelcast.network.aws.tag-key}")
    private String awsTagKey;
    @Value("${profilehz.hazelcast.network.aws.tag-value}")
    private String awsTagValue;
    @Value("${profilehz.hazelcast.network.aws.hz-port}")
    private String awsHzPort;
    @Value("${profilehz.hazelcast.network.aws.use-public-ip}")
    private boolean awsUsePublicIP = true;

    @Value("${profilehz.hazelcast.diagnostics.enabled}")
    private boolean enableDiagnostics = false;
    @Value("${profilehz.hazelcast.log.state}")
    private boolean logState = false;
    @Value("${profilehz.hazelcast.logging.type}")
    private String loggingType = SLF4J;
    @Value("${profilehz.hazelcast.socket.bind.any}")
    private boolean socketBindAny;

    @Bean
    public Config hazelcastConfiguration()
    {
        Config config = new Config();
        GroupConfig groupConfig = new GroupConfig()
                .setName(groupName)
                .setPassword(groupPassword);

        ManagementCenterConfig managementCenterConfig = new ManagementCenterConfig()
                .setEnabled(enableManagementCenter)
                .setUrl(managementCenterUrl)
                .setUpdateInterval(managementCenterUpdateInterval);

        NetworkConfig networkConfig = config.getNetworkConfig()
                .setPort(networkPort)
                .setPortAutoIncrement(networkAutoIncrement);

        InterfacesConfig interfaces = config.getNetworkConfig().getInterfaces()
                .setEnabled(networkEnableInterfaces);

        if (networkEnableInterfaces)
        {
            Assert.notNull(networkInterfacesInterface, "Network interfaces required if HZ interfaces enabled");
            interfaces.setInterfaces(networkInterfacesInterface);
            networkConfig.setInterfaces(interfaces);
        }

        JoinConfig join = config.getNetworkConfig().getJoin();

        MulticastConfig multicastConfig = join.getMulticastConfig()
                .setEnabled(networkEnableMulticast)
                .setMulticastPort(networkMulticastPort)
                .setMulticastGroup(networkMulticastGroup)
                .setMulticastTimeoutSeconds(networkMulticastTimeoutInSeconds)
                .setLoopbackModeEnabled(networkMulticastLoopbackEnabled)
                .setMulticastTimeToLive(networkMulticastTtl);
        join.setMulticastConfig(multicastConfig);

        TcpIpConfig tcpIpConfig = join.getTcpIpConfig()
                .setEnabled(networkEnableTcpIp);
        if (networkEnableTcpIp)
        {
            Assert.notNull(networkTcpIpMembers, "TCP IP Members required if HZ TCP IP enabled.");
            tcpIpConfig.setMembers(networkTcpIpMembers);
            join.setTcpIpConfig(tcpIpConfig);
        }

        AwsConfig awsConfig = join.getAwsConfig();
        awsConfig.setEnabled(networkEnableAWS);
        if (networkEnableAWS)
        {
            Assert.notNull(awsAccessKey, "AWS access key must not empty");
            Assert.notNull(awsSecretKey, "AWS secret key must not empty");
            Assert.notNull(awsRegion, "AWS region (i.e. us-west-1) must not empty");
            Assert.notNull(awsSecurityGroupName, "AWS security group name must not empty");
            Assert.notNull(awsTagKey, "AWS ec2 tag key must not empty");
            Assert.notNull(awsTagValue, "AWS ec2 tag value must not empty");
            Assert.notNull(awsHzPort, "AWS HZ port (range) must not empty");
            Assert.isTrue(networkEnableInterfaces, "AWS Configuration requires HZ interfaces to be enabled");
            Assert.notNull(networkInterfacesInterface, "AWS Configuration requires HZ network interfaces to be a valid IP/CIDR range");
            awsConfig
                    .setProperty(AWS_ACCESS_KEY, awsAccessKey)
                    .setProperty(AWS_SECRET_KEY, awsSecretKey)
                    .setProperty(AWS_REGION, awsRegion)
                    .setProperty(AWS_SECURITY_GROUP_NAME, awsSecurityGroupName)
                    .setProperty(AWS_TAG_KEY, awsTagKey)
                    .setProperty(AWS_TAG_VALUE, awsTagValue)
                    .setProperty(AWS_HZ_PORT, awsHzPort)
                    .setProperty(AWS_USE_PUBLIC_IP, String.valueOf(awsUsePublicIP));
            join.setAwsConfig(awsConfig);
        }

        networkConfig.setJoin(join);

        config
                .setInstanceName(instanceName)
                .setGroupConfig(groupConfig)
                .setManagementCenterConfig(managementCenterConfig)
                .setNetworkConfig(networkConfig)
                .setProperty("hazelcast.logging.type", loggingType)
                .setProperty("hazelcast.log.state", String.valueOf(logState))
                .setProperty("hazelcast.diagnostics.enabled", String.valueOf(enableDiagnostics))
                .setProperty("hazelcast.socket.bind.any", String.valueOf(socketBindAny));

        return config;
    }
}
