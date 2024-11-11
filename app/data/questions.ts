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
        explanation: "AWS DMS helps migrate databases to AWS quickly and securely. The source database remains fully operational during migration, minimizing downtime. It supports homogeneous migrations (Oracle to Oracle) and heterogeneous migrations (Oracle to different database)."
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
        explanation: "Application Load Balancer operates at Layer 7 and automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IP addresses) in multiple Availability Zones, ensuring high availability and fault tolerance."
    }
];