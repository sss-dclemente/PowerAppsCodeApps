import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export interface NavigationHistory {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
  navigateTo: (path: string) => void;
  addToHistory: (path: string) => void;
  currentIndex: number;
  history: string[];
}

export const useNavigationHistory = (): NavigationHistory => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<string[]>(['/']); // Start with dashboard
  const [currentIndex, setCurrentIndex] = useState(0);

  const addToHistory = useCallback((path: string) => {
    setHistory(prev => {
      // Don't add the same path if it's already the current one
      if (prev[prev.length - 1] !== path) {
        // If we're not at the end of history, remove everything after current position
        const newHistory = prev.slice(0, currentIndex + 1);
        newHistory.push(path);
        
        // Update current index to point to the new item
        setCurrentIndex(newHistory.length - 1);
        
        return newHistory;
      }
      
      return prev;
    });
  }, [currentIndex]);

  const navigateTo = useCallback((path: string) => {
    addToHistory(path);
    navigate(path);
  }, [navigate, addToHistory]);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex]);
    }
  }, [currentIndex, history, navigate]);

  const goForward = useCallback(() => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex]);
    }
  }, [currentIndex, history, navigate]);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < history.length - 1;

  return {
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    navigateTo,
    addToHistory,
    currentIndex,
    history
  };
};
