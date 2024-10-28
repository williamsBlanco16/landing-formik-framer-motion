import { FC } from 'react';

interface ToggleButtonsProps {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
}

const topics = [
  'Quality and Context Window',
  'Pricing',
  'Performance Summary',
  'Speed',
  'Latency',
  'Total Response Time'
];

export const ToggleButtons: FC<ToggleButtonsProps> = ({ selectedTopics, setSelectedTopics }) => {
  
  const handleToggle = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      // Desmarcar si ya está seleccionado
      setSelectedTopics(selectedTopics.filter(item => item !== topic));
    } else {
      // Marcar si no está seleccionado
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center my-4">
      {topics.map(topic => (
        <button
          type='button'
          key={topic}
          onClick={() => handleToggle(topic)}
          className={`m-2 px-4 py-2 border rounded-full transition-all duration-300 
            ${selectedTopics.includes(topic) ? 'bg-[#7C2483] text-white' : 'bg-white text-[#7C2483] border-[#7C2483]'} 
            ${selectedTopics.includes(topic) ? 'hover:bg-[#7C2483] opacity-80' : 'hover:bg-[#f3e8f3] hover:text-white'}`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};
