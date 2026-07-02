/* ═══════════════════════════════════════════════
   PROJECTS PAGE DATA
   Single source of truth for all project information
   ═══════════════════════════════════════════════ */

const ProjectsPageData = {
  featured: [
    {
      id: 'student-life-manager',
      title: 'Student Life Manager',
      category: 'Mobile Application',
      year: '2025',
      status: 'Published on Google Play',
      statusClass: 'published',
      team: false,
      description: 'A mobile application created during my Flutter course to help university students organize courses, assignments, notes and schedules using local storage.',
      overview: 'Student Life Manager is a comprehensive mobile application designed specifically for university students. It helps organize academic life by managing courses, tracking assignments, taking notes, and scheduling study sessions. The app uses local SQLite storage for offline functionality.',
      role: {
        title: 'Sole Developer',
        responsibilities: [
          'Designed and developed the complete Flutter application.',
          'Built the UI and application architecture.',
          'Integrated Firebase and local storage.',
          'Implemented task management, subjects, notes and reminders.',
          'Published the application on Google Play.'
        ]
      },
      technologies: ['Flutter', 'Dart', 'SQLite', 'GetX State Management', 'Material Design'],
      features: [
        'Course management with semester organization',
        'Assignment tracking with due dates and priorities',
        'Note-taking system with rich text support',
        'Schedule planner for class timetables',
        'Offline functionality with local SQLite database',
        'Clean, intuitive Material Design interface'
      ],
      learned: [
        'Flutter cross-platform development',
        'Local database implementation with SQLite',
        'App publishing on Google Play Store',
        'Mobile UI/UX design principles',
        'State management with GetX'
      ],
      contribution: 'Designed and developed the entire application from scratch. Implemented SQLite local database for offline storage, created the complete UI/UX design, and successfully published the app on Google Play Store.',
      github: SiteConfig.github['student-life-manager'],
      playStore: 'https://play.google.com/store/apps/details?id=com.hussein.student_life_manager',
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/student-life-manager/home.png', alt: 'Student Life Manager home screen' },
        { src: '/assets/projects/student-life-manager/Subjects.png', alt: 'Subjects management view' },
        { src: '/assets/projects/student-life-manager/tasks.png', alt: 'Task tracking interface' },
        { src: '/assets/projects/student-life-manager/notes.png', alt: 'Notes section' }
      ]
    },
    {
      id: 'jadarabus',
      title: 'JadaraBus',
      category: 'Graduation Project',
      year: '2026',
      status: 'Completed',
      statusClass: 'completed',
      team: true,
      description: 'A graduation project designed to simplify transportation for university students through a modern web platform that improves communication between students and transportation providers.',
      overview: 'JadaraBus is a comprehensive transportation management platform built as a graduation project. The system connects students with university transportation services, allowing route booking, schedule management, and real-time tracking. It features both student and admin interfaces.',
      role: {
        title: 'Full Stack Developer (Graduation Team)',
        responsibilities: [
          'Contributed to frontend and backend development.',
          'Implemented transportation management features.',
          'Collaborated with the graduation project team.',
          'Participated in planning, testing and debugging.'
        ],
        note: 'This project was developed collaboratively as a university graduation project. The GitHub repository is maintained by one of the team members.'
      },
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'PostgreSQL'],
      features: [
        'Student route booking and scheduling',
        'Real-time bus tracking and notifications',
        'Admin panel for route and schedule management',
        'User authentication with role-based access',
        'Responsive design for mobile and desktop',
        'Database-driven route optimization'
      ],
      learned: [
        'React with TypeScript development',
        'Supabase backend integration',
        'PostgreSQL database design',
        'Real-time data synchronization',
        'Team collaboration with Git and Trello'
      ],
      contribution: 'Co-developed the frontend with React and TypeScript. Implemented Supabase integration for real-time data, managed PostgreSQL database schema design, and developed the admin panel interface.',
      github: SiteConfig.github['jadarabus'],
      githubLabel: 'View Team Repository',
      githubNote: 'This project was developed collaboratively as a university graduation project. The repository is maintained by one of the team members.',
      playStore: null,
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/jadarabus/Home.png', alt: 'JadaraBus home page' },
        { src: '/assets/projects/jadarabus/login.png', alt: 'Login interface' },
        { src: '/assets/projects/jadarabus/manage.png', alt: 'Management dashboard' },
        { src: '/assets/projects/jadarabus/tasks.png', alt: 'Task management view' },
        { src: '/assets/projects/jadarabus/CreateRoute.png', alt: 'Route creation interface' },
        { src: '/assets/projects/jadarabus/ChoseRoute.png', alt: 'Route selection screen' },
        { src: '/assets/projects/jadarabus/AdminPanel.png', alt: 'Admin panel dashboard' }
      ]
    },
    {
      id: 'skillhub',
      title: 'SkillHub',
      category: 'Flutter + Backend',
      year: '2026',
      status: 'Completed',
      statusClass: 'completed',
      team: false,
      description: 'A Capture The Flag (CTF) platform built during my Flutter Full Stack course where users solve cybersecurity challenges, submit flags, and practice security concepts through interactive challenges.',
      overview: 'SkillHub is an interactive cybersecurity learning platform that gamifies security education through Capture The Flag challenges. Users can attempt various security challenges, submit flags to earn points, and compete on leaderboards. The platform includes admin features for challenge management.',
      role: {
        title: 'Flutter Developer',
        responsibilities: [
          'Built the mobile application using Flutter.',
          'Connected the application with backend APIs.',
          'Implemented challenge management and leaderboard screens.',
          'Improved the user experience and navigation.'
        ]
      },
      technologies: ['Flutter', 'Dart', 'Python', 'REST API', 'Git', 'Challenge Management'],
      features: [
        'User registration and authentication system',
        'Interactive CTF challenge interface',
        'Flag submission and validation system',
        'Leaderboard and scoring system',
        'Admin panel for challenge creation',
        'Responsive design for all devices'
      ],
      learned: [
        'Flutter UI development and state management',
        'Backend API integration',
        'Authentication flow implementation',
        'Full stack architecture design',
        'Cybersecurity challenge mechanics'
      ],
      contribution: 'Built the complete Flutter frontend with responsive UI, integrated Python REST API backend, implemented user authentication and challenge submission flow, and developed the admin panel for challenge management.',
      github: SiteConfig.github['skillhub'],
      playStore: null,
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/skillhub/Login.jpeg', alt: 'SkillHub login screen' },
        { src: '/assets/projects/skillhub/Challenges.jpeg', alt: 'Challenges listing page' },
        { src: '/assets/projects/skillhub/CreateChanllenge.jpeg', alt: 'Challenge creation interface' },
        { src: '/assets/projects/skillhub/ManageChallenge.jpeg', alt: 'Challenge management view' },
        { src: '/assets/projects/skillhub/leaderboard.jpeg', alt: 'Leaderboard rankings' },
        { src: '/assets/projects/skillhub/AdminPanel.jpeg', alt: 'Admin panel dashboard' }
      ]
    },
    {
      id: 'flowwork',
      title: 'FlowWork',
      category: 'Team Project',
      year: '2025',
      status: 'Completed',
      statusClass: 'completed',
      team: true,
      description: 'A project management system developed with my university team to practice backend development, MVC architecture, authentication and collaborative software development.',
      overview: 'FlowWork is a robust project management platform built as a collaborative team project. The system provides comprehensive tools for task tracking, team coordination, and project workflow management. It emphasizes clean architecture and scalable code practices.',
      role: {
        title: 'Backend Developer (Team Project)',
        responsibilities: [
          'Developed backend features using Laravel.',
          'Worked on authentication and database design.',
          'Implemented project and task management features.',
          'Collaborated with the team using Git.'
        ]
      },
      technologies: ['Laravel', 'PHP', 'MySQL', 'Git', 'MVC Architecture', 'Bootstrap'],
      features: [
        'Secure user authentication system',
        'Project and task management dashboard',
        'Team member collaboration tools',
        'Progress tracking and reporting',
        'File attachment and document management',
        'Responsive interface for mobile access'
      ],
      learned: [
        'Laravel framework development',
        'MVC architectural patterns',
        'Database design and optimization',
        'Git branching strategies',
        'Team development workflows'
      ],
      contribution: 'Implemented the authentication system and MVC backend architecture. Developed core team collaboration features and managed database schema design for optimal performance.',
      github: SiteConfig.github['flowwork'],
      playStore: null,
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/flowwork/dashboard.png', alt: 'FlowWork dashboard overview' },
        { src: '/assets/projects/flowwork/projects.png', alt: 'Projects management view' },
        { src: '/assets/projects/flowwork/tasks.png', alt: 'Task tracking interface' },
        { src: '/assets/projects/flowwork/team.png', alt: 'Team collaboration features' }
      ]
    }
  ],

  embedded: [
    {
      id: 'security-alarm',
      title: 'Security Alarm System',
      category: 'Embedded Systems',
      year: '2024',
      status: 'Completed',
      statusClass: 'completed',
      team: false,
      description: 'An Arduino-based security alarm system using ultrasonic sensors to detect intruders and trigger audible and visual alerts.',
      overview: 'The Security Alarm System is an embedded hardware project that uses an Arduino Uno microcontroller with ultrasonic sensors to detect unauthorized access. When an object is detected within range, the system triggers a buzzer and LED indicators to alert about potential security breaches.',
      technologies: ['Arduino Uno', 'Ultrasonic Sensor', 'Buzzer', 'LED', 'Embedded C'],
      features: [
        'Real-time distance measurement with ultrasonic sensor',
        'Audible alert system with adjustable buzzer',
        'Visual indicators with LED status lights',
        'Configurable detection range threshold',
        'Low power consumption design',
        'Reliable hardware interrupts for instant response'
      ],
      learned: [
        'Hardware debugging and troubleshooting',
        'Sensor integration and calibration',
        'Embedded C programming for microcontrollers',
        'System testing with physical hardware',
        'Circuit design and prototyping'
      ],
      contribution: 'Designed and implemented the complete embedded system. Programmed the Arduino microcontroller, integrated ultrasonic sensors, and developed the alert mechanism with buzzer and LED outputs.',
      github: null,
      playStore: null,
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/arduino/Security Alarm System/ME.png', alt: 'Developer with the security alarm system' },
        { src: '/assets/projects/arduino/Security Alarm System/SmartRing.png', alt: 'Smart ring component of the system' },
        { src: '/assets/projects/arduino/Security Alarm System/Theprojects.jpeg', alt: 'Complete security alarm project setup' }
      ]
    },
    {
      id: 'autonomous-robot',
      title: 'Autonomous Robot Car',
      category: 'Embedded Systems',
      year: '2024',
      status: 'Completed',
      statusClass: 'completed',
      team: false,
      description: 'An autonomous robot car built with Arduino that uses sensors for obstacle avoidance and gas detection.',
      overview: 'The Autonomous Robot Car is a sophisticated embedded systems project featuring a self-navigating vehicle powered by Arduino. The robot uses ultrasonic sensors for obstacle avoidance and gas sensors for environmental monitoring, demonstrating advanced sensor integration and motor control.',
      technologies: ['Arduino', 'Motor Driver', 'Ultrasonic Sensor', 'Gas Sensor', 'DC Motors'],
      features: [
        'Autonomous obstacle avoidance navigation',
        'Gas detection and environmental monitoring',
        'Motor control for precise movement',
        'Sensor fusion for decision making',
        'Programmable navigation patterns',
        'Real-time sensor data processing'
      ],
      learned: [
        'Motor control and driver integration',
        'Obstacle avoidance algorithms',
        'Sensor calibration and data processing',
        'Embedded systems integration',
        'Robotics programming fundamentals'
      ],
      contribution: 'Designed and built the complete autonomous robot. Integrated motor drivers, programmed obstacle avoidance logic, calibrated gas sensors, and implemented the decision-making algorithm for autonomous navigation.',
      github: null,
      playStore: null,
      liveDemo: null,
      gallery: [
        { src: '/assets/projects/arduino/Autonomous Robot/MEWithCar.png', alt: 'Developer with the autonomous robot car' },
        { src: '/assets/projects/arduino/Autonomous Robot/CAR.png', alt: 'Autonomous robot car front view' },
        { src: '/assets/projects/arduino/Autonomous Robot/Car2.png', alt: 'Robot car side view showing components' },
        { src: '/assets/projects/arduino/Autonomous Robot/GAS.png', alt: 'Gas sensor integration detail' }
      ]
    }
  ],

  miniProjects: [
    {
      id: 'cv-project',
      title: 'CV Project',
      description: 'A personal CV/resume builder application created to practice Flutter UI development and document formatting.',
      technologies: ['Flutter', 'Dart']
    },
    {
      id: 'flag-picker',
      title: 'Flag Picker',
      description: 'An interactive flag selection app that displays country flags, built to practice state management and UI components.',
      technologies: ['Flutter', 'Dart']
    }
  ],

  stats: [
    { icon: 'projects', label: '4 Featured Projects' },
    { icon: 'check', label: '1 Published App' },
    { icon: 'team', label: 'Team & Individual Projects' },
    { icon: 'calendar', label: '2024–2026' }
  ]
};
