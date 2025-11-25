export const resumeData = {
  profile: {
    name: "Hyunho Kook",
    title: "M.S. Student in CS @ POSTECH",
    location: "Pohang, Korea / Pittsburgh, PA",
    email: "kookhh0827@postech.ac.kr",
    github: "https://github.com/kookhh0827", 
    scholar: "https://scholar.google.com/citations?user=X4vG8UoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/hyunho-kook/", // Placeholder
    image: "/my_photo.jpg", 
  },
  interests: [
    "Neuromorphic Computing",
    "Spiking Neural Networks",
    "Efficient AI Systems",
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
        "Audio Language Model for Speaker Profiling (Prof. Bhiksha Raj)",
        "Language Model Agent System and Acceleration (Prof. Beidi Chen)",
        "Diffusion Transformer and Efficiency (Prof. Andrea Zanette)"
      ]
    },
    {
      role: "Undergraduate Research Intern",
      org: "POSTECH (Efficient Computing Lab)",
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
      org: "POSTECH (Efficient Computing Lab)",
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
      title: "Maximal Coupling Speculative Jacobi Decoding",
      authors: "Junhyuk So, Hyunho Kook, Eunhyeok Park",
      venue: "ICLR 2026 (Under Review)",
      status: "under_review",
      desc: "Accelerate Autoregressive Image/Video Generation ~12x Times With No Loss."
    },
    {
      title: "Stabilizing Direct Training of Spiking Neural Networks: Membrane Potential Initialization and Threshold-robust Surrogate Gradient",
      authors: "Hyunho Kook, Byeongho Yu, Jeongmin Oh, Eunhyeok Park",
      venue: "WACV 2026",
      status: "accepted",
      desc: "Handle Temporal Covariate Shift and Instability in Surrogate Gradient Descent."
    },
    {
      title: "Grouped Speculative Decoding for Autoregressive Image Generation",
      authors: "Junhyuk So, Juncheol Shin, Hyunho Kook, Eunhyeok Park",
      venue: "ICCV 2025",
      status: "accepted",
      desc: "Accelerate Autoregressive Image Generation ~3x Times With Minimal Loss."
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
  awards: [
    { title: "Bachelor's Best Paper", year: "2023", org: "POSTECH" },
    { title: "CODEGATE CTF Competition (2nd place, University Section)", year: "2020", org: "Codegate" },
    { title: "DEFCON 27 CTF (9th place)", year: "2019", org: "Defcon" },
  ],
  grants: [
    {
      title: "Full Scholarship",
      org: "POSTECH",
      amount: "$3,000 per semester",
      period: "2018-2023"
    },
    {
      title: "Global Leadership Program",
      org: "POSTECH",
      amount: "$3,000 per semester",
      period: "2019-2023"
    }
  ]
};

