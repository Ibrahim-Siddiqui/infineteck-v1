import { Monitor, Play, Smartphone } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { LucideBarChart } from "lucide-react";
export const Menus = [
  {
    name: "Home",
    link: "/",
    // subMenuHeading: ["Design", "Scale"],
    // subMenu: [
    //   {
    //     name: "Design",
    //     desc: "Responsive design",
    //     icon: PanelsTopLeft,
    //   },
    //   {
    //     name: "Management",
    //     desc: "Site control",
    //     icon: Bolt,
    //   },
    //   {
    //     name: "Navigation",
    //     desc: "Link pages",
    //     icon: PanelTop,
    //   },
    //   {
    //     name: "CMS",
    //     desc: "Management content",
    //     icon: Database,
    //   },
    // ],
    // gridCols: 2,
  },
  {
    name: "Services",
    link: "",
    // subMenuHeading: ["Development", "Marketing", "Creative"],
    subMenu: [
      {
        name: "Web Development",
        desc: "",
        icon: Monitor,
        link: "/services/web-development",
      },
      {
        name: "App Development",
        desc: "",
        icon: Smartphone,
        link: "/services/app-development",
      },
      {
        name: "Digital Marketing & Branding",
        desc: "",
        icon: LucideBarChart,
        link: "/services/digital-marketing",
      },
      {
        name: "Game Development",
        desc: "",
        icon: Gamepad2,
        link: "/services/game-development",
      },
      {
        name: "Animation - Video Editing",
        desc: "",
        icon: Play,
        link: "/services/video-animation",
      },
      {
        name: "Ecommerce Solutions",
        desc: "",
        icon: ShoppingCart,
        link: "/services/e-commerce",
      },
      {
        name: "AI Automation",
        desc: "",
        icon: BrainCircuit,
        link: "/services/ai-automation",
      },
      // {
      //   name: "Experts",
      //   desc: "Jobs",
      //   icon: BriefcaseBusiness,
      // },
      // {
      //   name: "Gallery",
      //   desc: "Images",
      //   icon: Images,
      // },
    ],
    gridCols: 2,
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Support",
  //   subMenu: [
  //     {
  //       name: "Help",
  //       desc: "Center",
  //       icon: CircleHelp,
  //     },
  //     {
  //       name: "Community",
  //       desc: "Project help",
  //       icon: MessageCircle,
  //     },
  //     {
  //       name: "Emergency",
  //       desc: "Urgent issues",
  //       icon: TriangleAlert,
  //     },
  //   ],
  //   gridCols: 1,
  // },
  // {
  //   name: "Enterprise",
  //   subMenuHeading: ["Overview", "Features"],
  //   subMenu: [
  //     {
  //       name: "Enterprise",
  //       desc: "Overview",
  //       icon: ShieldPlus,
  //     },
  //     {
  //       name: "Collaboration",
  //       desc: "Design together",
  //       icon: Users,
  //     },
  //     {
  //       name: "Customers",
  //       desc: "Stories",
  //       icon: Dessert,
  //     },
  //     {
  //       name: "Security",
  //       desc: "Your site secured",
  //       icon: Lock,
  //     },
  //   ],
  //   gridCols: 2,
  // },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Pricing",
    link: "pricing",
  },
  // {
  //   name: "Contact",
  // },
];

export const navItems = [
  { name: "Home", link: "#", route: "/" },
  { name: "About", link: "#about", route: "/about" },
  { name: "Portfolio", link: "#Portfolio", route: "/portfolio" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact", route: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Developing",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "InfineTeck delivers tailored software solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Spotic Coin Blockchain website",
    des: "Discover the future of digital currency with Spotic Coin | a blockchain-powered platform revolutionizing the way we transact.",
    img: "/SpoticCoin.png",
    iconLists: ["/eth.png", "/soli.png", "/tuf.png", "/next.svg", "/myt.png"],
    link: "/ui.earth.com",
  },
  // {
  //   id: 2,
  //   title: "Candy Mall Mania - Roblox Game",
  //   des: "Step into the sweet adventure of Candy Mall Mania  a delightful Roblox game filled with fun, challenges, and sugary surprises!",
  //   img: "/candy.jpg",
  //   iconLists: ["/rbs.png", "/bln.png", "/lua.png", "/maya.png", "/max.png"],
  //   link: "/ui.yoom.com",
  // },
  {
    id: 3,
    title: "Hide N Snipe - Roblox Game",
    des: "Hide N Snipe | Dive into an immersive Roblox gaming experience blending strategy, stealth, and excitement like never before!",
    img: "/hidnsnip.jpg",
    iconLists: ["/rbs.png", "/bln.png", "/lua.png", "/maya.png", "/max.png"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "InnoVest - Investment Website 0.3",
    des: "Experience the future of finance with InnoVest | an innovative investment platform powered by cutting-edge technology and seamless design.",
    img: "/Web 1920.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "I hired InfineTeck to develop a custom website for my small business, and I couldn’t be happier with the results! From the very first meeting, their team was professional, attentive, and genuinely interested in understanding my vision. They walked me through every step of the process, from planning to design and development. The website they delivered is not only visually stunning but also incredibly user-friendly. It’s helped us attract more customers and grow our online presence. What I appreciated most was their flexibility—they were always available to answer my questions and make adjustments as needed. If you’re looking for a reliable and talented team, InfineTeck is the way to go!",
    name: "Sarah T.",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "InfineTeck developed a mobile app for my startup, and it’s been a game-changer for our business. The app is sleek, intuitive, and packed with features that our users love. What impressed me most was their ability to take my rough ideas and turn them into a polished, functional product. They kept me updated throughout the entire process and were always open to feedback. The app has significantly improved our customer engagement, and we’ve received so many positive reviews. InfineTeck’s team is not only skilled but also a pleasure to work with. I highly recommend them to anyone looking for top-notch app development services!",
    name: "James L.",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "I worked with InfineTeck on a game development project, and I’m thrilled with the outcome! They created a Roblox game for my kids’ brand, and it’s been a huge hit. The game is fun, engaging, and perfectly captures the essence of our brand. The team was incredibly creative and patient, taking the time to understand our vision and bring it to life. They also provided excellent support after the launch, helping us troubleshoot and make improvements. InfineTeck’s professionalism and expertise made the entire process smooth and enjoyable. If you’re looking for a team that delivers high-quality results, look no further than InfineTeck!",
    name: "Emily R.",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "InfineTeck’s branding services helped us establish a strong online presence, and I couldn’t be happier with the results. Their team created a modern, eye-catching design that perfectly represents our brand. They were professional, responsive, and always willing to go the extra mile to ensure we were satisfied. The new branding has helped us attract more customers and grow our business. If you’re looking for a talented and reliable branding team, I highly recommend InfineTeck!",
    name: "Ethan S.",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Before partnering with Infineteck, my Shopify store was just good—but they turned it into something extraordinary. Not only does it look stunning and work perfectly, but their team completely revamped my social media strategy. They crafted viral product reels, optimized my ad targeting, and even rebuilt my brand’s visual identity. And the results? My engagement tripled, website traffic doubled, and sales skyrocketed by 40% in just 3 months! Infineteck didn’t just design a website—they engineered a profit machine.",
    name: "Olivia G.",
    title: "Director of AlphaStream Technologies",
  },
];

export const partners = [
  {
    id: 1,
    name: "",
    img: "/testimonial-01.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/testimonial-02.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/testimonial-03.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/testimonial-04.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/testimonial-05.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "docker.",
    img: "/testimonial-06.png",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "BlockChain Development",
    desc: "Blockchain development builds trustless systems,transforming industries efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "Mobile App & Website Development",
    desc: "Mobile app and website development deliver seamless digital solutions that enhance user experience & drive business growth.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.png",
  },
  {
    id: 3,
    title: "Metaverse Virtual Tours",
    desc: "We offer immersive, interactive experiences that transform how users explore and engage with digital environments.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  {
    id: 4,
    title: "Game Development",
    desc: "As a software development company, we use Unity and Roblox to create immersive, interactive game worlds that captivate players and bring ideas to life.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
  {
    id: 5,
    title: "Digital Marketing & Branding",
    desc: "Digital marketing and branding services help businesses establish a strong online presence.",
    className: "md:col-span-2",
    thumbnail: "/exp5.png",
  },
  {
    id: 6,
    title: "2D & 3D Animation - Video Editing",
    desc: "2D and 3D animation and video editing services help you bring your vision to life.",
    className: "md:col-span-2",
    thumbnail: "/exp6.png",
  },
  {
    id: 7,
    title: "E-commerce Consultancy",
    desc: "2D and 3D animation and video editing services help you bring your vision to life.",
    className: "md:col-span-2",
    thumbnail: "/exp7.png",
  },
  {
    id: 8,
    title: "Artificial Intelligence Development",
    desc: "We develop AI for chatbots, LLM models, predictive analytics, automation, and personalized solutions that transform businesses.",
    className: "md:col-span-2",
    thumbnail: "/exp8.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const textLogoPortfolioData = [
  {
    id: 1,
    title: "Demand Hospitality",
    src: "/branding7.jpg",
  },
  {
    id: 2,
    title: "Mobility Machines",
    src: "/branding8.jpg",
  },
  {
    id: 3,
    title: "Ragnarok Energy",
    src: "/branding9.jpg",
  },
  {
    id: 4,
    title: "Laird Construction Inc.",
    src: "/branding10.jpg",
  },
  {
    id: 5,
    title: "TVT Logistics Inc.",
    src: "/branding11.jpg",
  },
  {
    id: 6,
    title: "The Culinary Venture",
    src: "/branding12.jpg",
  },
  {
    id: 7,
    title: "Business Card",
    src: "/branding1.jpg",
  },
  {
    id: 8,
    title: "Business Card",
    src: "/branding2.jpg",
  },
  {
    id: 9,
    title: "Business Card",
    src: "/branding3.jpg",
  },
  {
    id: 10,
    title: "Business Stationery",
    src: "/branding4.jpg",
  },
  {
    id: 11,
    title: "Business Stationery",
    src: "/branding5.jpg",
  },
  {
    id: 12,
    title: "Business Stationery",
    src: "/branding6.jpg",
  },
];

export const UIUXPortfolioData = [
  {
    id: 1,
    title: "",
    src: "/ui-ux-1.jpg",
  },
  {
    id: 2,
    title: "",
    src: "/ui-ux-2.jpg",
  },
  {
    id: 3,
    title: "",
    src: "/ui-ux-3.jpg",
  },
  {
    id: 4,
    title: "",
    src: "/ui-ux-4.jpg",
  },
  {
    id: 5,
    title: "",
    src: "/ui-ux-5.jpg",
  },
  {
    id: 6,
    title: "",
    src: "/ui-ux-6.jpg",
  },
  {
    id: 7,
    title: "",
    src: "/ui-ux-7.jpg",
  },
  {
    id: 8,
    title: "",
    src: "/ui-ux-8.jpg",
  },
  {
    id: 9,
    title: "",
    src: "/ui-ux-9.jpg",
  },
];

export const gameDevPortfolioData = [
  {
    id: 1,
    title: "Hinde N Snipe",
    src: "/game-dev-1.jpg",
  },
  {
    id: 2,
    title: "Candy Mall Mania",
    src: "/game-dev-2.jpg",
  },
  {
    id: 3,
    title: "Theme Park Tycoon",
    src: "/game-dev-3.jpg",
  },
];

export const shopifyPortfolioData = [
  {
    id: 1,
    title: "Jaamz Beauty",
    src: "/shopify-1.jpg",
  },
  {
    id: 2,
    title: "Vixens Beauty",
    src: "/shopify-2.jpg",
  },
];

export const mascotPortfolioData = [
  {
    id: 1,
    title: "",
    src: "/mascot-7.jpg",
  },
  {
    id: 2,
    title: "",
    src: "/mascot-8.jpg",
  },
  {
    id: 3,
    title: "",
    src: "/mascot-9.jpg",
  },
  {
    id: 4,
    title: "",
    src: "/mascot-10.jpg",
  },
  {
    id: 5,
    title: "",
    src: "/mascot-11.jpg",
  },
  {
    id: 6,
    title: "",
    src: "/mascot-12.jpg",
  },
  {
    id: 7,
    title: "",
    src: "/mascot-1.jpg",
  },
  {
    id: 8,
    title: "",
    src: "/mascot-2.jpg",
  },
  {
    id: 9,
    title: "",
    src: "/mascot-3.jpg",
  },
  {
    id: 10,
    title: "",
    src: "/mascot-4.jpg",
  },
  {
    id: 11,
    title: "",
    src: "/mascot-5.jpg",
  },
  {
    id: 12,
    title: "",
    src: "/mascot-6.jpg",
  },
  {
    id: 13,
    title: "",
    src: "/mascot-13.jpg",
  },
  {
    id: 14,
    title: "",
    src: "/mascot-14.jpg",
  },
  {
    id: 15,
    title: "",
    src: "/mascot-15.jpg",
  },
];

export const socialMediaPortfolioData = [
  {
    id: 1,
    title: "",
    src: "/social-media-7.png",
  },
  {
    id: 2,
    title: "",
    src: "/social-media-8.png",
  },
  {
    id: 3,
    title: "",
    src: "/social-media-9.png",
  },
  {
    id: 4,
    title: "",
    src: "/social-media-10.png",
  },
  {
    id: 5,
    title: "",
    src: "/social-media-11.png",
  },
  {
    id: 6,
    title: "",
    src: "/social-media-12.png",
  },
  {
    id: 7,
    title: "",
    src: "/social-media-1.png",
  },
  {
    id: 8,
    title: "",
    src: "/social-media-2.png",
  },
  {
    id: 9,
    title: "",
    src: "/social-media-3.png",
  },
  {
    id: 10,
    title: "",
    src: "/social-media-4.png",
  },
  {
    id: 11,
    title: "",
    src: "/social-media-5.png",
  },
  {
    id: 12,
    title: "",
    src: "/social-media-6.png",
  },
  {
    id: 13,
    title: "",
    src: "/social-media-13.png",
  },
];

export const videoPortfolioData = [
  {
    id: 1,
    title: "",
    src: "vQlw8Z-UtW8",
  },
  {
    id: 2,
    title: "",
    src: "DDDbypFTOYA",
  },
  {
    id: 3,
    title: "",
    src: "tE72XzVy5Wo",
  },
  {
    id: 4,
    title: "",
    src: "jYbbWyzlc5M",
  },
  {
    id: 5,
    title: "",
    src: "OCzYZV8rGtM",
  },
  {
    id: 6,
    title: "",
    src: "2S0spoNby_g",
  },

  {
    id: 7,
    title: "",
    src: "nT6_MWbRi-E",
  },
];
