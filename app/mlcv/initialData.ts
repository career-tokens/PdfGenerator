import { MLCVData } from "../../dataModels/MLCVData";

export  const mLInitialData:MLCVData = {
    name: "Tina Huang",
    email: "hellotinah@gmail.com",
    phone: "123-456-7890",
    phoneNeeded:true,
    address: "1  BeepbeepBoop St. Philadelphia,PA 19104",
    addressNeeded:true,
    education: [
        {
        university: "University of Pennsylvania, School of Engineering and Applied Science,",
        universityLocation: "Philadelphia, PA",
            course: "Masters in Computer Science(MCIT)",
        period:"May 2020",
        details: ["Cumulative GPA:3.7/4.0", "Relevent Coursework:Machine Learning,Data Science,Statistics,Big Data Analytics,Probability and Discrete Mathematics"],
    },
    {
        university: "University of Toronto, Trinity College",
        universityLocation: "Toronto, ON",
        period:"May 2017",
        course: "Honors Bachelor of Science with High Distinction (Pharmacology Specialist)",
        details:["Cumulative GPA:3.8/4.0,Pharmacology GPA:3.9/4.0,Dean's List","St. Hildas's Scholarship,Trinity Chancellor's Scholarship($1000 awarded to top 2% of program"]
    }
    ],
    educationNeeded:true,
    professionalExperience: [
        {
            company: "Goldman Sachs Group ,Inc.",
            companyLocation: "New York, NY",
            period:"June 2019 - August 2019",
            role: "Data Science & Machine Learning Summer Analyst, Securities Division",
            tasks: ["• Utilized python to implement unsupervised machine learning techniques for time series anomaly detection on 3TB of unstructured data, which reduced total process time by 20%",
                "• Wrangled 10TB of trading data stored in hadoop distributed file system using scala to remodel and visualize 16 previously inaccessible datasets to allow 500+ end clients to track impact of trades on liquidity",
                "• Presented results to team’s global head and wrote requested executive summary detailing value proposition and strategy to present to end clients and senior leadership",
            ]
        },
        {
            company: "Ontario Institute for Cancer Research",
            companyLocation: "Toronto, ON",
            period: "May 2017 - April 2018",
            role: "Junior Data Scientist",
            tasks: ["• Utilized python and R on high performance computing Linux cluster to discover 3 new cancer mutations",
                "• Publication: Huang T, Reimand J. Network-rewiring mutation in kinase signaling networks are informative of cancer patient survival in preparation.",
            `• Publication: Krassowski M, Paczkowska M, Cullion K, Huang T et al., ActiveDriverDB: human disease mutations and
            genome variation in post-translational modification sites of proteins. Nucleic Acids Res. 2017. doi:10.1093/nar/gkx973.`]
        }
    ],
    professionalExperienceNeeded: true,
    skills: [{
        topic: "Programming Languages:",
        description:"• Python, R, Java, Scala, C, C++, JavaScript, HTML, CSS, Lua"
    },
        {
            topic: "Big Data and Machine Learning:",
            description:"• Spark, Hadoop, MongoDB, Python (eg. scikit-learn, numpy, pandas, matplotlib"
        },
        {
            topic: "Data Science & Miscellaneous Technologies:",
            description:"• A/B testing, ETL, Data science pipeline (cleansing, wrangling, visualization, modeling, interpretation), Statistics, Time series, Experimental design, Hypothesis testing, OOP, OOD, APIs, Excel, Git"
        }],
    skillsNeeded: true,
    projectsAndLeadership: [{
        role: "Teaching Assistant",
        location: "Toronto, ON",
        program: "Mathematical Foundations of Computer Science (University of Pennsylvania)",
        period: "April 2018 - September 2018",
        tasks:["• Collaborated with instructor and 5 other TAs to lead recitations, grade coursework, and answer 60+ students’ questions"]
    },
        {
            role: "Cofounder & Business Lead",
            location: "Toronto, ON",
            program: "Tali (University of Toronto Hatchery Startup Accelerator)",
            period: "April 2018 - September 2018",
            tasks:[`• Pitched to a private therapy provider to raise 5K for creation of subscription based web application that helps
            university students with autism and/or ADHD achieve academic goals`,
                "• Surveyed 20+ students and consulted with board certified therapists to create alpha prototype.",
                "• Pitched weekly throughout the accelerator program and ultimately chosen as top 10 of 50 teams"
            ]
        },
        {
            role: "President",
            location: "Toronto, ON",
            program: "TechXplore (University of Toronto) ",
            period: "March 2016 - May 2017",
            tasks:[`• Led team of 5 students to collaborate with technology experts (eg. R, Python, AutoCAD) to create a total of 8 workshops,
            expositions, and hackathons that gathered a combined 1000+ attendees.`,
                "• Established and maintained 4 sponsorships with university faculties, companies, and other clubs",
            ]
        },
        {
            role: "Wet Lab Lead",
            location: "Toronto, ON",
            program: "International Genetically Engineered Machine (iGEM Toronto) ",
            period: "March 2016 - June 2017",
            tasks:[`• Collaborated with 6 executive members to design and implement synthetic biology projects for 16 general members.`,
                "• Developed a light controlled genetic switch to control CRISPR/CAS9 gene editing (Bronze medal)",
                "• Created biologically reactive paper sensors for cheap and eco-friendly gold detection (Bronze medal)"
            ]
        }],
    projectsAndLeadershipNeeded:true
}