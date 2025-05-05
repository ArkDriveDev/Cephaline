import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPopover, IonContent } from '@ionic/react';
import { Journal } from '../types';
import './JournalCards.css';

interface JournalCardsProps {
  journals: Journal[];
}

const JournalCards: React.FC<JournalCardsProps> = ({ journals }) => {
  // Split journals into rows of 3
  const rows = [];
  for (let i = 0; i < journals.length; i += 3) {
    rows.push(journals.slice(i, i + 3));
  }

  return (
    <div className="journal-grid-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="journal-row">
          {row.map((journal, colIndex) => (
            <div 
              key={journal.id}
              className="journal-card-wrapper"
              style={{
                zIndex: row.length - colIndex
              }}
            >
              <IonCard className="journal-card">
                <IonCardHeader>
                  <IonCardTitle 
                    className="journal-title"
                    id={`hover-trigger-${journal.id}`}
                  >
                    {journal.title}
                  </IonCardTitle>
                  <IonPopover 
                    trigger={`hover-trigger-${journal.id}`} 
                    triggerAction="hover" 
                    side="top"
                  >
                    <IonContent class="ion-padding">Click To Open Journal</IonContent>
                  </IonPopover>
                </IonCardHeader>
                
                <IonCardContent className="journal-content">
                  <p className="journal-description">
                    {journal.description}
                  </p>
                  <small className="journal-date">
                    Created: {journal.createdAt}
                  </small>
                </IonCardContent>
              </IonCard>
              
              {/* Book spine effect */}
              <div 
                className="journal-spine"
                style={{
                  zIndex: row.length - colIndex - 1
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default JournalCards;