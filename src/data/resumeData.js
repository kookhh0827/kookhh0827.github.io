export const resumeData = {
  profile: {
    name: "Hyunho Kook",
    title: "M.S. Student in CSE @ POSTECH",
    location: "Pohang, Korea",
    email: "kookhh0827@gmail.com",
    github: "https://github.com/kookhh0827",
    scholar: "https://scholar.google.com/citations?user=X4vG8UoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/hyunho-kook/",
    image: "/my_photo.jpg",
  },
  interests: [
    "Neuromorphic Computing & SNNs",
    "Efficient AI & Hardware Acceleration",
    "Generative AI & Large Models"
  ],
  education: [
    {
      school: "Pohang University of Science and Technology (POSTECH)",
      degree: "M.S. in Computer Science and Engineering",
      period: "Feb 2024 - Present",
      gpa: "4.15 / 4.30",
      advisor: "Prof. Eunhyeok Park",
    },
    {
      school: "Pohang University of Science and Technology (POSTECH)",
      degree: "B.S. in Computer Science and Engineering",
      period: "Feb 2018 - Feb 2024",
      gpa: "4.10 / 4.30 (Valedictorian)",
      advisor: "Prof. Jaesik Park & Prof. Eunhyeok Park",
    }
  ],
  experience: [
    {
      role: "Visiting Scholar",
      org: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      period: "Aug 2025 - Feb 2026",
      details: [
        "Language Model Agent System and Acceleration (Dr. Haizhong Zheng)",
        "Diffusion Transformer and Its Efficiency (Prof. Andrea Zanette)"
      ]
    },
    {
      role: "Undergraduate Research Intern",
      org: "POSTECH",
      location: "Pohang, Korea",
      period: "Jan 2023 - Dec 2023",
      details: [
        "Applied Neural Architecture Search on Spiking Neural Networks.",
        "Interpreted SNN Firing as Quantization Operations.",
        "Advisor: Prof. Eunhyeok Park"
      ]
    },
    {
      role: "Undergraduate Research Intern",
      org: "POSTECH",
      location: "Pohang, Korea",
      period: "Jan 2020 - Mar 2021",
      details: [
        "Contributed to Intel's Open3D Project, Improving The Performance of Clustering Algorithms.",
        "Advisor: Prof. Jaesik Park"
      ]
    },
  ],
  publications: [
    {
      title: "Speculative Coupled Decoding for Training-Free Lossless Acceleration of Autoregressive Visual Generation",
      authors: "Junhyuk So, **Hyunho Kook**, Chaeyeon Jang, Eunhyeok Park",
      venue: "ICML 2026 (Poster)",
      year: 2026,
      status: "accepted",
      links: {
        arxiv: "https://arxiv.org/abs/2510.24211",
        openreview: "https://openreview.net/forum?id=7a95PGL0Up"
      }
    },
    {
      title: "Stabilizing Direct Training of Spiking Neural Networks: Membrane Potential Initialization and Threshold-robust Surrogate Gradient",
      authors: "**Hyunho Kook**, Byeongho Yu, Jeongmin Oh, Eunhyeok Park",
      venue: "WACV 2026 (Poster)",
      year: 2026,
      status: "accepted",
      links: {
        arxiv: "https://arxiv.org/abs/2511.08708",
        code: "https://github.com/kookhh0827/SNN-MP-Init-TRSG"
      }
    },
    {
      title: "Grouped Speculative Decoding for Autoregressive Image Generation",
      authors: "Junhyuk So, Juncheol Shin, **Hyunho Kook**, Eunhyeok Park",
      venue: "ICCV 2025 (Poster)",
      year: 2025,
      status: "accepted",
      links: {
        arxiv: "https://arxiv.org/abs/2508.07747",
        code: "https://github.com/junhyukso/GSD",
        pdf: "https://openaccess.thecvf.com/content/ICCV2025/papers/So_Grouped_Speculative_Decoding_for_Autoregressive_Image_Generation_ICCV_2025_paper.pdf"
      }
    }
  ],
  teaching: [
    {
      role: "Teaching Assistant",
      course: "Binary Analysis and Attack",
      school: "POSTECH",
      period: "Sep 2024 - Dec 2024",
      details: [
        "Organized Weekly TA Sessions for Assignment Guidance and Q&A."
      ]
    },
    {
      role: "Teaching Assistant",
      course: "Problem Solving / AI Course",
      school: "POSTECH",
      period: "Mar 2020 - Dec 2020",
      details: [
        "Mentored Freshmen in Programming (C) and AI Concepts (Python)."
      ]
    }
  ],
  honors: [
    { title: "Bachelor's Best Paper", year: "2023", org: "POSTECH", type: "award" },
    { title: "CODEGATE CTF Competition (2nd place, University Section)", year: "2020", org: "CODEGATE", type: "award" },
    { title: "DEFCON 27 CTF (9th place)", year: "2019", org: "DEFCON", type: "award" },
    { title: "Full Scholarship", year: "2018 - 2023", org: "POSTECH", detail: "$3,000 per semester", type: "grant" },
    { title: "Global Leadership Program", year: "2019 - 2023", org: "POSTECH", detail: "$3,000 per semester", type: "grant" },
  ]
};
