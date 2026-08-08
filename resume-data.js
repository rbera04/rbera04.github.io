/* Resume data source for dynamic PDF generation
   Keep this file as the single source of truth for both website and PDF.
   Update this object to change resume content site-wide.
*/

const resumeData = {
    name: 'Ranjan Bera',
    title: 'AWS DevOps Engineer',
    summary: 'AWS DevOps Engineer with 4.9+ years of experience in cloud-native automation, AI infrastructure delivery, and SOC/SIEM operations. Expertise in AWS, Kubernetes, Terraform, and CI/CD pipelines, with a strong focus on infrastructure security, observability, and compliance automation. Proven track record of reducing infrastructure costs by up to 30% and deployment times by 35% through GitOps and Infrastructure as Code. Experienced in deploying AI/LLM workloads with Amazon Bedrock and Ollama, integrating FOSSology for open-source license compliance, and building secure, scalable, high-performance environments aligned with industry best practices.',
    email: 'ranjanbera1112@gmail.com',
    phone: '+91-9609231169',
    location: 'Kolkata, West Bengal, 700102, INDIA',
    linkedin: 'https://www.linkedin.com/in/ranjanbera1112/',
    github: 'https://github.com/rbera04',

    basics: {
        name: 'Ranjan Bera',
        label: 'AWS DevOps Engineer',
        email: 'ranjanbera1112@gmail.com',
        phone: '+91-9609231169',
        location: 'Kolkata, West Bengal, 700102, INDIA',
        github: 'https://github.com/rbera04',
        linkedin: 'https://www.linkedin.com/in/ranjanbera1112/'
    },

    skills: [
        'AWS', 'Kubernetes', 'Terraform', 'Docker', 'Helm', 'Jenkins', 'CI/CD', 'GitHub Actions', 'ArgoCD', 'Python', 'Bash', 'Observability and Monitoring', 'Infrastructure Security', 'Compliance Automation', 'AI/LLM Workload Deployment', 'Amazon Bedrock'
    ],

    technicalSkills: [
        'Tools: Jenkins, ArgoCD, Git, Docker, Helm, SonarQube, Nexus, Fortify',
        'Container Orchestration: Kubernetes, Docker',
        'Cloud Provider: AWS',
        'Infra as Code (IaC): Terraform, Tofu, AWS CloudFormation',
        'Scripting: shell, Python, JavaScript',
        'Monitoring & Logging: Prometheus, Grafana, ELK, CloudTrail, CloudWatch Logs Insights',
        'Version Control: GitHub, GitLab, AWS CodeCommit'
    ],

    softSkills: [
        'Strong communication and collaboration skills',
        'Problem-solving and critical thinking',
        'Team player with a focus on cross-functional teamwork',
        'Ability to adapt quickly to new technologies',
        'Time management and task prioritization',
        'Analytical mindset for performance optimization'
    ],

    experience: [
        {
            title: 'DevOps Engineer',
            company: 'TATA Consultancy Services Ltd.',
            location: 'Kolkata, INDIA',
            duration: 'December 2021 – Present',
            summary: 'Lead secure, cloud-native automation and AI infrastructure initiatives for enterprise clients, driving measurable improvements in compliance, observability, deployment reliability, and infrastructure cost efficiency.',
            responsibilities: [
                'Designed, implemented, and maintained cloud-native AWS infrastructure for enterprise-scale applications, improving system reliability and deployment velocity.',
                'Managed highly available, scalable, and secure Amazon EKS (Kubernetes) clusters, ensuring 99.9% uptime through operational excellence best practices.',
                'Developed reusable Terraform modules for VPC, IAM, S3, EKS, networking, and platform services, reducing infrastructure provisioning time by 40%.',
                'Built and optimized CI/CD pipelines using Jenkins, GitLab CI/CD, Helm, and ArgoCD, reducing deployment time by 35% and improving release frequency.',
                'Implemented GitOps workflows for Kubernetes deployments using ArgoCD, improving deployment reliability by 30% and reducing manual intervention by 50%.',
                'Automated infrastructure provisioning and application deployment using Infrastructure as Code (Terraform), eliminating manual configuration errors and reducing setup time by 45%.',
                'Implemented secure access patterns using IAM Roles for Service Accounts (IRSA) and AWS Secrets Manager, strengthening cloud security posture and audit compliance.',
                'Built serverless automation solutions using AWS Lambda, Python, SNS, SQS, and EventBridge, reducing operational overhead by 25%.',
                'Implemented centralized authentication using OAuth2 Proxy integrated with GitLab, enhancing security and simplifying access management across environments.',
                'Optimized cloud infrastructure costs by 30% through strategic use of Spot Instances, Auto Scaling Groups, and Karpenter for dynamic Kubernetes node scaling.',
                'Developed monitoring, alerting, and observability solutions using CloudWatch, Grafana, and Prometheus, reducing incident response time (MTTR) by 40%.',
                'Implemented automated URL monitoring and notification systems for production environments, improving issue detection speed by 50%.',
                'Designed CloudFront-based maintenance and failover solutions, achieving high availability and reducing downtime during planned maintenance windows by 60%.',
                'Developed automated AWS Secrets Manager rotation frameworks using Lambda and Terraform, eliminating manual credential rotation and reducing security risk exposure.',
                'Collaborated cross-functionally with development, security, and operations teams to implement DevSecOps best practices, accelerating secure software delivery.',
                'Contributed to GenAI and LLMOps initiatives using Amazon Bedrock and Ollama, building RAG (Retrieval-Augmented Generation) proof-of-concepts and streaming architectures.'
            ]
        }
    ],

    education: [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'Vidyasagar University, West Bengal',
            year: 'Sept 2021',
            details: 'CGPA: 8.73/10. Relevant coursework: Advanced Networking, Cloud Computing, Software Project Management.'
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Midnapore College (Autonomous), West Bengal',
            year: 'June 2019',
            details: 'Percentage: 64.12%. Relevant coursework: Data Structures & Algorithms, Computer Networks, Operating Systems, Database Management.'
        }
    ],

    certifications: [
        {
            name: 'Hands-on Approach to AI for Real-World Applications (CertID: 241911G1619)',
            link: 'assets/certificates/AI4ICPS_Certs.pdf'
        },
        {
            name: 'DevOps Engineer, Edureka (CertID: PST4Z9TCA)',
            link: 'https://www.edureka.co/lms/certificate/82fa8fcc1e7b92c8a609473fe01f6379'
        }
    ],

    awards: [
        'Recognized for driving digital DevOps improvements across 5+ enterprise clients, enhancing infrastructure reliability and delivery efficiency.',
        'Awarded Star of the Quarter at TCS for outstanding ownership and consistent delivery in Digital DevOps.',
        'Received three Applause Awards at TCS for proactive on-call support and rapid issue resolution.'
    ],

    projects: [
        {
            name: 'CI/CD Pipeline for Microservices',
            description: 'Built an end-to-end Jenkins CI/CD pipeline for microservice applications using Kubernetes and Helm, automating build, test, and deployment stages to reduce manual intervention and accelerate release cycles.',
            link: 'https://github.com/rbera04'
        },
        {
            name: 'Infrastructure Automation',
            description: 'Automated AWS infrastructure provisioning using Terraform and reusable modules, enabling repeatable, version-controlled environment creation and faster team onboarding.',
            link: 'https://github.com/rbera04'
        }
    ]
};

// Export for modules (not required on GitHub Pages but harmless)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
}