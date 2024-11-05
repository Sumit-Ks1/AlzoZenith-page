import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, BellDot } from 'lucide-react';

const App = () => {
  const [expandedParts, setExpandedParts] = useState({
    part1: true,
    part2: false,
    part3: false
  });

  const togglePart = (part) => {
    setExpandedParts((prev) => ({
      ...prev,
      [part]: !prev[part]
    }));
  };

  const chapters = [
    { id: 1, title: 'Chapter 1', time: '05:00:00', active: true },
    { id: 2, title: 'Chapter 2', time: '', active: false },
    { id: 3, title: 'Chapter 3', time: '', active: false },
    { id: 4, title: 'Chapter 4', time: '', active: false },
    { id: 5, title: 'Chapter 5', time: '', active: false }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-6">AlgoZenith</h1>
        </div>
        
        <nav className="space-y-4">
          <div className="flex items-center gap-3 p-2 text-gray-700">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M4 13h6v6H4v-6zm8-8h6v6h-6V5zm0 8h6v6h-6v-6zM4 5h6v6H4V5z"/>
              </svg>
            </div>
            <span>Dashboard</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 text-gray-700">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>Learn</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 text-gray-700">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
              </svg>
            </div>
            <span>Forums</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 bg-blue-50 text-blue-600 rounded-lg">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
              </svg>
            </div>
            <span>Upskill</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 text-gray-700">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H7V7z"/>
              </svg>
            </div>
            <span>Contest</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 text-gray-700">
            <div className="grid place-items-center w-5 h-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
              </svg>
            </div>
            <span>Leaderboard</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Navigation */}
        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white border rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/>
              </svg>
              Mentor Sessions
            </button>
            <button className="px-4 py-2 bg-blue-50 border-blue-100 border rounded-lg flex items-center gap-2 text-blue-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>
              </svg>
              Learning Material
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg flex items-center gap-2">
            How it works
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-6">
          {/* Chapters List - Left Side */}
          <div className="w-64 space-y-2">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  chapter.active ? 'bg-blue-50 text-blue-600' : 'bg-white'
                }`}
              >
                <span>{chapter.title}</span>
                {chapter.time && <span>{chapter.time}</span>}
              </div>
            ))}
          </div>

          {/* Content Sections - Right Side */}
          <div className="flex-1 space-y-4">
            {/* Part 1 */}
            <div className="bg-white rounded-lg shadow-sm">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => togglePart('part1')}
              >
                <div>
                  <span className="text-gray-500">PART 1</span>
                  <h3 className="font-semibold">Lorem Ipsum Dolor Sit Amet</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>02:00:00</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded">Medium</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
                    </svg>
                    5
                  </span>
                  <span>45% Completed</span>
                  {expandedParts.part1 ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              
              {expandedParts.part1 && (
                <div className="p-4 border-t">
                  <div className="space-y-4">
                    {[
                      { icon: "video", label: "Video 1" },
                      { icon: "article", label: "Article 1" },
                      { icon: "quiz", label: "Quiz 1" },
                      { icon: "code", label: "Coding Exercise 1" },
                      { icon: "resource", label: "Combined Resource 1" }
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          {item.label}
                        </div>
                        <span>10:00</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Part 2 & 3 */}
            {[2, 3].map((partNum) => (
              <div key={`part${partNum}`} className="bg-white rounded-lg shadow-sm">
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => togglePart(`part${partNum}`)}
                >
                  <div>
                    <span className="text-gray-500">PART {partNum}</span>
                    <h3 className="font-semibold">Lorem Ipsum Dolor Sit Amet</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>02:00:00</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 rounded">Medium</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
                      </svg>
                      12
                    </span>
                    <span>{partNum === 2 ? '20%' : '0%'} Completed</span>
                    {expandedParts[`part${partNum}`] ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;