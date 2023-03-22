import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0a192f] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              A propos
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Salut c'est Kassim, je suis ravi de vous présenter mon portfolio.
            </p>
          </div>
          <div>
            <p>
              Je suis Kassim Bouzoubaa, un développeur full-stack passionné et
              expérimenté depuis 1 an. Je suis spécialisé dans les technologies
              telles que React, React Native, TypeScript, NodeJS, GraphQL et
              Solidity, et j'aime particulièrement travailler sur des projets
              autour de l'univers de la blockchain.
              <br />
              <br />
              Je suis un fervent utilisateur de la méthode Agile SCRUM et
              j'adore travailler en équipe pour apporter des solutions créatives
              et efficaces à des problèmes complexes.Si vous êtes à la recherche
              d'un développeur full-stack qualifié et passionné pour votre
              prochain projet, je serais ravi de vous aider à le réaliser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
