import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps
} from 'recharts';
import { skillsData, timelineData } from '../data';

export const SkillsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] sm:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
          <PolarGrid gridType="polygon" stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Proficiency"
            dataKey="A"
            stroke="#f59e0b"
            strokeWidth={2}
            fill="#f59e0b"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-700 text-white p-3 rounded-lg shadow-xl text-xs max-w-[200px]">
        <p className="font-bold text-amber-500 mb-1">{data.year}</p>
        <p className="mb-1">{data.event}</p>
        <p className="text-slate-400">Intensity: {data.intensity}%</p>
      </div>
    );
  }
  return null;
};

export const TimelineChart: React.FC = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={timelineData}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis 
            dataKey="year" 
            tick={{ fill: '#64748b', fontSize: 10 }} 
            axisLine={{ stroke: '#334155' }}
            tickLine={false}
          />
          <YAxis hide domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="intensity"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4, fill: '#06b6d4', strokeWidth: 0 }}
            activeDot={{ r: 8, fill: '#67e8f9' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};