import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Journal } from '../types';
import './JournalBookView.css';

interface JournalBookViewProps {
  journal: Journal;
  onClose: () => void;
}

const JournalBookView: React.FC<JournalBookViewProps> = ({ journal, onClose }) => {
  return (
    <IonPage className="book-view-container">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{journal.title}</IonTitle>
          <IonButton slot="end" onClick={onClose}>Close</IonButton>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="book-content">
        <div className="book-cover" style={{ backgroundColor: journal.cardColor }}>
          <h1 className="book-title" style={{ color: journal.titleColor }}>{journal.title}</h1>
        </div>
        
        <div className="book-pages">
          <div className="book-page left-page">
            <div className="page-content">
              <h2>Details</h2>
              <p><strong>Created:</strong> {journal.createdAt}</p>
              <p><strong>Last Updated:</strong> {journal.updatedAt || journal.createdAt}</p>
            </div>
          </div>
          
          <div className="book-page right-page">
            <div className="page-content">
              <h2>Description</h2>
              <p>{journal.description}</p>
              
              <h2>Content</h2>
              {journal.content ? (
                <p>{journal.content}</p>
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