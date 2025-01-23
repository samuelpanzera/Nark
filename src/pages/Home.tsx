import React, { useState } from "react";
import { Button } from "../components/ui/button";

import { sendNotification } from "@tauri-apps/plugin-notification";

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold ">Welcome to Nark Launcher</h2>
      <p className="mt-4 text-gray-400">
        Your optimized and clean game launcher experience starts here.
      </p>
      <Button
        className="mt-4 bg-red-700"
        onClick={() => {
          return sendNotification({
            title: "Tauri",
            body: "Tauri is awesome!",
          });
        }}
      >
        Oi meu chapa
      </Button>
      
    </div>
  );
};

export default Home;
