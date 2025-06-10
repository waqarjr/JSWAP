import React, { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Account');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium mb-3">General</h3>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'Account' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab('Account')}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  <span>Account</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <div className="w-5 h-5">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Egibility</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <div className="w-5 h-5">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Whitelisted</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Flag at bottom */}
        <div className="absolute bottom-4 left-4">
          <div className="w-6 h-4 bg-red-500 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-white to-red-500"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-red-600"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1.5 rounded-lg">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm font-medium">BSC</span>
              </div>
              <div className="text-sm text-gray-300">
                1,581 BNB | <span className="font-mono">0xBBB6A7...6hn9</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Account</h1>

            {/* Login Section */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">You are not logged in to a Account Profile</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Login
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Wallet Address */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v6m8-6v6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-300">0xBBB6A7...6hn9</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span className="text-sm text-gray-400">580 BNB</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-700 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Token Balances */}
                <div className="space-y-4">
                  {/* DOT */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">D</span>
                      </div>
                      <h3 className="text-xl font-semibold">DOT</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Balance</div>
                        <div>ETH: 10 DOT</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">BSC: 150 DOT</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">xDai: 10 DOT</div>
                      </div>
                    </div>
                  </div>

                  {/* IPAD */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">I</span>
                      </div>
                      <h3 className="text-xl font-semibold">IPAD</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Balance</div>
                        <div>ETH: 0 IPAD</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">BSC: 80 IPAD</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">xDai: 2 IPAD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Lock */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Your Token Lock</h3>
                  <button className="p-1 hover:bg-gray-700 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">0 tokens</div>
                  <p className="text-gray-400 text-sm">No Token locks for your account on this chain.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-bold">DotIPAD</div>
              <div className="grid grid-cols-3 gap-16 text-sm">
                <div className="space-y-2">
                  <div><a href="#" className="text-gray-400 hover:text-white">Careers</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">About Dotipad</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Council</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Apply for Launchpad</a></div>
                </div>
                <div className="space-y-2">
                  <div><a href="#" className="text-gray-400 hover:text-white">Terms and conditions</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Documentation</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Audits</a></div>
                </div>
                <div className="space-y-2">
                  <div><a href="#" className="text-gray-400 hover:text-white">Documentation</a></div>
                  <div><a href="#" className="text-gray-400 hover:text-white">Dotipad.js</a></div>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm">
              Dotipad © 2021 • support@dotipad.io • All rights reserved. Designed by Twenty-Two
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}