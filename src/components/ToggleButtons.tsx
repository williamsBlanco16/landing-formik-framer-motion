import { FC, useMemo } from 'react';
import topicsData from '../../topic.json'

interface ToggleButtonsProps {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
}

export const ToggleButtons: FC<ToggleButtonsProps> = ({ selectedTopics, setSelectedTopics }) => {
  const topics = useMemo(() => Object.keys(topicsData), []);

  const handleToggle = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      // Uncheck if already selected
      setSelectedTopics(selectedTopics.filter(item => item !== topic));
    } else {
      // Check if not selected
      setSelectedTopics([...selectedTopics, topic]);
    }
  };


  return (
    <div role="group" aria-label="Toggle Topics" className="flex flex-wrap justify-center my-4">
      {topics.map(topic => (
        <button
          type='button'
          key={topic}
          onClick={() => handleToggle(topic)}
          className={`m-2 px-4 py-2 border rounded-full transition-all duration-300 
            ${selectedTopics.includes(topic) ? 'bg-[#7C2483] text-white' : 'bg-white text-[#7C2483] border-[#7C2483]'} 
            ${selectedTopics.includes(topic) ? 'hover:bg-[#7C2483] opacity-80' : 'hover:bg-[#f3e8f3] hover:text-white'}`}
            aria-pressed={selectedTopics.includes(topic)}
            aria-label={`Toggle ${topic}`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};
