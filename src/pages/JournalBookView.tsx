import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { Journal } from '../types';
import './JournalBookView.css';

// Mock data - replace with your actual data fetching logic
const mockJournals: Journal[] = [
  {
    id: '1',
    title: 'My First Journal',
    description: 'This is a detailed description of my first journal entry. It contains my thoughts and experiences from this period.',
    cardColor: '#FFD166',
    titleColor: '#000000',
    descriptionColor: '#333333',
    createdAt: '2023-05-15',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.'
  },
  // Add more journals as needed
];

const JournalBookView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const journal = mockJournals.find(j => j.id === id);

  if (!journal) {
    return <div>Journal not found</div>;
  }

  return (
    <IonPage className="journal-book-view">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{journal.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="book-content">
        <div className="book-cover" style={{ backgroundColor: journal.cardColor }}>
          <div className="cover-content">
            <h1 className="book-title" style={{ color: journal.titleColor }}>{journal.title}</h1>
            <p className="book-description" style={{ color: journal.descriptionColor }}>
              {journal.description}
            </p>
          </div>
        </div>
        
        <div className="book-body">
          <div className="book-page">
            <div className="page-content">
              <h2>Details</h2>
              <p><strong>Created:</strong> {journal.createdAt}</p>
              
              <h2>Full Description</h2>
              <p>{journal.description}</p>
              
              <h2>Content</h2>
              {journal.content ? (
                <div className="journal-content-text">
                  {journal.content}
                </div>
              ) : (
                <p>No additional content available.</p>
              )}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default JournalBookView;