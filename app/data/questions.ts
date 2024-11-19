export const awsQuestions = [
    {
        id: 1,
        text: "A company needs to migrate their on-premises Oracle database to AWS with minimal downtime. Which service should they use?",
        options: [
            "AWS Database Migration Service (DMS)",
            "AWS DataSync",
            "AWS Transfer Family",
            "AWS Application Migration Service"
        ],
        correctAnswer: 0,
        explanations: [
            "AWS DMS helps migrate databases to AWS quickly and securely. The source database remains fully operational during migration, minimizing downtime. It supports homogeneous migrations (Oracle to Oracle) and heterogeneous migrations (Oracle to different database).",
            "AWS DataSync is used for moving large amounts of data online between on-premises storage and AWS storage services, not specifically for database migration.",
            "AWS Transfer Family is used for transferring files into and out of AWS using SFTP, FTPS, and FTP, not for database migration.",
            "AWS Application Migration Service is used for rehosting applications on AWS, not specifically for database migration."
        ]
    },
    {
        id: 2,
        text: "Which AWS service should be used to automatically distribute incoming application traffic across multiple targets in multiple Availability Zones?",
        options: [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Application Load Balancer",
            "AWS Transit Gateway"
        ],
        correctAnswer: 2,
        explanations: [
            "AWS Global Accelerator is used to improve the availability and performance of your applications with users globally, not specifically for distributing traffic across multiple targets.",
            "Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, not for distributing application traffic across multiple targets.",
            "Application Load Balancer operates at Layer 7 and automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IP addresses) in multiple Availability Zones, ensuring high availability and fault tolerance.",
            "AWS Transit Gateway is used to connect VPCs and on-premises networks through a central hub, not for distributing application traffic."
        ]
    },
    {
        id: 3,
        text: "A company wants to store frequently accessed data with high durability and availability. Which AWS storage service should they use?",
        options: [
            "Amazon S3",
            "Amazon Glacier",
            "Amazon EBS",
            "Amazon EFS"
        ],
        correctAnswer: 3,
        explanations: [
            "Amazon Glacier is used for archival storage and is not suitable for frequently accessed data.",
            "Amazon EBS is a block storage service for use with EC2 instances, not for general data storage.",
            "Amazon EFS is a file storage service for use with EC2 instances, suitable for shared file storage.",
            "Amazon S3 is designed for 99.999999999% (11 9's) of durability and is ideal for storing frequently accessed data with high availability."
        ]
    },
    {
        id: 4,
        text: "Which AWS service can be used to decouple application components and allow them to communicate asynchronously?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "AWS Lambda",
            "Amazon RDS"
        ],
        correctAnswer: 1,
        explanations: [
            "Amazon SNS is a notification service for sending messages to multiple subscribers, not specifically for decoupling application components.",
            "Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.",
            "AWS Lambda is a compute service that lets you run code without provisioning or managing servers, not for decoupling components.",
            "Amazon RDS is a managed relational database service, not for decoupling application components."
        ]
    },
    {
        id: 5,
        text: "Which AWS service is best suited for real-time processing of streaming data?",
        options: [
            "Amazon Kinesis",
            "AWS Batch",
            "Amazon S3",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanations: [
            "Amazon Kinesis is designed for real-time processing of streaming data at scale.",
            "AWS Batch is used for running batch computing workloads, not real-time streaming.",
            "Amazon S3 is an object storage service, not specifically for real-time data processing.",
            "AWS Glue is a fully managed ETL service, not for real-time streaming data processing."
        ]
    },
    {
        id: 6,
        text: "Which AWS service provides a virtual network that closely resembles a traditional network?",
        options: [
            "Amazon VPC",
            "AWS Direct Connect",
            "AWS VPN",
            "Amazon CloudFront"
        ],
        correctAnswer: 2,
        explanations: [
            "AWS Direct Connect is a network service that provides an alternative to using the Internet to connect to AWS.",
            "AWS VPN is used to establish a secure connection between your on-premises network and your AWS VPC.",
            "Amazon VPC allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network.",
            "Amazon CloudFront is a content delivery network (CDN) service, not a virtual network."
        ]
    },
    {
        id: 7,
        text: "Which AWS service is used to manage infrastructure as code?",
        options: [
            "AWS CloudFormation",
            "AWS CodeDeploy",
            "AWS CodePipeline",
            "AWS Elastic Beanstalk"
        ],
        correctAnswer: 3,
        explanations: [
            "AWS CodeDeploy is a service that automates code deployments to any instance.",
            "AWS CodePipeline is a continuous integration and continuous delivery service for fast and reliable application and infrastructure updates.",
            "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.",
            "AWS CloudFormation allows you to model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications."
        ]
    },
    {
        id: 8,
        text: "Which AWS service can be used to monitor and manage billing and cost optimization?",
        options: [
            "AWS Cost Explorer",
            "AWS CloudTrail",
            "AWS CloudWatch",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanations: [
            "AWS Cost Explorer helps you view and analyze your costs and usage.",
            "AWS CloudTrail is a service that enables governance, compliance, and operational and risk auditing of your AWS account.",
            "AWS CloudWatch is a monitoring and management service built for developers, system operators, site reliability engineers (SRE), and IT managers.",
            "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources."
        ]
    },
    {
        id: 9,
        text: "Which AWS service is used to automate the deployment of applications?",
        options: [
            "AWS CodeDeploy",
            "AWS CodeBuild",
            "AWS CodeCommit",
            "AWS CodePipeline"
        ],
        correctAnswer: 1,
        explanations: [
            "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.",
            "AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises.",
            "AWS CodeCommit is a fully managed source control service that makes it easy for teams to host secure and scalable Git repositories.",
            "AWS CodePipeline is a continuous integration and continuous delivery service for fast and reliable application and infrastructure updates."
        ]
    },
    {
        id: 10,
        text: "Which AWS service is used to create a secure connection between an on-premises network and an AWS VPC?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "Amazon VPC",
            "AWS Transit Gateway"
        ],
        correctAnswer: 2,
        explanations: [
            "AWS Direct Connect is a network service that provides an alternative to using the Internet to connect to AWS.",
            "Amazon VPC allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network.",
            "AWS VPN allows you to establish a secure and private tunnel from your network or device to the AWS global network.",
            "AWS Transit Gateway is a service that enables customers to connect their Amazon Virtual Private Clouds (VPCs) and their on-premises networks to a single gateway."
        ]
    },
    {
        id: 11,
        text: "Which AWS service is used to store and retrieve any amount of data at any time?",
        options: [
            "Amazon S3",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon EBS"
        ],
        correctAnswer: 0,
        explanations: [
            "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
            "Amazon RDS is a managed relational database service.",
            "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.",
            "Amazon EBS provides block level storage volumes for use with EC2 instances."
        ]
    },
    {
        id: 12,
        text: "Which AWS service is used to run containerized applications?",
        options: [
            "Amazon ECS",
            "AWS Lambda",
            "Amazon EC2",
            "AWS Fargate"
        ],
        correctAnswer: 3,
        explanations: [
            "AWS Lambda is a compute service that lets you run code without provisioning or managing servers.",
            "Amazon EC2 provides scalable computing capacity in the AWS cloud.",
            "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS.",
            "Amazon ECS is a fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications."
        ]
    },
    {
        id: 13,
        text: "Which AWS service is used to manage and deploy serverless applications?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "AWS Elastic Beanstalk",
            "AWS CloudFormation"
        ],
        correctAnswer: 0,
        explanations: [
            "AWS Lambda is a compute service that lets you run code without provisioning or managing servers.",
            "Amazon EC2 provides scalable computing capacity in the AWS cloud.",
            "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.",
            "AWS CloudFormation allows you to model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications."
        ]
    },
    {
        id: 14,
        text: "Which AWS service is used to provide DNS services?",
        options: [
            "Amazon Route 53",
            "AWS CloudFront",
            "Amazon VPC",
            "AWS Direct Connect"
        ],
        correctAnswer: 1,
        explanations: [
            "AWS CloudFront is a content delivery network (CDN) service.",
            "Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service.",
            "Amazon VPC allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network.",
            "AWS Direct Connect is a network service that provides an alternative to using the Internet to connect to AWS."
        ]
    }
];