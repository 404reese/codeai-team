import React from 'react';
import TeamMemberComponent from "./components/TeamMemberComponent";
import Carousel from './components/Carousel'; 

interface TeamMember {
  img: string;
  hoverImg: string;
  alt: string;
  position: string;
  name: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <div className="mt-12">
    <h2 className="text-3xl font-bold text-center">{title}</h2>
    <div className="team-section flex justify-center flex-wrap gap-4 mt-6">
      {members.map((member, index) => (
        <TeamMemberComponent key={index} {...member} />
      ))}
    </div>
  </div>
);

const App = () => {
  const coreMembers = [
    { img: '/core ui/san bw.png', hoverImg: "/core ui/san c.png", alt: 'Core team member 1', position: 'Community Coordinator', name: 'Sanket Dangle'},
    { img: '/core ui/shub bw.png', hoverImg: "/core ui/shub c.png", alt: 'Core team member 2', position: 'Finance Coordinator', name: 'Shubham Shah'},
    { img: '/core ui/za bw.png', hoverImg: "/core ui/za c.png", alt: 'Core team member 3', position: 'Vice Chairperson', name: 'Zainuddin Fatakdawala' },
    { img: '/core ui/as bw.png', hoverImg: "/core ui/as c.png", alt: 'Core team member 4', position: 'Chairperson', name: 'Asmit Dash' },
    { img: '/core ui/vid bw.png', hoverImg: "/core ui/vid c.png", alt: 'Core team member 5', position: 'Digital Media Coordinator', name: 'Vidhi Bhanushali' },
    { img: '/core ui/titi bw.png', hoverImg: "/core ui/titi c.png", alt: 'Core team member 6', position: 'Events Coordinator', name: 'Titiksha Bhavsar' },
    { img: '/core ui/ved bw.png', hoverImg: "/core ui/ved c.png", alt: 'Core team member 7', position: 'Technical Coordinator', name: 'Vedant Hundare' },
  ];

  const subcoreMembers = [
    { img: '/subcore ui/pooja bw.png', hoverImg: "/subcore ui/pooja c.png", alt: 'Subcore team member 1', position: 'Marketing Admin', name: 'Pooja Shah' },
    { img: '/subcore ui/aishwarya bw.png', hoverImg: "/subcore ui/aishwarya c.png", alt: 'Subcore team member 2', position: 'Publicity Admin', name: 'Asihwarya Kewale' },
    { img: '/subcore ui/riddhesh bw.png', hoverImg: "/subcore ui/riddhesh c.png", alt: 'Subcore team member 3', position: 'Digital Media Admin', name: 'Riddhesh C' },
    { img: '/subcore ui/avani bw.png', hoverImg: "/subcore ui/avani c.png", alt: 'Subcore team member 4', position: 'Social Media Admin', name: 'Avani Mahadik' },
    { img: '/subcore ui/aryan bw.png', hoverImg: "/subcore ui/aryan c.png", alt: 'Subcore team member 5', position: 'Event Admin', name: 'Aryan Mandke' },
    { img: '/subcore ui/vivek bw.png', hoverImg: "/subcore ui/vivekc.png", alt: 'Subcore team member 6', position: 'Technical Admin', name: 'Vivek Masuna' },
  ];
  
  const slides = [
    {
      url: '/team/1.png',
    },
    {
      url: '/team/2.png',
    },
    {
      url: '/team/3.png',
    },
    {
      url: '/team/4.png',
    },
    {
      url: '/team/5.png',
    },
  ];


  return (
    <div className="bg-[#04021B] text-white font-orbitron">
      <header className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center">
          HEADER
        </div>
        {/* <div className="text-2xl">
          <i className="fas fa-code"></i>
        </div>
        <nav className="space-x-8">
          <a className="nav-link hover:text-pink-500 transition" href="#">Home</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">About Us</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">Event</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">Team</a>
        </nav>
        <a className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition" href="#">Join Us</a> */}
      </header>
      <div className='text-center h-[80vh] flex flex-col justify-center'>
        <h1 className="text-4xl font-bold mt-32">BRAINS BEHIND</h1>
        <h1 className="text-4xl font-bold mt-4">THE CODE</h1>
        
        <p className="text-xl font-mono mt-64">Be greater, be greater together</p>
      </div>
      <main className="text-center">
        <div>
          <TeamSection title="CORE MINDS" members={coreMembers} />
        </div>
        <TeamSection title="SUBCORE HEROES" members={subcoreMembers} />

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center">team members</h2>
          <Carousel slides={slides} />

          </div>
      </main>
    </div>
  );
};

export default App;