import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {

  const navigate = useNavigate();

  const Blogs = [
  {
    "id": 1,
    "title": "5 AI Tools for 2025",
    "category": "Artificial Intelligence",
    "description": "Discover five cutting-edge AI tools that are set to redefine the way we work, think, and create in 2025. From automating complex tasks to generating hyper-realistic images and text, these tools are pushing the limits of what artificial intelligence can achieve.",
    "author": "Tech Insights Team"
  },
  {
    "id": 2,
    "title": "Quantum Supremacy Explained",
    "category": "Quantum Computing",
    "description": "Dive deep into the concept of 'Quantum Supremacy'—a milestone that marks the point where quantum computers outperform classical ones in specific tasks. We explore how this breakthrough opens doors to solving complex problems in cryptography, climate modeling, and drug discovery. ",
    "author": "Tech Insights Team"
  },
  {
    "id": 3,
    "title": "Web3 & Digital Ownership",
    "category": "Blockchain",
    "description": "Explore the exciting world of Web3 and how it’s transforming the internet from centralized platforms into a decentralized ecosystem. We discuss how NFTs (Non-Fungible Tokens), DAOs (Decentralized Autonomous Organizations), and blockchain technologies empower users with true digital ownership.",
    "author": "Tech Insights Team"
  },
  {
    "id": 4,
    "title": "Bio-Computers",
    "category": "Biotechnology",
    "description": "Step into the fascinating intersection of biology and computing, where scientists are building bio-computers that merge living cells with digital systems. These hybrid machines have the potential to process information more efficiently than silicon-based computers while adapting to complex biological environments.",
    "author": "Tech Insights Team"
  },
  {
    "id": 5,
    "title": "AR Glasses",
    "category": "Augmented Reality",
    "description": "Imagine replacing your smartphone with a sleek pair of augmented reality glasses that overlay useful information, navigation, and communication tools right in front of your eyes. This article explores how AR glasses are evolving into powerful wearable devices capable of transforming work, entertainment, and daily life.",
    "author": "Tech Insights Team"
  }
];
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-6xl font-extralight italic'>Explore...</h1>
      <div className='flex flex-wrap justify-center items-center gap-10 pt-20'>
        {Blogs.map((Blog, index) => {
          return(
            <div key={index} onClick={() => navigate(`/blogs/${Blog.title}`)} className=' cursor-pointer flex flex-col justify-between border-2 py-4 w-[25vw] px-2 min-h-[15vw] rounded-xl'>
              <p className='font-semibold font-serif pt-2 pb-2'>{Blog.title}</p>
              <p className='font-sans text-[0.9rem]'>{Blog.description}</p>
              <p className='font-mono bg-blue-200 w-fit px-2 mt-2 rounded-3xl'>{Blog.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AllBlogs
