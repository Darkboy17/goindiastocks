// components/Tabs.tsx
import React, { ReactNode, useState } from 'react';
import ForumCard from './ForumCard';
import MSCard from './MSCard';

interface TabProps {
  children: TabContent;
}

interface TabContent {
  tab1?: ReactNode;
  tab2?: ReactNode;
 }

export const Tabs: React.FC<TabProps> = ({ children }) => {
 const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');

 const handleTabClick = (tab: 'tab1' | 'tab2') => {
    setActiveTab(tab);
 };

 return (
    <div className="">
      <div className="min-w-auto flex">
        <button
          onClick={() => handleTabClick('tab1')}
          className={`w-full sm:w-auto p-4 bg-blue-500 text-white rounded-t-lg ${activeTab === 'tab1' ? 'bg-blue-700' : ''}`}
        >
          Discussion Forum
        </button>
        <button
          onClick={() => handleTabClick('tab2')}
          className={`w-full sm:w-auto p-4 bg-blue-500 text-white rounded-t-lg ${activeTab === 'tab2' ? 'bg-blue-700' : ''}`}
        >
          Market Stories
        </button>
      </div>
      <div className={`w-full p-4 bg-white rounded-b-lg ${activeTab === 'tab1' ? '' : 'hidden'}`}>
        {/* Tab 1 Content Here */}
                {/* Check if children.tab1 is defined before rendering */}
                {children.tab1 && <div className="">{children.tab1}</div>}
      </div>
      <div className={`w-full p-4 bg-white rounded-b-lg ${activeTab === 'tab2' ? '' : 'hidden'}`}>
        {/* Tab 2 Content Here */}
        {/* Check if children.tab2 is defined before rendering */}
        {children.tab2 && <div className="">{children.tab2}</div>}
      </div>
    </div>
 );
};

export default Tabs;