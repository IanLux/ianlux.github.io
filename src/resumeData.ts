export interface Experience {
  title: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  skills: string[];
  description: string[];
  imagePlaceholder?: string;
  secondaryMedia?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const resumeData = {
  personalInfo: {
    name: "Ian Doles - Gameplay Programmer",
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
      imagePlaceholder: "/pictures/nicktoons_dice.png",
      secondaryMedia: "/pictures/nicktoons_dice.mp4"
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
      imagePlaceholder: "/pictures/pakinpaks.png",
      secondaryMedia: "/pictures/pakinpaks.mp4"
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
      imagePlaceholder: "/pictures/miraculous.png",
      secondaryMedia: "/pictures/miraculous.mp4"
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
      imagePlaceholder: "/pictures/trolls_remix_rescue.png",
      secondaryMedia: "/pictures/trolls_remix_rescue.mp4"
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
      imagePlaceholder: "/pictures/gamble_tower.png",
      secondaryMedia: "/pictures/gamble_tower.mp4"
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
      imagePlaceholder: "/pictures/kart_racers_3.png",
      secondaryMedia: "/pictures/kart_racers_3.mp4"
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
      imagePlaceholder: "/pictures/kukoos.png",
      secondaryMedia: "/pictures/kukoos.mp4"
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
      imagePlaceholder: "/pictures/advultra.png",
      secondaryMedia: "/pictures/advultra.mp4"
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
