import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function JournalCards() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color='secondary'>Programming 1</IonCardTitle>
        <IonCardSubtitle>Fundamentals of Programming</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Created at /07/23/2025</IonCardContent>
    </IonCard>
  );
}
export default JournalCards;