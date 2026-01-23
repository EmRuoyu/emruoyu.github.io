import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Ruoyu Zhang</h1>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
        An Information System and Interaction designer.
      </p>
      <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
        Currently <b className="font-semibold text-black">@UMich</b>
      </p>
    </header>
  );
};

export default Header;
