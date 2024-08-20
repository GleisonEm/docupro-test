import React from 'react';
import { Header } from '../components/Header';
import SearchBar from '../components/SearchBar';
import DocumentTable from '../components/DocumentTable';
import SideBar from '../components/SideBar';

const DocumentList: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <SideBar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SearchBar />
            <DocumentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentList;