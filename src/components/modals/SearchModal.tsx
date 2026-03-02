"use client";
import { useModalStore } from '@/store/useModalStore';
import Modal from './Modal';

const results = [];

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useModalStore();
  return (
    <Modal onClose={closeSearch} isOpen={isSearchOpen}>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search articles"
          autoFocus
          className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-lg outline-none focus:border-indigo-500"
        />
        <div>
          {results.map((result) => {
            return (
              <button
                key={result.id}
                className="w-full text-left px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white cursor-pointer"
              >
                {result.title}
              </button>
            )
          }
          )}
        </div>
      </div>

    </Modal>
  )
}

/*
          value={query}
          onChange={(e) => setQuery(e.target.value)}
*/