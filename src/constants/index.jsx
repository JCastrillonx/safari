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
        btn: { href: "contact", label: "Contac" }
    },
    { 
        img: heroYoungChild, 
        alt: "", 
        title: "Jesica Logioco", 
        text: "Conecto a personas de tecnología con oportunidades con propósitos | IT Staffing | Consultora IT | Enfocada en sector tech", 
        btn: { href: "https://www.linkedin.com/in/jesicalogioco-safarigrouphr/", label: "LinkendIn" }
    },
    { 
        img: heroYoungStudent, 
        alt: "", 
        title: "Vivir al  maximo", 
        text: "Asegurando eficiencia y estableciendo relaciones auténticas y duraderas. ", 
        btn: null
    }
];
