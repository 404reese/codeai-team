import React from 'react';
import TeamMemberComponent from "./components/TeamMemberComponent"; 

interface TeamMember {
  img: string;
  alt: string;
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
        // <div key={index} className="team-member bg-fuchsia-950 p-4 rounded-xl overflow-hidden w-40 h-80 flex items-center justify-center hover:w-64 hover:scale-110 hover:bg-violet-950 transition-all duration-400 transform origin-center">
        //   <img src={member.img} alt={member.alt} className="rounded-xl w-full h-full object-cover" />
        // </div>
        <TeamMemberComponent key={index} {...member} />

      ))}
    </div>
  </div>
);

const App = () => {
  const coreMembers = [
    { img: 'src/core ui/san bw.png', hoverImg: "src/core ui/san c.png", alt: 'Core team member 1', position: 'Community Coordinator', name: 'Sanket Dangle'},
    { img: 'src/core ui/shub bw.png', hoverImg: "src/core ui/shub c.png", alt: 'Core team member 2', position: 'Finance Coordinator', name: 'Shubham Shah'},
    { img: 'src/core ui/za bw.png', hoverImg: "src/core ui/za c.png", alt: 'Core team member 3', position: 'Vice Chairperson', name: 'Zainuddin Fatakdawala' },
    { img: 'src/core ui/as bw.png', hoverImg: "src/core ui/as c.png", alt: 'Core team member 4', position: 'Chairperson', name: 'Asmit Dash' },
    { img: 'src/core ui/vid bw.png', hoverImg: "src/core ui/vid c.png", alt: 'Core team member 5', position: 'Digital Media Coordinator', name: 'Vidhi Bhanushali' },
    { img: 'src/core ui/titi bw.png', hoverImg: "src/core ui/titi c.png", alt: 'Core team member 6', position: 'Events Coordinator', name: 'Titiksha Bhavsar' },
    { img: 'src/core ui/ved bw.png', hoverImg: "src/core ui/ved c.png", alt: 'Core team member 7', position: 'Technical Coordinator', name: 'Vedant Hundare' },
    // { img: 'src/core ui/dos bw.png', hoverImg: "src/core ui/dos c.png", alt: 'Core team member 8', position: 'Developer', name: 'San' },
  ];

  const subcoreMembers = [
    { img: 'src/subcore ui/pooja bw.png', hoverImg: "src/subcore ui/pooja c.png", alt: 'Subcore team member 1', position: 'Marketing Admin', name: 'Pooja Shah' },
    { img: 'src/subcore ui/aishwarya bw.png', hoverImg: "src/subcore ui/aishwarya c.png", alt: 'Subcore team member 2', position: 'Publicity Admin', name: 'Asihwarya Kewale' },
    { img: 'src/subcore ui/riddhesh bw.png', hoverImg: "src/subcore ui/riddhesh c.png", alt: 'Subcore team member 3', position: 'Digital Media Admin', name: 'Riddhesh C' },
    { img: 'src/subcore ui/avani bw.png', hoverImg: "src/subcore ui/avani c.png", alt: 'Subcore team member 4', position: 'Social Media Admin', name: 'Avani Mahadik' },
    { img: 'src/subcore ui/aryan bw.png', hoverImg: "src/subcore ui/aryan c.png", alt: 'Subcore team member 5', position: 'Event Admin', name: 'Aryan Mandke' },
    { img: 'src/subcore ui/vivek bw.png', hoverImg: "src/subcore ui/vivekc.png", alt: 'Subcore team member 6', position: 'Technical Admin', name: 'Vivek Masuna' },
  ];
  

  return (
    <div className="bg-[#04021B] text-white font-orbitron">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl">
          <i className="fas fa-code"></i>
        </div>
        <nav className="space-x-8">
          <a className="nav-link hover:text-pink-500 transition" href="#">Home</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">About Us</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">Event</a>
          <a className="nav-link hover:text-pink-500 transition" href="#">Team</a>
        </nav>
        <a className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition" href="#">Join Us</a>
      </header>
      <div className='text-center h-screen flex flex-col justify-center'>
        <h1 className="text-4xl font-bold mt-8">BRAINS BEHIND THE CODE</h1>
        <p className="text-xl mt-4">Be greater, be greater together</p>

      </div>
      <main className="text-center">
        {/* <h1 className="text-4xl font-bold mt-8">BRAINS BEHIND THE CODE</h1>
        <p className="text-xl mt-4">Be greater, be greater together</p> */}
        <div>
          <TeamSection title="CORE MINDS" members={coreMembers} />
        </div>

        <TeamSection title="SUBCORE HEROES" members={subcoreMembers} />
      </main>
    </div>
  );
};

export default App;
