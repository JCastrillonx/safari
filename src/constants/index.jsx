import heroWomen from '../assets/women.jpg';
import heroYoungStudent from '../assets/young-students.jpg';
import heroYoungChild from '../assets/young-child-student-with-vr-glasses.jpg';

export const navItems = [
    { label: "Home", href: "home" },
    { label: "About Us", href: "about" },
    { label: "Story", href: "story" },
    { label: "Services", href: "services" },
    { label: "Recruitment", href: "recruitment" },
    { label: "Contact", href: "contact" },
  ];


export const heroItems = [
    { 
        img: heroWomen, 
        alt: "", 
        title: "#genuineconnections", 
        text: "We connect talent and technology with global opportunities", 
        btn: { href: "https://www.linkedin.com/in/jm-castrillon/", label: "LinkendIn" }
    },
    { 
        img: heroYoungChild, 
        alt: "", 
        title: "#Ernest Hemingway", 
        text: "--- Antes de reaccionar, piensa. Antes de gastar, gana. Antes de criticar, espera. Antes de abandonar, inténtalo...  ", 
        btn: { href: "https://www.linkedin.com/in/jm-castrillon/", label: "LinkendIn" }
    },
    { 
        img: heroYoungStudent, 
        alt: "", 
        title: "#Confucio", 
        text: "--- No importa qué tan despacio vayas, siempre y cuando no te detengas…", 
        btn: { href: "https://www.linkedin.com/in/jm-castrillon/", label: "LinkendIn" }
    }
];
