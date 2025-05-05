import React, { useEffect, useState } from 'react';
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { Journal } from '../types';
import './JournalBookView.css';

const JOURNAL_STORAGE_KEY = 'journals_app_data';

const JournalBookView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [journal, setJournal] = useState<Journal | null>(null);

  useEffect(() => {
    // Load journal from localStorage
    const savedJournals = localStorage.getItem(JOURNAL_STORAGE_KEY);
    if (savedJournals) {
      const journals: Journal[] = JSON.parse(savedJournals);
      const foundJournal = journals.find(j => j.id === id);
      setJournal(foundJournal || null);
    }
  }, [id]);

  if (!journal) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Cephaline/Journals" />
            </IonButtons>
            <IonTitle>Journal Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="not-found-message">
            The requested journal could not be found.
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage className="journal-book-view">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Cephaline/Journals" />
          </IonButtons>
          <IonTitle>{journal.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="journal-content">
        <IonCard style={{ backgroundColor: journal.cardColor }}>
          <IonCardHeader>
            <IonCardTitle style={{ color: journal.titleColor }}>
              {journal.title}
            </IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            <div className="journal-meta">
              <p className="journal-date">Created: {journal.createdAt}</p>
            </div>
            
            <div className="journal-description" style={{ color: journal.descriptionColor }}>
              <h3>Description</h3>
              <p>{journal.description}</p>
            </div>
            
            <div className="journal-full-content">
              <h3>Journal Entry</h3>
              {journal.content ? (
                <p>{journal.content}</p>
              ) : (
                <p>No additional content available.</p>
              )}
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default JournalBookView;