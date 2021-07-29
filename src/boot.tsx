import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
// Component
import Header from './components/page/header';
import Main from './components/page/main/main';
import Layout from './layout';
import breedServiceProvider from './services/breed';
import Prediction from './utils/prediction';
import { predictionMapper } from './utils/predictionMapper';

interface IProps {
  breedsList: string[];
}

const Boot: React.FC<IProps> = ({ breedsList }: IProps): ReactElement => {
  const [selectedImageFile, setSelectedImageFile] = useState<File>();
  const [predictions, setPredictions] = useState<string[]>([]);
  const [mappedPredictions, setMappedPredictions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const imgRef = useRef<HTMLImageElement>(null);

  const getPredictions = useCallback(async () => {
    if (imgRef.current) {
      setAnalyzing(true);
      const prediction = new Prediction(imgRef.current);
      await prediction.makePrediction();
      const predictionsArray = prediction.getPredictions();
      setPredictions(predictionsArray);
      setAnalyzing(false);
    }
  }, [imgRef]);

  useEffect(() => {
    getPredictions();
  }, [getPredictions, selectedImageFile]);

  const handleSelectedImage = (selectedImage: File) => {
    setSelectedImageFile(selectedImage);
  };

  useEffect(() => {
    const mappedPredictionsResult = predictionMapper(predictions, breedsList);
    setMappedPredictions(mappedPredictionsResult);
    setImagesUrl([]);
  }, [breedsList, predictions]);

  const handleSelectedBreed = (breed: string): void => {
    setSelectedBreed(breed);
  };

  const getBreedsImage = useCallback(async () => {
    if (selectedBreed) {
      try {
        setLoading(true);
        const { data } = await breedServiceProvider.getAllImagesByBreedType(
          selectedBreed,
        );
        setImagesUrl(data.message);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  }, [selectedBreed]);

  useEffect(() => {
    getBreedsImage();
  }, [getBreedsImage, selectedBreed]);

  return (
    <Layout>
      {selectedImageFile && (
        <img
          ref={imgRef}
          src={URL.createObjectURL(selectedImageFile)}
          alt='File Uploaded'
          hidden
        />
      )}
      <Header
        onSelectedImage={handleSelectedImage}
        mappedPredictions={mappedPredictions}
        onBreedClick={handleSelectedBreed}
        selectedBreed={selectedBreed}
        analyzing={analyzing}
      />
      <Main loading={loading} imagesUrl={imagesUrl} />
    </Layout>
  );
};

export default Boot;
