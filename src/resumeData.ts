export interface Experience {
  title: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  skills: string[];
  description: string[];
  imagePlaceholder?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const resumeData = {
  personalInfo: {
    name: "Ian Francesco Doles de Toledo",
    email: "iandoles@gmail.com",
    phone: "55+ (15) 98181-5512",
    linkedin: "https://www.linkedin.com/in/ian-doles-a5491316b/",
    github: "https://github.com/IanLux",
    aboutMe: [
      "Senior game developer with 6+ years of professional experience in programming, technical art, and game design.",
      "I have a passion for game development and all its facets, I’m proficient in C++, C#, Blueprints, and shader development. Always happy to learn new technologies and collaborate with others."
    ]
  },
  experience: [
    {
      title: "Nicktoons & The Dice of Destiny",
      role: "Senior Unreal/C++ Developer",
      company: "Petit Fabrik and GameMill Entertainment",
      period: "November 2024 - September 2025",
      skills: ["C++", "Unreal Engine 5", "GAS", "Jira", "Blueprints", "Git", "Porting", "Shaders", "VFX"],
      description: [
        "Released for all major gaming platforms at the time (PC, Switch 1 and 2, PS5, Xbox Series X/S).",
        "Helped on the leading and the management of the development team.",
        "Implemented playable characters such as Katara, Jimmy Neutron, Danny Phantom and Timmy Turner, creating their skills and moveset using GAS and C++.",
        "Developed downloadable content system for skins and a major undisclosed alternate game mode.",
        "Optimized and ported the game into Nintendo Switch 1 and 2 and other consoles."
      ],
      imagePlaceholder: "Nicktoons & The Dice of Destiny"
    },
    {
      title: "Pakinpaks",
      role: "Lead Unreal/C++ Developer and Tech Artist",
      company: "Indiebuild Team and Catoptric Games",
      period: "December 2024 - Q1 2026",
      skills: ["C++", "Blueprints", "UE5", "Autodesk Maya"],
      description: [
        "Responsible for the entire development of this project, with highlights being customization systems, procedural puzzles and cinematic systems.",
        "Responsible for all technical art and optimization of the game, including support for low-end modes using mobile rendering techniques.",
        "Created all visual effects and materials for the game."
      ],
      imagePlaceholder: "Pakinpaks"
    },
    {
      title: "Miraculous - Paris Under Siege",
      role: "Lead Unreal/C++ Developer",
      company: "Petit Fabrik and GameMill Entertainment",
      period: "October 2023 - October 2024",
      skills: ["C++", "Unreal Engine 4", "Jira", "Blueprints", "Git", "Porting", "Shaders", "VFX"],
      description: [
        "Released for all major gaming platforms at the time (PC, Switch, PS5, PS4, Xbox One, Xbox Series X/S).",
        "Responsible for leading and managing the development team.",
        "Developed both playable characters alongside with all their traversing and combat mechanics.",
        "Optimized and ported the game into Nintendo Switch and other consoles."
      ],
      imagePlaceholder: "Miraculous - Paris Under Siege"
    },
    {
      title: "DreamWorks Trolls Remix Rescue",
      role: "Senior Unreal/C++ Developer and Level Designer",
      company: "Petit Fabrik and GameMill Entertainment",
      period: "July 2022 - October 2023",
      skills: ["C++", "Unreal Engine 4", "Blueprints", "Git", "Porting", "Shaders", "VFX"],
      description: [
        "Released for all major gaming platforms (PC, Switch, PS5, PS4, Xbox One, Xbox Series X/S).",
        "Developed the character customization tool, player mechanics (climbing, swinging and other traverse mechanics).",
        "Developed several enemies (Violint, Boombeast, Anglerbuses).",
        "Made AI for roaming villagers and several other systems.",
        "Designed several levels for the game.",
        "Optimized and ported the game into Nintendo Switch and other consoles."
      ],
      imagePlaceholder: "DreamWorks Trolls Remix Rescue"
    },
    {
      title: "Gamble Tower",
      role: "Lead Unity/C# Developer",
      company: "Indiebuild",
      period: "March 2021 - September 2023",
      skills: ["C#", "Unity", "Autodesk Maya", "Substance Painter", "FL Studio", "Audacity"],
      description: [
        "Responsible for the entire programming of this project, with highlights being procedurally generated characters, floors, challenges, combats.",
        "As the lead game designer, making the game well-rounded and balanced was one of my responsibilities as well."
      ],
      imagePlaceholder: "Gamble Tower"
    },
    {
      title: "Nickelodeon Kart Racers 3",
      role: "Mid Tech-Artist and VFX Artist",
      company: "Petit Fabrik, Bamtang Games and GameMill Entertainment",
      period: "June 2022 - October 2022",
      skills: ["Unreal Engine 4", "Blueprints", "Sequences", "Git", "Shaders", "VFX"],
      description: [
        "Worked on multiple visual effects and shaders for the game.",
        "Focused on the development of VFX for trailers and cinematic movies."
      ],
      imagePlaceholder: "Nickelodeon Kart Racers 3"
    },
    {
      title: "Kukoos: Lost Pets",
      role: "Mid Unreal/C++ Developer and Tech Artist",
      company: "Petit Fabrik and Modus Games",
      period: "August 2020 - December 2022",
      skills: ["C++", "Unreal Engine 4", "Blueprints", "Autodesk Maya", "Git"],
      description: [
        "Released for Xbox One, PS4, Nintendo Switch and Steam.",
        "Responsible for developing the entire programming and mechanics of several key features such as Monktopus/Frog (the final boss) and Petri (one of the game’s main pets).",
        "Developed a plethora of particle systems and special effects for other bosses, characters and mechanics.",
        "Worked on the porting for all platforms, but specially for Nintendo Switch."
      ],
      imagePlaceholder: "Kukoos: Lost Pets"
    },
    {
      title: "ADVULTRA",
      role: "Lead Unity/C# Developer",
      company: "Indiebuild",
      period: "July 2019 - July 2020",
      skills: ["C#", "Unity", "Adobe Photoshop", "FL Studio", "Audacity", "Git"],
      description: [
        "Developed the entire game from scratch and published it on Play Store.",
        "(No longer available, but there are videos on YouTube)"
      ],
      imagePlaceholder: "ADVULTRA"
    },
    {
      title: "Game Development Teacher (SAGA)",
      role: "Teacher",
      company: "School of Art, Game and Animation (SAGA)",
      period: "August 2019 - August 2020",
      skills: ["Unreal Engine 4", "Blueprints", "ZBrush", "Autodesk Maya", "Adobe Photoshop", "Substance Painter", "Git"],
      description: [
        "Teached the students several game development softwares such as Unreal Engine, Autodesk Maya, Substance Painter and Pixologic ZBrush.",
        "Responsible for managing students' projects until the end of the course, as well as helping with the delivery."
      ],
      imagePlaceholder: "SAGA"
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["C++", "C#", "Python", "GDScript", "GML", "Unreal Blueprints", "Gameplay Ability System (GAS)"]
    },
    {
      category: "Game Engines",
      items: ["Unreal Engine", "Unity", "Godot", "Game Maker", "GMS"]
    },
    {
      category: "Source Control",
      items: ["Git", "GitHub", "Perforce", "TurtleSVN"]
    },
    {
      category: "Related Software",
      items: ["Autodesk Maya", "Blender", "Substance Painter", "Adobe Photoshop", "FL Studio", "Audacity", "ZBrush"]
    },
    {
      category: "Project Management Tools",
      items: ["Jira", "Trello", "Notion", "Obsidian", "Clickup", "Slack"]
    },
    {
      category: "Languages",
      items: ["English (Fluent)", "Brazilian Portuguese (Native Language)"]
    },
    {
      category: "Other Info",
      items: ["Knowledgeable in Unreal Materials, Unity Shaders and VFX/Particle Creation.", "Worked with devkits for PS5, Xbox Series, Switch 1 and Switch 2", "Developed Unreal and Unity tools and extensions for internal usage"]
    }
  ]
};
