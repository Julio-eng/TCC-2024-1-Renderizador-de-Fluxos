'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface Occupation {
  id: string;
  name: string;
}

interface Props {
  occupations: Occupation[];
}

const OccupationSearch = ({ occupations }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOccupations = occupations.filter((occupation) =>
    occupation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Pesquisar"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </form>

      <div className='flex flex-col gap-3'>
        {filteredOccupations.length > 0 ? (
          filteredOccupations.map((occupation) => (
            <Link className='btn btn-wide' key={occupation.id} href={`/FormFlow?endpointId=${occupation.id}`}>
              {occupation.name}
            </Link>
          ))
        ) : (
          <p>Nenhum fluxo encontrado.</p>
        )}
      </div>
    </>
  );
};

export default OccupationSearch;
