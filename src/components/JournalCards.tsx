import React, { useState } from 'react';
import { IonButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonInput, IonTextarea,IonItem,IonLabel} from '@ionic/react';
import { bookOutline, close } from 'ionicons/icons';

function NewButton() {
  const [showModal, setShowModal] = useState(false);
  const [journalTitle, setJournalTitle] = useState('');
  const [journalDescription, setJournalDescription] = useState('');

  const handleSave = () => {
    // Here you would typically save to state or backend
    console.log('New Journal:', { journalTitle, journalDescription });
    setShowModal(false);
    // Reset fields
    setJournalTitle('');
    setJournalDescription('');
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>
        <IonIcon slot="start" icon={bookOutline}></IonIcon>
        New
      </IonButton>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
            <IonTitle>Create New Journal</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={handleSave}>
                Save
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <IonItem>
              <IonLabel position="stacked">Journal Title</IonLabel>
              <IonInput
                value={journalTitle}
                onIonChange={(e) => setJournalTitle(e.detail.value || '')}
                placeholder="Enter journal title"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Description</IonLabel>
              <IonTextarea
                value={journalDescription}
                onIonChange={(e) => setJournalDescription(e.detail.value || '')}
                placeholder="Enter journal description"
                rows={3}
                autoGrow
              />
            </IonItem>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
}

export default NewButton;