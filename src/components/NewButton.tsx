import React, { useState } from 'react';
import { 
  IonButton, 
  IonIcon, 
  IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonInput, 
  IonTextarea, 
  IonItem, 
  IonLabel 
} from '@ionic/react';
import { bookOutline, close } from 'ionicons/icons';

interface NewJournalData {
  title: string;
  description: string;
}

interface NewButtonProps {
  onSave: (journal: NewJournalData) => void;
}

const NewButton: React.FC<NewButtonProps> = ({ onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [journalTitle, setJournalTitle] = useState('');
  const [journalDescription, setJournalDescription] = useState('');

  const handleSave = () => {
    if (!journalTitle.trim()) {
      alert('Journal title is required');
      return;
    }

    onSave({
      title: journalTitle,
      description: journalDescription
    });
    
    // Reset form and close modal
    setJournalTitle('');
    setJournalDescription('');
    setShowModal(false);
  };

  return (
    <>
      {/* Main New Journal Button */}
      <IonButton 
        onClick={() => setShowModal(true)} 
        expand="block" 
        color="primary"
        style={{ margin: '0 10px' }}
      >
        <IonIcon slot="start" icon={bookOutline} />
        New Journal
      </IonButton>

      {/* New Journal Modal */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
            <IonTitle>Create New Journal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleSave} strong>
                Save
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Journal Title Input */}
            <IonItem>
              <IonLabel position="stacked" color="primary">
                Journal Title <span style={{ color: 'red' }}>*</span>
              </IonLabel>
              <IonInput
                value={journalTitle}
                onIonChange={(e) => setJournalTitle(e.detail.value || '')}
                placeholder="Enter journal title"
                autofocus
                clearOnEdit
              />
            </IonItem>

            {/* Journal Description Input */}
            <IonItem>
              <IonLabel position="stacked" color="primary">
                Description
              </IonLabel>
              <IonTextarea
                value={journalDescription}
                onIonChange={(e) => setJournalDescription(e.detail.value || '')}
                placeholder="Enter journal description"
                rows={6}
                autoGrow
              />
            </IonItem>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default NewButton;