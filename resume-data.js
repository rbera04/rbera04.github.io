/* Resume data source for dynamic PDF generation
   Keep this file as the single source of truth for both website and PDF.
   Update this object to change resume content site-wide.
*/

const resumeData = {
    name: 'Ranjan Bera',
    title: 'DevOps & Security Engineer',
    summary: 'DevOps & Security Engineer with 4.9 years of experience in cloud-native automation, AI infrastructure delivery, and SOC/SIEM operations. Expert in AWS, Kubernetes, Terraform, and CI/CD pipelines, with a strong focus on infrastructure security, observability, and compliance automation. Skilled in deploying AI/LLM workloads with Ollama, integrating FOSSology for open-source license compliance, and building secure, scalable, high-performance environments aligned with industry best practices.',
    email: 'ranjanbera1112@gmail.com',
    phone: '+91-9609231169',
    location: 'Kolkata, West Bengal, 700102',
    linkedin: 'https://www.linkedin.com/in/ranjanbera1112/',
    github: 'https://github.com/rbera04',

    basics: {
        name: 'Ranjan Bera',
        label: 'DevOps & Security Engineer',
        email: 'ranjanbera1112@gmail.com',
        phone: '+91-9609231169',
        location: 'Kolkata, West Bengal, 700102',
        github: 'https://github.com/rbera04',
        linkedin: 'https://www.linkedin.com/in/ranjanbera1112/'
    },

    skills: [
        'AWS', 'Kubernetes', 'Terraform', 'Docker', 'Helm', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'ArgoCD', 'Python', 'Bash', 'Prometheus', 'Grafana', 'CloudWatch'
    ],

    technicalSkills: [
        'Tools: Jenkins, ArgoCD, Git, Docker, Helm',
        'Container Orchestration: Kubernetes, Docker',
        'Cloud Provider: AWS',
        'Infra as Code (IaC): Terraform',
        'Scripting: shell, Python, JavaScript',
        'Monitoring & Logging: Prometheus, Grafana, ELK',
        'Version Control: GitHub, GitLab, AWS CodeCommit'
    ],

    softSkills: [
        'Strong communication and collaboration skills',
        'Problem-solving and critical thinking',
        'Team player with a focus on cross-functional teamwork',
        'Ability to adapt quickly to new technologies',
        'Time management and task prioritization',
        'Analytical mind-set for performance optimization'
    ],

    experience: [
        {
            title: 'DevOps Engineer',
            company: 'TATA Consultancy Services Ltd.',
            location: 'Kolkata',
            duration: 'December 2021 – Present',
            summary: 'Lead secure cloud-native automation and AI infrastructure initiatives for enterprise clients, with a strong emphasis on compliance, observability, and reliability.',
            responsibilities: [
                'Designed and deployed AI infrastructure for LLM workloads using Ollama, including GPU-enabled Kubernetes nodes for high-performance inference and model lifecycle management.',
                'Automated Amazon EKS cluster provisioning with Terraform, including VPC networking, IAM roles, and IRSA configuration to enable secure pod-to-AWS service communication.',
                'Designed and implemented Jenkins (Groovy scripted) and GitLab CI/CD pipelines, reducing release cycle time by 50% and improving deployment reliability.',
                'Integrated SAST security scanning into CI/CD workflows, ensuring zero critical vulnerabilities in production deployments and strengthening DevSecOps compliance.',
                'Exposed private EKS services securely through CloudFront, regional API Gateway, and custom domains with high availability and low latency.',
                'Deployed and secured self-hosted GitLab on EKS with RDS and Redis, integrating OAuth2 Proxy and GitLab SSO for centralized authentication for Jenkins and Kibana.',
                'Built Kubernetes observability stack with Prometheus, Grafana, and InfluxDB, reducing manual analysis effort by 60% across 100+ services.',
                'Reduced container CVE exposure by 80% through dependency updates and OS-level patching for Python, Node.js, and WildFly images.',
                'Optimized Amazon EC2 spend by 40% through right-sizing, Reserved Instances/Savings Plans, and idle resource elimination.',
                'Cut Amazon S3 costs by 20% with lifecycle policies, intelligent tiering, and storage class optimization.',
                'Reduced monitoring costs by 60% through log ingestion optimization, retention tuning, and query frequency reduction.'
            ]
        }
    ],

    education: [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'Vidyasagar University, West Bengal',
            year: 'June 2021',
            details: 'CGPA: 8.73/10. Relevant coursework: Advanced Networking, Cloud Computing, Software Project Management.'
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Midnapore College (Autonomous), West Bengal',
            year: 'June 2019',
            details: 'Percentage: 64.12%. Relevant coursework: Data Structure & Algorithms, Computer Networks, Operating Systems, Database Management.'
        }
    ],

    certifications: [
        {
            name: 'Hands-on Approach to AI for Real-World Applications (CertID: 241911G1619)',
            link: 'assets/certificates/AI4ICPS_Certs.pdf'
        },
        {
            name: 'DevOps Engineer from Edureka (CertID: PST4Z9TCA)',
            link: 'https://www.edureka.co/lms/certificate/82fa8fcc1e7b92c8a609473fe01f6379'
        }
    ],

    awards: [
        'Recognized for driving digital DevOps improvements impacting more than five BFSI clients.',
        'Awarded Star of the Quarter at TCS for ownership and consistent delivery in Digital DevOps.',
        'Received three Applause awards at TCS for on-call support and issue resolution.'
    ],

    projects: [
        {
            name: 'CI/CD Pipeline for Microservices',
            description: 'Built an end-to-end Jenkins CI/CD pipeline for microservice applications using Kubernetes and Helm, streamlining build, test, and deployment processes to reduce manual intervention and accelerate delivery.',
            link: 'https://github.com/rbera04'
        },
        {
            name: 'Infrastructure Automation',
            description: 'Automated AWS infrastructure provisioning with Terraform and reusable modules, enabling repeatable environment creation and faster onboarding.',
            link: 'https://github.com/rbera04'
        }
    ]
};

// Export for modules (not required on GitHub Pages but harmless)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
}
