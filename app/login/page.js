// app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        console.log('Form submitted - preparing to call API', { username });

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',   // ← ADD THIS
                body: JSON.stringify({
                    username,
                    password,
                }),
            });


            console.log('API response status:', response.status);

            let data;
            try {
                data = await response.json();
                console.log('API response data:', data);
            } catch (jsonErr) {
                console.error('Failed to parse JSON response:', jsonErr);
                throw new Error('Invalid response from server');
            }

            if (!response.ok) {
                setError(data.error || 'Invalid username or password');
                console.log('Login failed:', data.error);
                return;
            }

            console.log('Login successful - redirecting to /admin/projects');
            router.push('/admin/projects');
        } catch (err) {
            console.error('Login fetch error:', err.message);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-md p-8 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">Admin Login</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                            placeholder="Enter username"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                            placeholder="Enter password"
                            required
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center bg-red-950/30 p-3 rounded border border-red-800/50">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`
              w-full py-3 rounded-md font-medium transition-colors
              ${loading
                                ? 'bg-yellow-700 cursor-not-allowed'
                                : 'bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700'
                            }
              text-black
            `}
                    >
                        {loading ? 'Signing in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}