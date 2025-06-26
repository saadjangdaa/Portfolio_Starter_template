'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/login');
      } else {
        setUser(data.session.user);
      }
      setLoading(false);
    };
    getSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--f1-black)]">
        <div className="text-[var(--f1-white)] text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--f1-black)]">
      <div className="bg-[var(--f1-white)] p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-[var(--f1-red)]">Dashboard</h1>
        <p className="mb-6 text-[var(--f1-black)]">Welcome, <span className="font-semibold">{user?.email}</span>!</p>
        <button
          onClick={handleLogout}
          className="w-full bg-[var(--f1-red)] text-[var(--f1-white)] py-2 rounded-lg font-bold hover:bg-[var(--f1-yellow)] hover:text-[var(--f1-black)] transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
} 