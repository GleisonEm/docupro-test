
import React from 'react';

interface Document {
  title: string;
  date: string;
  type: string;
}

const DocumentTable: React.FC = () => {
  const documents: Document[] = [
    { title: 'Annual Physical Exam', date: 'Aug 21, 2022', type: 'Medical' },
    { title: 'Blood Test', date: 'Aug 20, 2022', type: 'Lab' },
    { title: 'MRI Scan', date: 'Aug 19, 2022', type: 'Imaging' },
    { title: 'Vaccination Record', date: 'Jul 15, 2022', type: 'Immunization' },
    { title: 'Consultation Notes', date: 'Jul 14, 2022', type: 'Medical' },
  ];

  return (
    <div className="px-4 py-3 @container">
      <div className="flex overflow-hidden rounded-xl border border-[#DEDEDE] bg-[#FFFFFF]">
        <table className="flex-1">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="table-column px-4 py-3 text-left text-black w-[400px] text-sm font-medium leading-normal">Title</th>
              <th className="table-column px-4 py-3 text-left text-black w-[400px] text-sm font-medium leading-normal">Date</th>
              <th className="table-column px-4 py-3 text-left text-black w-60 text-sm font-medium leading-normal">Type</th>
              <th className="table-column px-4 py-3 text-left text-black w-[400px] text-sm font-medium leading-normal">Status</th>
              <th className="table-column px-4 py-3 text-left text-black w-60 text-[#6B6B6B] text-sm font-medium leading-normal"></th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="border-t border-t-[#DEDEDE]">
                <td className="table-column h-[72px] px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">{doc.title}</td>
                <td className="table-column h-[72px] px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">{doc.date}</td>
                <td className="table-column h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#EEEEEE] text-black text-sm font-medium leading-normal w-full">
                    <span className="truncate">{doc.type}</span>
                  </button>
                </td>
                <td className="table-column h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                  <div className="flex items-center gap-3">
                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#DEDEDE]"><div className="h-1 rounded-full bg-black"></div></div>
                    <p className="text-black text-sm font-medium leading-normal">NaN</p>
                  </div>
                </td>
                <td className="table-column h-[72px] px-4 py-2 w-60 text-[#6B6B6B] text-sm font-bold leading-normal tracking-[0.015em]">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>
        {`
          @container (max-width: 768px) {
            .table-column:nth-child(4), .table-column:nth-child(5) {
              display: none;
            }
          }
          @container (max-width: 640px) {
            .table-column:nth-child(3) {
              display: none;
            }
          }
          @container (max-width: 480px) {
            .table-column:nth-child(2) {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DocumentTable;