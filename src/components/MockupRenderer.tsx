'use client';

import { useState, useRef, ReactElement, useEffect } from 'react';
import { formatMockupName } from '@/utils/mockupLoader';
import { toPng } from 'html-to-image';

// mockup component types
type MockupComponentProps = {
    // add any common props here if needed
};

// mockup registry interface
export interface MockupRegistry {
    [key: string]: React.ComponentType<MockupComponentProps>;
}

interface MockupRendererProps {
    mockups: MockupRegistry;
}

// main renderer component
const MockupRenderer: React.FC<MockupRendererProps> = ({ mockups }): ReactElement => {
    // state to track the currently selected mockup
    const [selectedMockup, setSelectedMockup] = useState<string | null>(
        Object.keys(mockups)[0] || null
    );

    // search filter state
    const [searchFilter, setSearchFilter] = useState('');

    // Group mockups by folder
    const groupedMockups: { [key: string]: string[] } = {};
    Object.keys(mockups).forEach(key => {
        const parts = key.split('/');
        if (parts.length > 1) {
            const folder = parts[0];
            const mockupName = parts[parts.length - 1];
            if (!groupedMockups[folder]) {
                groupedMockups[folder] = [];
            }
            groupedMockups[folder].push(key);
        } else {
            if (!groupedMockups['general']) {
                groupedMockups['general'] = [];
            }
            groupedMockups['general'].push(key);
        }
    });

    // Initialize expanded folders state with the first folder expanded
    const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>(() => {
        const folders = Object.keys(groupedMockups).sort();
        if (folders.length > 0) {
            // Find which folder contains the selected mockup
            if (selectedMockup) {
                const selectedFolder = selectedMockup.split('/')[0];
                return { [selectedFolder]: true };
            }
            // Otherwise expand the first folder
            return { [folders[0]]: true };
        }
        return {};
    });

    // ref for the mockup container
    const mockupRef = useRef<HTMLDivElement>(null);
    const laptopFrameRef = useRef<HTMLDivElement>(null);

    // get the current mockup component
    const CurrentMockup = selectedMockup ? mockups[selectedMockup] : null;

    // toggle folder expansion
    const toggleFolder = (folder: string) => {
        setExpandedFolders(prev => ({
            ...prev,
            [folder]: !prev[folder]
        }));
    };

    // When selected mockup changes, expand its folder
    useEffect(() => {
        if (selectedMockup) {
            const selectedFolder = selectedMockup.split('/')[0];
            setExpandedFolders(prev => ({
                ...prev,
                [selectedFolder]: true
            }));
        }
    }, [selectedMockup]);

    // Filter mockups based on search term
    const filteredMockups = searchFilter.trim() === ''
        ? groupedMockups
        : Object.keys(groupedMockups).reduce((filtered, folder) => {
            const matchingMockups = groupedMockups[folder].filter(mockupKey => {
                const mockupName = formatMockupName(mockupKey.split('/').pop() || '');
                return mockupName.toLowerCase().includes(searchFilter.toLowerCase());
            });

            if (matchingMockups.length > 0) {
                filtered[folder] = matchingMockups;
            }

            return filtered;
        }, {} as { [key: string]: string[] });

    // function to capture screenshot
    const captureScreenshot = () => {
        if (!laptopFrameRef.current || !selectedMockup) {
            console.error('Laptop frame not found or no mockup selected');
            return;
        }

        // Capture the laptop frame element
        toPng(laptopFrameRef.current, {
            backgroundColor: '#fff',
            quality: 0.95,
            pixelRatio: 2, // higher quality for retina displays
            skipAutoScale: true,
            cacheBust: true
        })
            .then((dataUrl) => {
                // create a download link
                const link = document.createElement('a');
                link.download = `${selectedMockup.replace('/', '-')}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error capturing screenshot:', error);
                alert('Failed to capture screenshot. See console for details.');
            });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* navigation header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-900">UI Mockup Renderer</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* main content area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col gap-6">
                    {/* top navigation bar (formerly sidebar) */}
                    <div className="w-full bg-white shadow rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h2 className="text-lg font-medium text-gray-900">Mockups</h2>

                            <div className="flex items-center gap-4 flex-1 md:max-w-md">
                                {/* Search input */}
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search mockups..."
                                        value={searchFilter}
                                        onChange={(e) => setSearchFilter(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    />
                                    {searchFilter && (
                                        <button
                                            onClick={() => setSearchFilter('')}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Screenshot button */}
                                {selectedMockup && (
                                    <button
                                        onClick={captureScreenshot}
                                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                        Capture Screenshot
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 overflow-x-auto">
                            <nav className="flex space-x-2 pb-2">
                                {Object.keys(filteredMockups).length === 0 ? (
                                    <div className="text-center py-4 text-gray-500 text-sm">
                                        No mockups found matching "{searchFilter}"
                                    </div>
                                ) : (
                                    Object.keys(filteredMockups).sort().map(folder => (
                                        <div key={folder} className="flex-shrink-0">
                                            <button
                                                onClick={() => toggleFolder(folder)}
                                                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-100 border border-gray-200"
                                            >
                                                <span className="uppercase tracking-wider">{formatMockupName(folder)}</span>
                                                <div className="flex items-center">
                                                    <span className="text-xs text-gray-500 ml-2 mr-1">{filteredMockups[folder].length}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform ${expandedFolders[folder] ? 'transform rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </button>
                                            {expandedFolders[folder] && (
                                                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-2 min-w-[200px]">
                                                    <div className="space-y-1">
                                                        {filteredMockups[folder].sort().map(mockupKey => (
                                                            <button
                                                                key={mockupKey}
                                                                onClick={() => setSelectedMockup(mockupKey)}
                                                                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${selectedMockup === mockupKey
                                                                    ? 'bg-primary-100 text-primary-700 border-l-4 border-primary-500'
                                                                    : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                                                                    }`}
                                                            >
                                                                {formatMockupName(mockupKey.split('/').pop() || '')}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </nav>
                        </div>
                    </div>

                    {/* mockup display area */}
                    <div className="flex-1 bg-white shadow rounded-lg p-6 flex items-center justify-center min-h-[600px]">
                        {CurrentMockup ? (
                            <div
                                ref={laptopFrameRef}
                                className="laptop-frame"
                                style={{
                                    width: '1024px',
                                    height: '640px',
                                    maxWidth: '100%',
                                    position: 'relative',
                                    background: '#f0f0f0',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    boxSizing: 'content-box'
                                }}
                            >
                                {/* Laptop screen */}
                                <div
                                    className="laptop-screen"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: '#fff',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        border: '1px solid #ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <div
                                        ref={mockupRef}
                                        className="mockup-container"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '20px',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <div style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <CurrentMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <p>Select a mockup to display</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockupRenderer; 