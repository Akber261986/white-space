export interface Post {
    title: string;
    price: number;
    content: string;
    image: string;
    imageB: string;
    bullet1:string;
    bullet2:string;
    bullet3:string;
    bullet4:string;
    bullet5:string;
    bullet6:string;
  }
  
  // Simulated blog posts data
  export const posts: Post[] = [
    {
      title: "Free",
      price: 0,
      content: "Capture ideas and find them quickly",
      image: "/svg/bulleticonY.svg",
      imageB: "/svg/bulleticonB.svg",
      bullet1:"Sync unlimited devices",
      bullet2:"10 GB monthly uploads",
      bullet3:"200 MB max. note size",
      bullet4:"Customize Home dashboard and access extra widgets",
      bullet5:"Connect primary Google Calendar account",
      bullet6:"Add due dates, reminders, and notifications to your tasks",
    },
    {
      title: "Personal",
      price: 11.99,
      content: "Keep home and family on track",
      image: "/svg/bulleticonY.svg",
      imageB: "/svg/bulleticonB.svg",
      bullet1:"Sync unlimited devices",
      bullet2:"10 GB monthly uploads",
      bullet3:"200 MB max. note size",
      bullet4:"Customize Home dashboard and access extra widgets",
      bullet5:"Connect primary Google Calendar account",
      bullet6:"Add due dates, reminders, and notifications to your tasks",
    },
    {
      title: "Organization",
      price: 49.99,
      content: "Capture ideas and find them quickly",
      image: "/svg/bulleticonY.svg",
      imageB: "/svg/bulleticonB.svg",
      bullet1:"Sync unlimited devices",
      bullet2:"10 GB monthly uploads",
      bullet3:"200 MB max. note size",
      bullet4:"Customize Home dashboard and access extra widgets",
      bullet5:"Connect primary Google Calendar account",
      bullet6:"Add due dates, reminders, and notifications to your tasks",
    },
  ] 

  export interface Client {
    name: string;
    post: string;
    workAs: string;
    addres: string;
    image: string;
    comment: string;
    quoteImageWhite:string;
    quoteImageBlue:string;
  }

  export const clientPost:Client [] = [
    {
      name: "Zia Khan",
      post: "CEO",
      workAs: "Head of Talent Acquisition",
      addres: "Pakistan",
      image: "/client-images/zia-khan.jpeg",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Ameen Alam",
      post: "CEO",
      workAs: "Head of Talent Acquisition",
      addres: "Pakistan",
      image: "/client-images/ameen-alam.jpg",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Asharib Ali",
      post: "CMW",
      workAs: "Head of Talent Acquisition",
      addres: "Pakista",
      image: "/client-images/asharib.jpg",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Hamzah Syed",
      post: "CMW",
      workAs: "Head of Talent Acquisition",
      addres: "Pakistan",
      image: "/client-images/hamzah.jpeg",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Will Simth",
      post: "CMW",
      workAs: "Head of Talent Acquisition",
      addres: "North America",
      image: "/client-images/client-2.png",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Thomson Bot",
      post: "CMW",
      workAs: "Head of Talent Acquisition",
      addres: "North America",
      image: "/client-images/client-3.png",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
    {
      name: "Oberon Shaw",
      post: "CMW",
      workAs: "Head of Talent Acquisition",
      addres: "North America",
      image: "/client-images/client-1.png",
      comment: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      quoteImageWhite: "/pngImages/Quote-white.png",
      quoteImageBlue: "/pngImages/Quote-blue.png",
    },
  ]