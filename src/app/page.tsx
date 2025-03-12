'use client';

import { useEffect, useState } from 'react';
import MockupRenderer from '@/components/MockupRenderer';
import dynamic from 'next/dynamic';
import { getFallbackMockups } from '@/utils/mockupLoader';

// this component dynamically loads mockup components
export default function Home() {
  // state to store dynamically loaded mockups
  const [mockups, setMockups] = useState<Record<string, React.ComponentType<any>>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // function to dynamically import mockup components
    async function loadMockups() {
      setLoading(true);
      setError(null);

      try {
        const mockupModules: Record<string, React.ComponentType<any>> = {};

        // Get the list of mockup files from the API
        const response = await fetch('/api/mockups');

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const mockupFiles = data.mockups || [];

        if (mockupFiles.length === 0) {
          console.warn('No mockup files found, using fallbacks');
          loadFallbackMockups(mockupModules);
        } else {
          // Load each mockup component
          for (const name of mockupFiles) {
            try {
              const Component = dynamic(() => import(`@/components/mockups/${name}`).then(mod => mod.default), {
                loading: () => <div>Loading {name}...</div>,
                ssr: false,
              });

              mockupModules[name] = Component;
              console.log(`Loaded mockup: ${name}`);
            } catch (err) {
              console.error(`Failed to load mockup: ${name}`, err);
            }
          }
        }

        setMockups(mockupModules);
      } catch (error) {
        console.error('Error loading mockups:', error);
        setError('Failed to load mockups. Using fallback components.');

        // Load fallback mockups
        const mockupModules: Record<string, React.ComponentType<any>> = {};
        loadFallbackMockups(mockupModules);
        setMockups(mockupModules);
      } finally {
        setLoading(false);
      }
    }

    // Helper function to load fallback mockups
    function loadFallbackMockups(mockupModules: Record<string, React.ComponentType<any>>) {
      const fallbackMockups = getFallbackMockups();

      for (const name of fallbackMockups) {
        try {
          const Component = dynamic(() => import(`@/components/mockups/${name}`).then(mod => mod.default), {
            loading: () => <div>Loading {name}...</div>,
            ssr: false,
          });

          mockupModules[name] = Component;
        } catch (err) {
          console.error(`Failed to load fallback mockup: ${name}`, err);
        }
      }
    }

    loadMockups();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Loading UI Mockups...</h2>
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <main>
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      <MockupRenderer mockups={mockups} />
    </main>
  );
}
