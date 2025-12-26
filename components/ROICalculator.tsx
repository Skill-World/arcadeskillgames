import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CalculationData } from '../types';

const ROICalculator: React.FC = () => {
  const [machines, setMachines] = useState(2);
  const [playsPerDay, setPlaysPerDay] = useState(50);
  const [avgTicketSize, setAvgTicketSize] = useState(5); // $5 per play
  const [venueShare, setVenueShare] = useState(40); // 40% keep

  const data = useMemo<CalculationData[]>(() => {
    const dailyGross = machines * playsPerDay * avgTicketSize;
    const dailyNet = dailyGross * (venueShare / 100);
    const monthlyNet = dailyNet * 30;

    return [
      { month: 'Month 1', revenue: monthlyNet },
      { month: 'Month 3', revenue: monthlyNet * 3 },
      { month: 'Month 6', revenue: monthlyNet * 6 },
      { month: '1 Year', revenue: monthlyNet * 12 },
    ];
  }, [machines, playsPerDay, avgTicketSize, venueShare]);

  const annualRevenue = data[3].revenue;

  return (
    <section id="roi" className="py-20 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Calculate Your Potential Profit</h2>
            <p className="text-gray-400 mb-8">
              See the power of skill-based gaming in your venue. Adjust the sliders based on your traffic to estimate your net profit share.
              <br /><br />
              <span className="text-sm italic opacity-70">*Estimates only. Actual results vary by location and traffic.</span>
            </p>

            <div className="space-y-6 bg-brand-900 p-8 rounded-2xl border border-brand-700">
              {/* Controls */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Number of Machines</label>
                  <span className="text-brand-400 font-bold">{machines}</span>
                </div>
                <input 
                  type="range" min="1" max="20" value={machines} 
                  onChange={(e) => setMachines(Number(e.target.value))}
                  className="w-full h-2 bg-brand-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Plays Per Day (Avg)</label>
                  <span className="text-brand-400 font-bold">{playsPerDay}</span>
                </div>
                <input 
                  type="range" min="10" max="200" value={playsPerDay} 
                  onChange={(e) => setPlaysPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-brand-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Avg Play Amount ($)</label>
                  <span className="text-brand-400 font-bold">${avgTicketSize}</span>
                </div>
                <input 
                  type="range" min="1" max="20" value={avgTicketSize} 
                  onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                  className="w-full h-2 bg-brand-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-medium">Your Profit Share (%)</label>
                  <span className="text-brand-400 font-bold">{venueShare}%</span>
                </div>
                <input 
                  type="range" min="10" max="100" value={venueShare} 
                  onChange={(e) => setVenueShare(Number(e.target.value))}
                  className="w-full h-2 bg-brand-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700 h-full flex flex-col justify-center">
            <div className="text-center mb-8">
              <span className="text-gray-400 uppercase tracking-widest text-sm">Estimated Annual Net Profit</span>
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600 mt-2">
                ${annualRevenue.toLocaleString()}
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickFormatter={(val) => `$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#34d399' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Profit']}
                  />
                  <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              Figures are based on gross daily play volume minus venue split. Does not include local taxes or electricity costs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;