import React, { useState } from 'react';
import { IonButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonInput, IonTextarea } from '@ionic/react';
import { bookOutline, close } from 'ionicons/icons';
import { NewJournalData } from '../types';

interface NewButtonProps {
  onSave: (journal: NewJournalData) => void;
}

const NewButton: React.FC<NewButtonProps> = ({ onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [journalTitle, setJournalTitle] = useState('');
  const [journalDescription, setJournalDescription] = useState('');

  const handleSave = () => {
    onSave({
      title: journalTitle,
      description: journalDescription
    });
    setShowModal(false);
    setJournalTitle('');
    setJournalDescription('');
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>
        <IonIcon slot="start" icon={bookOutline}></IonIcon>
        New Journal
      </IonButton>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        {/* ... rest of the modal code ... */}
      </IonModal>
    </>
  );
};

export default NewButton;