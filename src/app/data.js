
import { Bolt, Car, CreditCard, Hammer, PaintRoller, ShieldCheck, Star, Timer, Wrench } from 'lucide-react';

export const cards = [
    {
        title: "Plumbers",
        description: "Expert plumbing services for repairs, installations, and maintenance.",
        icon: <Wrench size={25} color="#f2c41c" strokeWidth={1.5} />,
        color: "bg-yellow-400/20 border-yellow-400/40",
        colorOnly: 'to-yellow-400/20'
    },
    {
        title: "Electricians",
        description: "Professional electrical repairs, wiring, and installations.",
        icon: <Bolt size={25} color="#0ea5e9" strokeWidth={1.5} />,
        color: "bg-blue-400/20 border-blue-400/40",
        colorOnly: 'to-blue-400/20'
    },
    {
        title: "Carpenters",
        description: "Custom woodwork, furniture assembly, and home improvements.",
        icon: <Hammer size={25} color="#8b5cf6" strokeWidth={1.5} />,
        color: "bg-purple-400/20 border-purple-400/40",
        colorOnly: 'to-purple-400/20'
    },
    {
        title: "Painters",
        description: "High-quality painting services for homes and commercial spaces.",
        icon: <PaintRoller size={25} color="#f43f5e" strokeWidth={1.5} />,
        color: "bg-red-400/20 border-red-400/40",
        colorOnly: 'to-red-400/20'
    },
    {
        title: "Mechanics",
        description: "Reliable vehicle repairs, servicing, and maintenance.",
        icon: <Car size={25} color="#22c55e" strokeWidth={1.5} />,
        color: "bg-green-400/20 border-green-400/40",
        colorOnly: 'to-green-400/20'
    },
];

export const features = [
    {
        title: "Verified Professionals",
        description: "Our experts are thoroughly screened with ID verification and background checks, ensuring you receive trusted and professional service every time.",
        icon: <ShieldCheck size={60} color="#ffffff" strokeWidth={1.5} />,
        bgColor: "bg-[#2a2a2a]"
    },
    {
        title: "Secure Payments",
        description: "Enjoy hassle-free transactions with our secure and encrypted payment system, keeping your financial information safe and protected.",
        icon: <CreditCard size={60} color="#ffffff" strokeWidth={1.5} />,
        bgColor: "bg-[#1e293b]"
    },
    {
        title: "Fast Booking",
        description: "Get help in minutes with our seamless booking process, connecting you to the right professionals quickly and efficiently.",
        icon: <Timer size={60} color="#ffffff" strokeWidth={1.5} />,
        bgColor: "bg-[#3b3b3b]"
    },
    {
        title: "Customer Reviews",
        description: "Make informed decisions by checking real customer reviews and ratings before booking a service.",
        icon: <Star size={60} color="#ffffff" strokeWidth={1.5} />,
        bgColor: "bg-[#4b5563]"
    }
];

export const TestimonalsData = [
    {
        "name": "Sophia Patel",
        "review": "This product exceeded my expectations! The quality and customer service were top-notch. Highly recommended!",
        "rating": 5,
        "img": "https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?t=st=1742344809~exp=1742348409~hmac=30feb07b16e9dc584a19070ce6253412f1e0f5cc330920f0673e1ebace2b54a2&w=996"
    },
    {
        "name": "James Carter",
        "review": "Very satisfied with my purchase. The user experience was smooth, and delivery was quick!",
        "rating": 4.5,
        "img": "https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg?t=st=1742344895~exp=1742348495~hmac=fe32c3a945ed4874ca5f46190ebd31b2b4beba0895d842a12360a017469b900d&w=996"
    },
    {
        "name": "Aisha Khan",
        "review": "Amazing experience! The team was very helpful, and the product works perfectly. Will buy again!",
        "rating": 5,
        "img": "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1742344930~exp=1742348530~hmac=68f52370b82edc0a1acbf06392c4c7e68f64daa0f2a8869838d72f1cb5cb670d&w=740"
    },
    {
        "name": "Liam Johnson",
        "review": "Great product and excellent support. The attention to detail is impressive. Worth every penny!",
        "rating": 1.5,
        "img": "https://img.freepik.com/free-photo/waist-up-shot-attractive-young-girlfriend-with-dark-straight-hair-soft-healthy-skin_273609-18318.jpg?t=st=1742345007~exp=1742348607~hmac=961b2c7f038d4a834f480604d7541fbb866e29cb7317a71201573c048b49911d&w=996"
    },
    {
        "name": "Emily Chen",
        "review": "I was skeptical at first, but this has been a game-changer for me. Easy to use and great results!",
        "rating": 3.2,
        "img": "https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?t=st=1742345050~exp=1742348650~hmac=767badd0b7e7504af5b9b029917b4680af154933a443cf3dd5b33cf4b69cd92a&w=996"
    },
    {
        "name": "Daniel Smith",
        "review": "Fast shipping and great packaging. The quality is outstanding, and I will definitely recommend it to others.",
        "rating": 5,
        "img": "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1742345133~exp=1742348733~hmac=aeaab6cbd48a0c1e8663bcd0712fde270127b626bdb5d9ebafc3ecf03c1632ef&w=740"
    }
];