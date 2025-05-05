import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { Journal } from '../types';

interface JournalCardsProps {
  journals: Journal[];
}

const JournalCards: React.FC<JournalCardsProps> = ({ journals }) => {
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {journals.map((journal) => (
        <IonCard key={journal.id} style={{ margin: 0 }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              {journal.title}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ paddingTop: '0' }}>
            <p style={{ margin: '8px 0', color: '#666' }}>{journal.description}</p>
            <small style={{ color: '#999' }}>Created: {journal.createdAt}</small>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default JournalCards;