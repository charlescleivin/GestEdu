'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format date in Portuguese
      const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const formattedDate = now.toLocaleDateString('pt-BR', dateOptions);
      
      // Format time
      const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      };
      const formattedTime = now.toLocaleTimeString('pt-BR', timeOptions);
      
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    // Update immediately
    updateDateTime();
    
    // Update every second
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          
          {/* Left side - Logo and Info */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="text-3xl">🎓</div>
            </div>
            
            {/* Company Name and Description */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Sistema de Gestão Escolar
              </h1>
              <p className="text-blue-100 text-sm mt-1">
                Controle de presença e acompanhamento acadêmico dos alunos
              </p>
            </div>
          </div>

          {/* Right side - Date and Time */}
          <div className="text-right md:text-left">
            <div className="flex items-center space-x-2 text-blue-100">
              <span className="text-lg">📅</span>
              <div>
                <p className="text-sm font-medium">Hoje:</p>
                <p className="text-base font-semibold">{currentDate}</p>
                <p className="text-lg font-bold tabular-nums">{currentTime}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}