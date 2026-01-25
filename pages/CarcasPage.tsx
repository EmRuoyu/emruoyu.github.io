import React from 'react';
import WorkDetailPage from './WorkDetailPage';
import carcasThumbnail from '../images/carcas.png';

interface CarcasPageProps {
  onBack: () => void;
}

const CarcasPage: React.FC<CarcasPageProps> = ({ onBack }) => {
  return (
    <WorkDetailPage
      title="Carcas: 3d Specimen Viewer"
      subtitle="A standalone app to host Carleton archaeology lab 3D osteology collection"
      date="2025"
      onBack={onBack}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <p className="text-lg text-gray-700">UI,UX, Front-end</p>
        <p className="text-lg text-gray-700">
          <a
            href="https://www.carleton.edu/digital-humanities/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:no-underline"
          >
            Carleton College Digital Humanities Center
          </a>
          {' & '}
          <a
            href="https://www.carleton.edu/carcas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:no-underline"
          >
            Carleton Archaeological Research
          </a>
        </p>
      </div>

      <a
        href="https://3dviewer.sites.carleton.edu/carcas-app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors mb-10"
      >
        View site
      </a>

      <img
        src={carcasThumbnail}
        alt="Carcas 3D Specimen Viewer"
        className="w-full rounded-2xl object-cover mb-12"
      />

      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-2">Context</h3>
        <p className="text-lg text-gray-600">Placeholder sentence.</p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-2">Research</h3>
        <p className="text-lg text-gray-600">Placeholder sentence.</p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-2">Develop</h3>
        <p className="text-lg text-gray-600">Placeholder sentence.</p>
      </section>
    </WorkDetailPage>
  );
};

export default CarcasPage;
