import React from 'react';

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
        <div key={index} className="team-member bg-indigo-800 p-4 rounded-xl overflow-hidden w-40 h-80 flex items-center justify-center">
          <img src={member.img} alt={member.alt} className="rounded-xl w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const coreMembers = [
    { img: 'https://storage.googleapis.com/a1aa/image/Gcf5WU8vcuW1dyGl7IodWuecorDsz21KqefV2KERmtyfYBGhC.jpg', alt: 'Core team member 1' },
    { img: 'https://storage.googleapis.com/a1aa/image/wwdPfodErRTMESaEUQFdeueTRkaNfliormI6rL1T1AT3tAjQB.jpg', alt: 'Core team member 2' },
    { img: 'https://storage.googleapis.com/a1aa/image/Y51x3AZJ0MadM56MlyQsZAus5s9TkXfxFCMcHGMDgLQsFYEKA.jpg', alt: 'Core team member 3' },
    { img: 'https://storage.googleapis.com/a1aa/image/N3kOZFtW7wKJEdzOfrjJIuHdB69GIRxFDHG9fuT7XWnXLwIUA.jpg', alt: 'Core team member 4' },
    { img: 'https://storage.googleapis.com/a1aa/image/CkEVtWBjaFKWGxk9e91XVvxSehtVHV0qot9LpBXfmQpTWgRoA.jpg', alt: 'Core team member 5' },
    { img: 'https://storage.googleapis.com/a1aa/image/ISWNe7AAeChzHknpHMlyqJ6H6GXKJJvZ4C1NEFBTAYuPLwIUA.jpg', alt: 'Core team member 6' },
    { img: 'https://storage.googleapis.com/a1aa/image/Mysx1CCEGHoKFh280aVFHfah4q5ngTLjxxR3f9hyaujbLwIUA.jpg', alt: 'Core team member 7' },
    { img: 'https://storage.googleapis.com/a1aa/image/D6ZCza2i6WpVAlqMdbM0YYCgRexnej8qsQsC9QBfu4OsWgRoA.jpg', alt: 'Core team member 8' },
  ];

  const subcoreMembers = [
    { img: 'https://storage.googleapis.com/a1aa/image/o5IYIkQT4dphNNxofPpeJ7SStGrMdSI3t30LBq65iJCOLwIUA.jpg', alt: 'Subcore team member 1' },
    { img: 'https://storage.googleapis.com/a1aa/image/8gnKChKjq2aPHJjQofbHLuw715EkNueo5GMcztXQ4kFTLwIUA.jpg', alt: 'Subcore team member 2' },
    { img: 'https://storage.googleapis.com/a1aa/image/6FVK9sNbHJobOB3Wl3bXxxiJvEmLleWpLbaEiUZtEkJpFYEKA.jpg', alt: 'Subcore team member 3' },
    { img: 'https://storage.googleapis.com/a1aa/image/A0ijy1DZ9eVcS6ReaPqnwFdxAgHJw2Cn56Hg8veVdgKZWgRoA.jpg', alt: 'Subcore team member 4' },
    { img: 'https://storage.googleapis.com/a1aa/image/jIQRi6FNxZ6vPtDTrXHzTmLv3ZK1Xf2GFGP0L08gnIQtFYEKA.jpg', alt: 'Subcore team member 5' },
    { img: 'https://storage.googleapis.com/a1aa/image/RRdGtLX4sloiNVZ9z9n4zGpfl6pWyEjfekysQUvI4VBUWgRoA.jpg', alt: 'Subcore team member 6' },
    { img: 'https://storage.googleapis.com/a1aa/image/ZJhAlNHJQcZTHlyJ4EkARiZafKA1YcKfu3QRdLM4o9yULwIUA.jpg', alt: 'Subcore team member 7' },
    { img: 'https://storage.googleapis.com/a1aa/image/UtKARnzN716oCtce0qGC7F4p6AMfeoxNFx0RuAjCIXdhWgRoA.jpg', alt: 'Subcore team member 8' },
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
