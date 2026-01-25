import React from 'react';
import WorkDetailPage from './WorkDetailPage';
import weblingoThumbnail from '../images/weblingo.png';

interface WeblingoPageProps {
  onBack: () => void;
}

const WeblingoPage: React.FC<WeblingoPageProps> = ({ onBack }) => {
  return (
    <WorkDetailPage
      title="WebLinguo: Prototype"
      subtitle="A browser plugin that helps users learn a second language in context."
      date="2025"
      onBack={onBack}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <p className="text-lg text-gray-700">UI, UXR</p>
        <p className="text-lg text-gray-700">Carleton CS344 Human-Computer Interaction</p>
      </div>

      <img
        src={weblingoThumbnail}
        alt="WebLinguo"
        className="w-full rounded-2xl object-cover mb-12"
      />

      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-2">Overview</h3>
        <p className="text-lg text-gray-600">WebLinguo makes language learning part of everyday browsing.
Instead of switching between translation tools and language apps, users translate words directly on websites, review their vocabulary history, and take quizzes to reinforce memory.

</p>      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-6">Research</h3>

        {/* Block 1: Methods & key findings */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            We used <strong>fictional inquiry</strong>, <strong>participatory design</strong> (sticky notes) to explore feature ideas, and later ran <strong>co-discovery usability tests</strong>.
          </p>
          <h4 className="text-lg font-semibold text-black mb-3">Key findings</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-medium text-gray-900 shrink-0">Instant translation is essential</span>
              <span className="text-gray-600">— Users don’t want to lose focus or open new tabs.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-gray-900 shrink-0">Memory support matters</span>
              <span className="text-gray-600">— Users forget words quickly without review.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-gray-900 shrink-0">Active practice improves retention</span>
              <span className="text-gray-600">— Quizzes and recall feel motivating and familiar.</span>
            </li>
          </ul>
        </div>

        {/* Block 2: Core requirements (3 cards) + Solution */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8">
          <p className="text-lg text-gray-700 mb-4">
            We distilled our research into three core requirements that formed the foundation of the product:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h4 className="font-semibold text-black mb-1">Translation</h4>
              <p className="text-gray-600 text-sm">Direct lookup for words and phrases without breaking browsing flow.</p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-semibold text-black mb-1">Remembering</h4>
              <p className="text-gray-600 text-sm">History of previously translated words for review and reinforcement.</p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h4 className="font-semibold text-black mb-1">Quizzes</h4>
              <p className="text-gray-600 text-sm">Lightweight active recall to help learners retain vocabulary.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-black mb-2">Solution</h4>
            <p className="text-gray-700 mb-2">
              WebLinguo is a browser plugin that supports second-language learning through: contextual translation, structured vocabulary history, quiz-based reinforcement, and customizable learning settings. It blends real-world web content with interactive learning.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-black mb-2">Develop</h3>
        <p className="text-lg text-gray-600">Placeholder sentence.</p>
      </section>
    </WorkDetailPage>
  );
};

export default WeblingoPage;
