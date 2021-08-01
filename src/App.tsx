import React, { ReactElement, useCallback, useEffect, useState } from 'react';
// Components
import Boot from './boot';
import findText from './replace-hardcode-text';
// Services
import breedServiceProvider from './services/breed';

const App: React.FC = (): ReactElement => {
  const [breedsList, setBreedsList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchBreedsList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await breedServiceProvider.getAllBreedTypes();
      setBreedsList(Object.keys(response.data.message));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreedsList();
  }, [fetchBreedsList]);

  return loading ? (
    <h1>{findText('getInformation')}</h1>
  ) : (
    <Boot breedsList={breedsList} />
  );
};

export default App;
