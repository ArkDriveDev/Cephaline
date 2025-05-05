import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPopover } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Journal } from '../types';
import './JournalCards.css';

interface JournalCardsProps {
  journals: Journal[];
}

const JournalCards: React.FC<JournalCardsProps> = ({ journals }) => {
  const history = useHistory();
  
  const rows = [];
  for (let i = 0; i < journals.length; i += 3) {
    rows.push(journals.slice(i, i + 3));
  }

  const handleCardClick = (journalId: string) => {
    history.push(`/Cephaline/Journals/${journalId}`);
  };

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
              onClick={() => handleCardClick(journal.id)}
            >
              {/* Rest of your card JSX remains the same */}
              <IonCard className="journal-card" style={{
                backgroundColor: journal.cardColor,
              }}>
                <IonCardHeader>
                  <IonCardTitle
                    className="journal-title"
                    id={`hover-trigger-${journal.id}`}
                    style={{ color: journal.titleColor }}
                  >
                    {journal.title}
                  </IonCardTitle>
                  <IonPopover
                    trigger={`hover-trigger-${journal.id}`}
                    triggerAction="hover"
                    side="top"
                  >
                    <div className="ion-padding">Click To Open Journal</div>
                  </IonPopover>
                </IonCardHeader>

                <IonCardContent className="journal-content">
                  <p className="journal-description" style={{ color: journal.descriptionColor }}>
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