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
    }
];