import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPopover, IonContent } from '@ionic/react';
import { Journal } from '../types';
import './JournalCards.css'; // Import the CSS file

interface JournalCardsProps {
  journals: Journal[];
}

const JournalCards: React.FC<JournalCardsProps> = ({ journals }) => {
  return (
    <div className="journal-cards-container">
      {journals.map((journal, index) => (
        <div 
          key={journal.id} 
          className="journal-card-wrapper"
          style={{
            marginLeft: `${index * 8}px`,
            zIndex: journals.length - index
          }}
        >
          <IonCard 
            className="journal-card"
            style={{
              zIndex: journals.length - index
            }}
          >
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
              zIndex: journals.length - index - 1
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default JournalCards;