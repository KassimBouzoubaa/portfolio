import Krypto from '../assets/projects/krypto.png'
import Metaverse from "../assets/projects/metaverse.png"
import Netflix from "../assets/projects/netflix.png"
import TopEats from "../assets/projects/topeats.png"


export const data=[
    {
        id:1,
        name:"Krypto",
        image:Krypto,
        github:"https://github.com/KassimBouzoubaa/Krypto",
        live:"https://krypto-five.vercel.app/",
        description:"Cette application offre la possibilité d'envoyer des ethers sur le réseau de test ethereum (goerli) tout en affichant les dernières transactions en temps réel. Elle est connectée à la blockchain et permet d'interagir avec des smart contracts tout en connectant son portefeuille Metamask. Elle a été développée en utilisant les technologies React/TailwindCSS ainsi que solidity/hardhat/ethersjs."
    },
    {
        id:2,
        name:"Metaverse",
        image:Metaverse,
        github:"https://github.com/KassimBouzoubaa/Metaverse",
        live:"https://metaverse-sable.vercel.app/",
        description:"Metaverse est une landing page sur le thème du Metaverse. L'application à été produite grâce à Next JS, React, le framework Motion pour les animations ainsi que tailwind CSS."
    },
    {
        id:3,
        name:"Netflix Clone",
        image:Netflix,
        github:"https://github.com/KassimBouzoubaa/Netflix_Clone",
        live:"https://netflix-clone-five-lilac.vercel.app/",
        description:"Ce projet est un clone de Netflix. J'utilise React et Tailwind CSS pour styliser les composants. J'utilise également l'API TMDB pour récupérer toutes les données et les affichées. J'ai mis en place un système d'authentification grâce à FireBase."
    },
    {
        id:4,
        name:"Uber Eats Clone",
        image:TopEats,
        github:"https://github.com/KassimBouzoubaa/topeats",
        live:"https://topeats.vercel.app/",
        description:"Copie du site UberEats. Construit grâce à React JS et Tailwind CSS. Site responsive et réactif utilisant des mises en page flexibles et en grille. Extraction de toutes les données/images du fichier data.js pour simuler une réponse API."
    },


]