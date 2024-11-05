import { Provider } from './types';

export const calculateTopProviders = (
  providers: Provider[],
  selectedTopics: string[]
): { provider: string; averageRanking: number }[] => {
  if (!selectedTopics.length) return [];

  const providerRankings = providers.map(provider => {
    const totalRanking = selectedTopics.reduce((total, topic) => {
      const ranking = provider.scores[topic]?.ranking || Infinity; // Usar Infinity si no se encuentra
      return total + ranking;
    }, 0);

    // Calcular el promedio del ranking
    const averageRanking = totalRanking / selectedTopics.length || Infinity;

    return { provider: provider.provider, averageRanking };
  });

  // Ordenar de menor a mayor por promedio (menor ranking es mejor)
  const result = providerRankings
    .sort((a, b) => a.averageRanking - b.averageRanking)
    .slice(0, 3); // Retornar solo los tres mejores
  console.log('result:', result)
  return result
};


