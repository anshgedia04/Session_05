const API_URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json';

export const fetchGames = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }
    const data = await response.json();
    
    // API might return data with missing fields. 
    // We explicitly filter for items with valid strings for title and platform 
    // to prevent "Cannot read properties of undefined (reading 'toLowerCase')" errors in the UI.
    const validGames = Array.isArray(data) 
      ? data.filter((item) => item && typeof item.title === 'string' && typeof item.platform === 'string')
      : [];
    
    // Remove duplicates based on title and platform to ensure clean list (optional but good for UX)
    const uniqueGames = validGames.reduce((acc, current) => {
      const x = acc.find(item => item.title === current.title && item.platform === current.platform);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    return uniqueGames;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};