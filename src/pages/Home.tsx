import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Searchbar from '../components/Searchbar';
import NewButton from '../components/NewButton';
import JournalCards from '../components/JournalCards';
import { Journal, NewJournalData } from '../types';

// Key for localStorage
const JOURNAL_STORAGE_KEY = 'journals_app_data';

const Home: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>(() => {
    // Load from localStorage on initial render
    const savedJournals = localStorage.getItem(JOURNAL_STORAGE_KEY);
    return savedJournals ? JSON.parse(savedJournals) : [];
  });

  // Save to localStorage whenever journals change
  useEffect(() => {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journals));
  }, [journals]);

  const handleAddJournal = (newJournal: NewJournalData) => {
    const journal: Journal = {
      id: Date.now().toString(),
      title: newJournal.title,
      description: newJournal.description,
      createdAt: new Date().toLocaleDateString(),
      cardColor: newJournal.cardColor,        // Add this
      titleColor: newJournal.titleColor,      // Add this
      descriptionColor: newJournal.descriptionColor // Add this
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