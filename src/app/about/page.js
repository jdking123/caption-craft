import React from 'react';

const Home = () => {
  return (
    <div className='mt-5'>
      <div className="home-container rounded-xl" style={styles.container}>
        <h1 className="home-title" style={styles.title}>Welcome to CaptionCraft </h1>
        <p className="text-lg text-center max-w-2xl mb-4">
        CaptionCraft is a simple and effective tool that allows you to add captions to your videos. 
          Just upload your video, and we'll do the rest! Whether you're creating content for social media, 
          presentations, or just for fun, CaptionCraft makes it easy to enhance your videos with clear and 
          readable captions.
        </p>
        <p className="text-lg text-center max-w-2xl mb-6">
          The project is designed to be user-friendly and efficient, allowing users to upload their videos 
          and quickly see the results. With just one click, you can transform your videos and make them 
          more engaging for your audience. Plus, if the auto-generated captions aren't perfect, you have the 
          flexibility to edit them easily and reapply the changes.CaptionCraft acknowledges that no 
          transcription tool is flawless, so we provide you with the tools to ensure your captions are always accurate.
        </p>
     </div>
     
      
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#282c35',
    color: '#ffffff',
  },
  title2: {
    fontSize: '1.8em',
    color: '#61dafb',
  },
  title: {
    fontSize: '2.5em',
    color: '#61dafb',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    color: '#a0a0a0',
    marginBottom: '20px',
  },
  instructions: {
    fontSize: '1.1em',
    color: '#a0a0a0',
  },
};

export default Home;
