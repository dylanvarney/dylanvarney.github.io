// Graphs
import graph_abac from "../images/graph-abac.png";
import graph_crowdstrike from "../images/graph-crowdstrike.jpg";
import graph_hraas from "../images/graph-hraas.png";
import graph_adou from "../images/graph-adou.jpg";
import graph_https from "../images/graph-https.png";

// Icons
import icon_asquick from "../images/asquick.png";
import icon_ag from "../images/ag.jpg";
import icon_aws from "../images/aws.svg";
import icon_azure from "../images/azure.svg";
import icon_flavour from "../images/flavour.png";
import icon_git from "../images/git.svg";
import icon_github from "../images/github.svg";
import icon_google from "../images/google.svg";
import icon_griffith from "../images/griffith.png";
import icon_kg from "../images/kg.png";
import icon_markdown from "../images/markdown.svg";
import icon_meraki from "../images/meraki.png";
import icon_microsoft from "../images/microsoft.svg";
import icon_notion from "../images/notion.png";
import icon_obsidian from "../images/obsidian.svg";
import icon_okta from "../images/okta.svg";
import icon_optus from "../images/optus.png";
import icon_postman from "../images/postman.svg";
import icon_powershell from "../images/powershell.png";
import icon_slack from "../images/slack.svg";
import icon_terraform from "../images/terraform.svg";
import icon_unet from "../images/unet.png";
import icon_vscode from "../images/vscode.svg";
import icon_windows from "../images/windows.svg";

export const Bio = {
  name: "Dylan Varney",
  roles: [
    "Systems Administrator",
    "Identity SME",
    "Tech Enthusiast",
    "HomeLab Techie",
  ],
  description:
    "I am responsible for the design, implementation, and ongoing management of Infrastructure, Automation and IAM (Identity & Access Management) projects. I am motivated by the opportunity to solve complex IT challenges, and learn new technologies.",
  github: "https://github.com/dylanvarney",
  linkedin: "https://www.linkedin.com/in/dylan-varney/",
  resume: "https://docs.google.com/document/d/11ZZQgDib-65nbYv1z_6ZhtqIO_MUj0B9/edit?usp=sharing&ouid=115185625270761438730&rtpof=true&sd=true",
};

export const skills = [
  {
    title: "Identity and Directory",
    skills: [
      {
        name: "Okta",
        image: icon_okta,
      },
      {
        name: "Entra",
        image: icon_azure,
      },
      {
        name: "Active Directory",
        image: icon_microsoft,
      },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      {
        name: "AWS",
        image: icon_aws,
      },
      {
        name: "Terraform",
        image: icon_terraform,
      },
      {
        name: "Windows Server",
        image: icon_windows,
      },
      {
        name: "SCCM",
        image: icon_windows,
      }
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "Powershell",
        image: icon_powershell,
      },
      {
        name: "Markdown",
        image: icon_markdown,
      },
    ],
  },
  {
    title: "Productivity",
    skills: [
      {
        name: "Microsoft 365",
        image: icon_microsoft,
      },
      {
        name: "Google Workspaces",
        image: icon_google,
      },
      {
        name: "Slack",
        image: icon_slack,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: icon_git,
      },
      {
        name: "GitHub",
        image: icon_github,
      },
      {
        name: "VS Code",
        image: icon_vscode,
      },
      {
        name: "Obsidian",
        image: icon_obsidian,
      },
      {
        name: "Postman",
        image: icon_postman,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: icon_ag,
    role: "Systems Administrator",
    company: "Auto & General",
    date: "Oct 2022",
    desc: "Worked with business units across the organisation to implement SSO and SCIM for platforms; Managed AWS Infrastructure through Terraform; Automated tasks through Powershell and API; Maintained Active Directory and Okta; Followed the Change Management process.",
    skills: [
      "Okta",
      "Active Directory",
      "AWS",
      "Terraform",
      "Entra ID",
      "Azure",
      "Powershell",
      "Windows Server",
      "Google Workspace",
      "WSUS",
      "Cohesity",
      "Group Policy",
      "CyberArk",
      "Crowdstrike",
      "vSphere",
    ],
    doc: "",
  },
  {
    id: 1,
    img: icon_ag,
    role: "Senior Desktop Support Engineer",
    company: "Auto & General",
    date: "Oct 2020 - Oct 2022",
    desc: "As a Senior Desktop Support Engineer, my day was spent maintaining a large-scale SCCM Infrastructure, Windows Endpoints and VDIs; Packaging and deploying software and updates for endpoints; Creating internal and customer support documentation for Windows 10; Follow the Change Management process.",
    skills: [
      "SCCM",
      "Active Directory",
      "Windows Server",
      "Postgres",
      "Printer Management",
      "Google Workspace",
      "Group Policy",
      "WSUS",
      "Office 365",
      "Powershell",
    ],
    doc: "",
  },
  {
    id: 2,
    img: icon_unet,
    role: "Support Engineer",
    company: "UmbrellaNET",
    date: "Jan 2018 - Oct 2020",
    desc: "Led customer migrations and deployments to Cloud infrastructure (Primarily Cisco Meraki and Azure based environment), co-ordinating both remotely and onsite throughout the process; Upgrading AD and Windows Server infrastructure; Administration of Active Directory, Group Policies, Azure AD, Exchange Online and Office 365; Managing hardware and software procurement; Administration of antivirus, backup, and storage platforms; Performed routine updates of Servers, Network Appliances and Applications.",
    skills: [
      "Azure","Meraki","Active Directory","Windows Server","Exchange Online","Trend Micro","Cisco AMP","Acronis Cloud Backup",
    ],
    doc: "",
  },
  {
    id: 3,
    img: icon_optus,
    role: "Junior Systems Administrator",
    company: "Singtel Optus",
    date: "Aug 2016 - Jan 2017",
    skills: [
      "vSphere","Windows Server","Cisco IOS","WSUS",
    ],
    doc: "",
  },
  {
    id: 4,
    img: icon_asquick,
    role: "Systems Integrator",
    company: "AsQuick IT",
    date: "Jan 2016 - Aug 2016",
    doc: "",
  },
];

export const education = [
  {
    id: 8,
    img: icon_aws,
    school: "AWS",
    date: "2023",
    desc: `Teaches how to install, configure, automate, monitor, secure, maintain, and troubleshoot the services, networks, and systems on AWS.`,
    degree: "Cloud Operations on AWS",
  },
  {
    id: 9,
    img: icon_okta,
    school: "Okta",
    date: "2022",
    desc: "The exam covers the familiarity with Okta technologies and processes related to directory integration, Single Sign-On (SSO) federation, and application provisioning aspects of User Lifecycle Management.",
    degree: "Certified Professional",
  },
  {
    id: 13,
    img: icon_flavour,
    school: "Flavour Creations",
    date: "2019",
    desc: `5 Day Course
The programme accelerates employees career potential and shapes their leadership experience through practical opportunities and learning modules related to finance, quality assurance, workplace health and safety, customer awareness and new product development.`,
    degree: "Emerging Leaders Program",
  },
  {
    id: 14,
    img: icon_meraki,
    school: "Cisco Meraki",
    date: "2019",
    desc: "Teaches how to operate Meraki solutions as a unified management system of an entire network.",
    degree: "ECMS1",
  },
  {
    id: 15,
    img: icon_azure,
    school: "Azure",
    date: "2018",
    desc: "Teaches the processes of implementing Cloud Services, Web Applications, Virtual Machines, Storage, Azure AD, Virtual Networks on Azure Infrastructure.",
    degree: "Implementing Microsoft Azure Infrastructure Solutions",
  },
  {
    id: 19,
    img: icon_griffith,
    school: "Griffith",
    date: "2015",
    degree: "Diploma of Information Technology",
  },
  {
    id: 20,
    img: icon_kg,
    school: "Kelvin Grove State School",
    date: "2014",
    degree: "Queensland Certificate of Education",
  },
];

export const projects = [
  {
    id: 0,
    title: "People Data Enhancement",
    date: "Aug 2023 -",
    description:
      `Phase 1 - Design and implementation of attribute level sourcing through Powershell from several People Systems into Active Directory through File-based ETL.

Phase 2 - Integration of HRaaS (HR as a Source) into Okta, sourcing from UKG Ready, Aurion, and Workday, configured to writeback to AD. Implementation of ABAC (Attribute-Based Access Control) for roles and licensing into downstream applications.
      
      `,
    image: graph_hraas,
    tags: ["Okta", "Powershell", "SCIM", "HRaaS"],
    category: "identity",
  },
  {
    id: 10,
    title: "Okta User Lifecycle",
    date: "Apr 2023 -",
    description:
      `Implementation of SCIM and automated User Lifecycle Management (LCM) for dozens of critical Enterprise applications to automate tedious provisioning, updating, deprovisioning, role and licence administration processes, strengthening the organisation's Identity Fabric. Defining new group conventions to manage Okta Assignment and Downstream Application Groups. Below are some of the noteworthy integrations: 

      Azure - Migrated from On-Premise Azure AD Connect to sourcing the identities through Okta, configuring Universal Sync to meet full feature parity. Saving an effort of approximately 300 manual user administration tasks per month. 

      Slack - Capturing and implementing full end-to-end birthright access to company and division-level channels. Working with multiple business units to deliver and manage the enterprise rollout of Slack.  

      KnowBe4 - Preventing manual file-based user administration into the platform, improving data cleanliness and accuracy. 

      Databricks - Uplifting the four existing Databrick environment integrations to meet our standard conventions and access policies. 

      New Relic - Liased with the relevant stakeholders to align the platform to the new group model for Roles and User types, resulting in the access being more scalable
      `,
      image: graph_abac,
    tags: ["Okta", "AD", "Azure", "Slack"],
    category: "identity",
  },
  {
    id: 20,
    title: "AD Organisational Unit Restructure",
    date: "Oct 2022 - Jan 2023",
    description:
      "Design and implementation of an OU restructure and security model for AD Users, Computers, Groups, and Servers. Creation of tooling for capturing and auditing LDAP search queries to minimise impact.",
    image: graph_adou,
    tags: ["Active Directory"],
    category: "identity",
  },
  {
    id: 30,
    title: "HTTPS Enablement for SCCM",
    date: "Aug 2022 - Sep 2022",
    description:
      "Configuration of the Site and Site Servers for signed communication, updating IIS Bindings and Security, creation of Certificate Templates and documenting of the final state.",
    image: graph_https,
    tags: ["SCCM", "PKI", "AD"],
    category: "endpoint",
  },
  {
    id: 31,
    title: "EDR Deployment and Migration",
    date: "Jun 2022 - Jul 2022",
    description:
      "Creation of an automated phased deployment for Crowdstrike, with consultation of the internal Information Security department regarding their requirements and development of a package for both the monitoring and cutover phases.",
    image: graph_crowdstrike,
    tags: ["Crowdstrike", "SCCM", "Powershell"],
    category: "endpoint",
  },
];

