import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import Profile from '../components/Profile';
import Searchbar from '../components/Searchbar';
import NewButton from '../components/NewButton';
import JournalCards from '../components/JournalCards';
import { Journal, NewJournalData } from '../types';

const Home: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>([]);

  const handleAddJournal = (newJournal: NewJournalData) => {
    const journal: Journal = {
      id: Date.now().toString(),
      title: newJournal.title,
      subtitle: 'New Journal Subtitle',
      description: newJournal.description,
      createdAt: new Date().toLocaleDateString()
    };
    setJournals([...journals, journal]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Profile />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Searchbar />
          <NewButton onSave={handleAddJournal} />
        </div>
        <JournalCards journals={journals} />
      </IonContent>
    </IonPage>
  );
};

export default Home;