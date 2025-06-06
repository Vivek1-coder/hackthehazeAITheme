'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded cursor-pointer"
    >
      Logout
    </button>
  );
}
