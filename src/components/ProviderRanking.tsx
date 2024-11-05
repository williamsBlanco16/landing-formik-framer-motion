import React, { useEffect, useRef, useMemo, useState } from 'react';
import Chart from 'chart.js/auto';
import providersData from '../../topic.json';

type TopicName = 'Calidad' | 'Velocidad' | 'Precio' | 'Latencia' | 'Tiempo Total de Respuesta';

interface Score {
  score: number;
  ranking: number;
  unit: string;
}

interface Provider {
  provider: string;
  scores: Record<TopicName, Score>;
}

interface ProviderRankingProps {
  selectedTopics: TopicName[];
  bestProviders: { provider: string; averageRanking: number }[];
}

const truncateText = (text: string, maxLength: number = 10) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

// Array de colores variados
const colors = [
  'rgba(75, 192, 192, 0.6)',  // Aqua
  'rgba(153, 102, 255, 0.6)',  // Purple
  'rgba(255, 159, 64, 0.6)',   // Orange
  'rgba(255, 99, 132, 0.6)',   // Red
  'rgba(54, 162, 235, 0.6)',   // Blue
  'rgba(255, 205, 86, 0.6)',   // Yellow
  'rgba(201, 203, 207, 0.6)',  // Gray
  'rgba(255, 99, 71, 0.6)',    // Tomato
  'rgba(0, 255, 127, 0.6)',    // Spring Green
  'rgba(0, 191, 255, 0.6)',    // Deep Sky Blue
];

const ProviderRanking: React.FC<ProviderRankingProps> = ({ selectedTopics, bestProviders }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicName>(selectedTopics[0]);

  const filteredProviders = providersData.providers.filter((provider: Provider) =>
    selectedTopics.every(topic => topic in provider.scores)
  );

  const data = useMemo(() => ({
    labels: [selectedTopic],
    datasets: filteredProviders.map((provider, index) => ({
      label: provider.provider,
      data: [provider.scores[selectedTopic]?.score || 0],
      backgroundColor: colors[index % colors.length],  // Asignar color cíclicamente
    })),
  }), [filteredProviders, selectedTopic]);

  const options = useMemo(() => ({
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Puntajes',
          color: '#7C2483',
        },
        ticks: {
          color: '#7C2483',
        },
      },
      x: {
        ticks: {
          color: '#7C2483',
        },
      },
    },
    maintainAspectRatio: false,
  }), [selectedTopic]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  const handleViewDetail = (topic: TopicName) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex-1 md:p-4 md:w-1/2 overflow-auto max-h-[600px]">
        <h2 className="text-2xl font-semibold mb-4 text-[#7C2483] text-center">Top Proveedores</h2>

        <div className="mt-4 p-4 bg-[#f3e8f3] border-l-4 border-[#7C2483] text-[#7C2483] rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">El mejor proveedor según tus elecciones es:</h3>
          <p className="text-xl font-bold text-center mt-2">
            <strong>{bestProviders[0]?.provider}</strong>
          </p>
          <p className="text-sm text-center mt-1">Con estos puntajes:</p>
          <div className="mt-4">
            {selectedTopics.map(topic => (
              <div key={topic} className="flex justify-between items-center text-sm border-b py-2">
                <span className="text-[#7C2483] font-medium">{truncateText(topic)}</span>
                <span>
                  {filteredProviders[0].scores[topic]?.score || 0} {filteredProviders[0].scores[topic]?.unit}
                </span>
                <button
                  onClick={() => handleViewDetail(topic)}
                  className="ml-4 bg-[#7C2483] text-white px-2 py-1 rounded hover:bg-[#4EA1D3] transition"
                >
                  Ver Detalle
                </button>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-lg mt-4">Los siguientes son:</h3>
          {bestProviders.slice(1).map(provider => (
            <div key={provider.provider} className="border-b py-4">
              <p className="flex justify-between items-center text-sm">
                <strong className="text-[#7C2483]">{provider.provider}</strong>
              </p>
              <div className="mt-2">
                {selectedTopics.map(topic => (
                  <div key={topic} className="flex justify-between items-center text-sm">
                    <span className="text-[#7C2483]">{truncateText(topic)}</span>
                    <span>
                      {providersData.providers.find(p => p.provider === provider.provider)?.scores[topic]?.score || 0} 
                      {' '} {providersData.providers.find(p => p.provider === provider.provider)?.scores[topic]?.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 mt-4 md:mt-0 md:w-1/2 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProviderRanking;
