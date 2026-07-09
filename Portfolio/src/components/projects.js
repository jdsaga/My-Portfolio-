// ================= IMAGE IMPORTS =================

// --- Digital Art ---
import artwork1 from "../assets/Artworks/NINO NAKANO.png";
import artwork2 from "../assets/Artworks/LITTLE NIGHTMARES.png";
import artwork3 from "../assets/Artworks/vtuber-character.png";
import artwork4 from "../assets/Artworks/b&s.png";
import artwork5 from "../assets/Artworks/Deadpool and Wolverine.png";
import artwork6 from "../assets/Artworks/LUFFY G5 BAJRANG GUN.png";
import artwork7 from "../assets/Artworks/Shirogane and Kaguya Taking a Selfie.png";
import artwork8 from "../assets/Artworks/Compe Duo.png";
import artwork9 from "../assets/Artworks/Miguel chase Miles.png";
import artwork10 from "../assets/Artworks/sasuke.png";
import artwork11 from "../assets/Artworks/School_Girl.png";


// --- Animations ---
import animation1 from "../assets/Animation/NIGHT_ANIMATION.mp4";
import animation2 from "../assets/Animation/Cartoon Style Animation.mp4";


//---3D MODEL ---//
import angel1 from "../assets/3D_Models/Spiderman_Vs_Venom/Angle 1.png";
import angel2 from "../assets/3D_Models/Spiderman_Vs_Venom/Angle 2.png";
import angel3 from "../assets/3D_Models/Spiderman_Vs_Venom/Angle 3.png";
import angel4 from "../assets/3D_Models/Spiderman_Vs_Venom/Angle 4.png";
import angel5 from "../assets/3D_Models/Spiderman_Vs_Venom/Angle 5.png";
// ================= PROJECTS DATA =================

export const projects = [

  // ---------- Digital Art ----------
  {
    id: 1,
    title: "Nino Nakano",
    subtitle: "Digital Illustration",
    description: "Character illustration of Nino Nakano.",
    type: "artworks",
    typeLabel: "Pixel Art",
    image: { src: artwork1, caption: "Nino Nakano" },
    tags: ["Character Design", "Pixel"],
    featured: false,
  },
  {
    id: 2,
    title: "Little Nightmares",
    subtitle: "Digital Illustration",
    description: "Fan art inspired by Little Nightmares.",
    type: "artworks",
    typeLabel: "Pixel Art",
    image: { src: artwork2, caption: "Little Nightmares" },
    tags: ["Character Design", "Pixel"],
    featured: false,
  },
  {
    id: 3,
    title: "Vtuber Character Model Art",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Pixel Art",
    image: { src: artwork3, caption: "Vtuber Character" },
    tags: ["Character Design", "Pixel"],
    featured: false,
  },

  {
    id: 4,
    title: "Boruto And Sarada",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork4, caption: "Vtuber Character" },
    tags: ["Character Design", "Pixel"],
    featured: false,
  },
  {
    id: 5,
    title: "Deadpool And Wolverine",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Vector Art",
    image: { src: artwork5, caption: "Vtuber Character" },
    tags: ["Character Design", "Illustration", "Inkscape"],
    featured: false,
  },
  {
    id: 6,
    title: "LUFFY GEAR 5 BAJRANG GUN",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork6, caption: "Vtuber Character" },
    tags: ["Character Design", "Krita","Illustration"],
    featured: false,
  },
  {
    id: 7,
    title: "Shirogane And Kaguya Taking A Selfie",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork7, caption: "Vtuber Character" },
    tags: ["Character Design", "Krita","Illustration"],
    featured: false,
  },
  {
    id: 8,
    title: "Christmas Duo",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork8, caption: "Vtuber Character" },
    tags: ["Character Design", "Krita","Illustration", "Christmas"],
    featured: false,
  },
  {
    id: 9,
    title: "Miguel O Hara Chasing Miles Morales",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork9, caption: "Vtuber Character" },
    tags: ["Character Design", "Krita","Illustration"],
    featured: false,
  },
  {
    id: 10,
    title: "Uchiha Sasuke",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Digital Art",
    image: { src: artwork10, caption: "Uchiha Sasuke" },
    tags: ["Character Design", "Krita","Illustration"],
    featured: false,
  },
  {
    id: 11,
    title: "School Girl",
    subtitle: "Digital Illustration",
    description: "Original vtuber character model.",
    type: "artworks",
    typeLabel: "Pixel Art",
    image: { src: artwork11, caption: "School Girl" },
    tags: ["Character Design", "Pixel","Aseprite"],
    featured: false,
  },

  // ---------- Animations ----------
  {
    id: 4,
    title: "Night Animation",
    subtitle: "Short Animation",
    description: "A short animated clip.",
    type: "animations",
    typeLabel: "Pixel Animation",
    videoSrc: animation1, 
    tags: ["Animation","Pixel","Aseprite"],
    featured: false,
  },

   {
    id: 5,
    title: "Cartoon Style Animation",
    subtitle: "Short Animation",
    description: "A short animated clip.",
    type: "animations",
    typeLabel: "Cartoon Animation",
    videoSrc: animation2,
    tags: ["Animation","Adobe Photoshop", "Cartoon-Style"],
    featured: false,
  },

  {
  id: 5,
  title: "SpiderMan Vs. Venom",
  subtitle: "3D Character Model",
  description: "A stylized 3D character model, sculpted and textured for a game project.",
  type: "3d model",
  typeLabel: "Character Model",
  images: [
    { src: angel1},
    { src: angel2},
    { src: angel3},
    { src: angel4},
    { src: angel5},
  ],
  tags: ["Blender", "3D Modeling", "Texturing"],
  featured: false,
},
];