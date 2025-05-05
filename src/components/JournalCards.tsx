import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPopover, IonContent } from '@ionic/react';
import { Journal } from '../types';

interface JournalCardsProps {
  journals: Journal[];
}

const JournalCards: React.FC<JournalCardsProps> = ({ journals }) => {
  return (
    <>
      {journals.map((journal) => (
        <IonCard key={journal.id}>
          <IonCardHeader>
            <IonCardTitle id={`hover-trigger-${journal.id}`} color='secondary'>
              {journal.title}
            </IonCardTitle>
            <IonPopover trigger={`hover-trigger-${journal.id}`} triggerAction="hover">
              <IonContent class="ion-padding">Open Journal</IonContent>
            </IonPopover>
            <IonCardSubtitle>{journal.subtitle}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Created at {journal.createdAt}</IonCardContent>
        </IonCard>
      ))}
    </>
  );
};

export default JournalCards;