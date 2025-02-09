import React, { useState } from "react";

interface TeamMember {
    img: string;
    hoverImg?: string;
    alt: string;
    position?: string;
    name?: string;
  }

  const TeamMemberComponent: React.FC<TeamMember> = ({ img, hoverImg, alt, position, name}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="team-member bg-fuchsia-950 p-4 rounded-xl overflow-hidden w-40 h-96 flex items-center justify-center flex-col text-center hover:w-72 hover:h-96 hover:scale-110 hover:bg-violet-950 transition-all duration-400 transform origin-center"      
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

         <div className={`w-full text-white text-center p-2  text-white rounded-t-xl ${isHovered ? 'opacity-100' : 'opacity-0'} transition-all duration-400`}>
          <p className="text-lg font-bold">{position}</p>
          <h3 className="text-sm text-fuchsia-400 font-bold">{name}</h3>
        </div>
  
        <div className="w-full flex justify-center items-center h-full">
          <img
            src={isHovered && hoverImg ? hoverImg : img}
            alt={alt}
            className="rounded-xl w-full h-full object-cover transition-all duration-400"
          />
        </div>
      </div>
    );
  };


export default TeamMemberComponent;
