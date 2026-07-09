import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TrialContextType {
  isTrialOpen: boolean;
  openTrial: () => void;
  closeTrial: () => void;
}

const TrialContext = createContext<TrialContextType | undefined>(undefined);

export const TrialProvider = ({ children }: { children: ReactNode }) => {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  
  const openTrial = () => setIsTrialOpen(true);
  const closeTrial = () => setIsTrialOpen(false);

  return (
    <TrialContext.Provider value={{ isTrialOpen, openTrial, closeTrial }}>
      {children}
    </TrialContext.Provider>
  );
};

export const useTrial = () => {
  const context = useContext(TrialContext);
  if (!context) {
    throw new Error('useTrial must be used within a TrialProvider');
  }
  return context;
};
