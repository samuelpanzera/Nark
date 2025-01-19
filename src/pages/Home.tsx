import React from 'react';
import { Button } from '../components/ui/button';

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome to Nark Launcher</h2>
      <p className="mt-4 text-gray-400">Your optimized and clean game launcher experience starts here.</p>
      <Button className='mt-4 bg-red-700'>Oi meu chapa</Button>
    </div>
  );
};

export default Home;
