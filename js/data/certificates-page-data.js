/* ═══════════════════════════════════════════════
   CERTIFICATES PAGE DATA
   All certificate information for the certificates page
   ═══════════════════════════════════════════════ */

const CertificatesPageData = {
  certificates: [
    {
      id: 'fullstack-mobile',
      title: 'Mobile Application Development (Full Stack)',
      provider: 'Together We Go Academy',
      duration: '70 Hours',
      category: 'Mobile Development',
      filterCategory: 'mobile',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/FullStack.png',
      imageAlt: 'Mobile Application Development Full Stack Certificate',
      description: 'A comprehensive 70-hour course covering Flutter and Dart for building modern, production-ready mobile applications from scratch.',
      overview: 'This intensive program covered the complete mobile development lifecycle using Flutter and Dart. From UI design principles to backend integration, the course provided hands-on experience building real-world applications. Topics included state management, API integration, local storage, and app deployment to production environments.',
      skills: [
        'Flutter framework for cross-platform development',
        'Dart programming language fundamentals',
        'State management with GetX and Provider',
        'RESTful API integration and HTTP networking',
        'Local database implementation with SQLite',
        'Firebase integration for backend services',
        'Material Design and Cupertino widgets',
        'App publishing on Google Play Store'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: null
    },
    {
      id: 'cybersecurity-devsec',
      title: 'Information Security Training Program',
      provider: 'DEVSEC Academy × Jadara University',
      duration: '40 Hours',
      category: 'Cybersecurity',
      filterCategory: 'cybersecurity',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/DEVSEC.jpeg',
      imageAlt: 'Information Security Training Certificate',
      description: 'An advanced 40-hour cybersecurity program covering network security, penetration testing, and defensive security strategies.',
      overview: 'This specialized training program provided deep knowledge in information security practices. The curriculum covered network security fundamentals, vulnerability assessment, penetration testing methodologies, and defensive security strategies. The program included hands-on labs and real-world scenario-based learning.',
      skills: [
        'Network security and threat analysis',
        'Penetration testing methodologies',
        'Vulnerability assessment and reporting',
        'Defensive security strategies',
        'Security tools and frameworks',
        'Risk management and compliance',
        'Incident response procedures',
        'Security best practices for software development'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: null
    },
    {
      id: 'pcep-python',
      title: 'PCEP — Certified Entry-Level Python Programmer',
      provider: 'Python Institute',
      duration: '',
      category: 'Programming',
      filterCategory: 'programming',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/PCEP.png',
      imageAlt: 'PCEP Python Programmer Certificate',
      description: 'A professional certification validating entry-level Python programming skills including core language concepts and runtime environment.',
      overview: 'The PCEP certification demonstrates foundational knowledge of the Python programming language. It covers essential concepts including data types, control flow, procedures, and error handling. This certification validates the ability to write, debug, and maintain basic Python programs.',
      skills: [
        'Python data types and variables',
        'Control flow and conditional statements',
        'Functions and modules',
        'Error and exception handling',
        'Python runtime environment',
        'Object-oriented programming basics',
        'String and list operations',
        'Code documentation and best practices'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: 'https://pythoninstitute.org/pcep'
    },
    {
      id: 'python-essentials-2',
      title: 'Python Essentials 2',
      provider: 'Cisco Networking Academy',
      duration: '',
      category: 'Programming',
      filterCategory: 'programming',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/PythonEssentials2.png',
      imageAlt: 'Python Essentials 2 Certificate',
      description: 'An advanced Python programming course covering intermediate concepts, modules, file handling, and object-oriented programming.',
      overview: 'Building on the fundamentals covered in Python Essentials 1, this course dives deeper into intermediate Python concepts. Topics include advanced data structures, module development, file processing, and comprehensive object-oriented programming. The curriculum emphasizes practical coding skills and problem-solving techniques.',',
      skills: [
        'Advanced Python data structures',
        'Module and package development',
        'File handling and processing',
        'Object-oriented programming in Python',
        'Working with third-party libraries',
        'Data processing and manipulation',
        'Advanced function techniques',
        'Code optimization and best practices'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: 'https://www.netacad.com/'
    },
    {
      id: 'cpp-programming',
      title: 'C++ Programming',
      provider: 'Online Learning Platform',
      duration: '',
      category: 'Programming',
      filterCategory: 'programming',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/C++.png',
      imageAlt: 'C++ Programming Certificate',
      description: 'A comprehensive C++ programming course covering fundamentals, object-oriented programming, memory management, and standard library usage.',
      overview: 'This course provided a thorough understanding of the C++ programming language. From basic syntax and data types to advanced concepts like templates, STL, and memory management, the curriculum built a solid foundation for systems programming and software development.',
      skills: [
        'C++ syntax and language fundamentals',
        'Object-oriented programming with classes',
        'Memory management and pointers',
        'Standard Template Library (STL)',
        'File I/O operations',
        'Exception handling',
        'Templates and generic programming',
        'Algorithm and data structure implementation'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: null
    },
    {
      id: 'ieee-ai-hackathon',
      title: 'IEEE Jordan AI Modeling Hackathon',
      provider: 'IEEE Jordan Section',
      duration: '',
      category: 'AI & Community',
      filterCategory: 'ai-community',
      status: 'Completed',
      statusClass: 'completed',
      image: '/assets/Certificates/IEEE.png',
      imageAlt: 'IEEE AI Modeling Hackathon Certificate',
      description: 'Participation in an AI modeling hackathon organized by IEEE Jordan Section, focusing on machine learning and artificial intelligence applications.',
      overview: 'This hackathon brought together students and professionals to collaborate on AI and machine learning projects. The event focused on developing innovative solutions using artificial intelligence techniques, fostering teamwork and problem-solving skills in a competitive yet collaborative environment.',
      skills: [
        'Machine learning fundamentals',
        'AI model development and training',
        'Data preprocessing and analysis',
        'Team collaboration under time constraints',
        'Problem-solving in competitive environments',
        'Presentation and communication skills'
      ],
      date: '2024',
      credentialId: null,
      verificationUrl: null
    }
  ],

  stats: [
    { icon: 'certificates', label: '6 Certificates' },
    { icon: 'hours', label: '110+ Hours of Training' },
    { icon: 'categories', label: '4 Skill Categories' },
    { icon: 'calendar', label: '2024' }
  ]
};

window.CertificatesPageData = CertificatesPageData;
