import React, { useState, useRef } from 'react';
import { 
  IonAvatar, 
  IonItem, 
  IonLabel, 
  IonImg, 
  IonButton, 
  IonIcon, 
  IonAlert, 
  IonInput,
  IonTextarea,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons
} from '@ionic/react';
import { camera, pencil, close } from 'ionicons/icons';

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwUjiUutJvuQ0vQfeBInl1_0akbZphNjTcA&s');
  const [name, setName] = useState<string>('Profile');
  const [bio, setBio] = useState<string>('Developer');
  const [showEditModal, setShowEditModal] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempBio, setTempBio] = useState(bio);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load cached data on component mount
  React.useEffect(() => {
    const cachedImage = localStorage.getItem('profileImage');
    const cachedName = localStorage.getItem('profileName');
    const cachedBio = localStorage.getItem('profileBio');

    if (cachedImage) setProfileImage(cachedImage);
    if (cachedName) setName(cachedName);
    if (cachedBio) setBio(cachedBio);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setProfileImage(imageDataUrl);
        localStorage.setItem('profileImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const openEditModal = () => {
    setTempName(name);
    setTempBio(bio);
    setShowEditModal(true);
  };

  const saveProfileChanges = () => {
    setName(tempName);
    setBio(tempBio);
    localStorage.setItem('profileName', tempName);
    localStorage.setItem('profileBio', tempBio);
    setShowEditModal(false);
  };

  return (
    <IonItem>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* Profile Image with Edit Button */}
        <div style={{ position: 'relative' }}>
          <IonAvatar style={{ width: '200px', height: '200px', margin: '10px auto' }}>
            <IonImg src={profileImage} style={{ objectFit: 'cover' }} />
          </IonAvatar>
          <IonButton 
            fill="clear" 
            style={{ 
              position: 'absolute', 
              bottom: '0', 
              right: '25%',
              '--background': 'rgba(0,0,0,0.5)',
              '--border-radius': '50%',
              width: '40px',
              height: '40px'
            }}
            onClick={triggerFileInput}
          >
            <IonIcon icon={camera} color="light" />
          </IonButton>
        </div>
        
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        
        {/* Profile Info */}
        <IonLabel style={{ textAlign: 'center', marginTop: '10px' }}>
          <h2>{name}</h2>
          <p>{bio}</p>
        </IonLabel>
        
        {/* Edit Profile Button */}
        <IonButton 
          fill="outline" 
          style={{ marginTop: '10px' }}
          onClick={openEditModal}
        >
          <IonIcon icon={pencil} slot="start" />
          Edit Profile
        </IonButton>
      </div>

      {/* Edit Profile Modal */}
      <IonModal isOpen={showEditModal} onDidDismiss={() => setShowEditModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setShowEditModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
            <IonTitle>Edit Profile</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={saveProfileChanges}>
                Save
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Profile Image Change */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <IonAvatar style={{ width: '150px', height: '150px' }}>
                <IonImg src={profileImage} style={{ objectFit: 'cover' }} />
              </IonAvatar>
              <IonButton fill="outline" onClick={triggerFileInput}>
                Change Profile Image
              </IonButton>
            </div>
            
            {/* Name Input */}
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput 
                value={tempName} 
                onIonChange={(e) => setTempName(e.detail.value || '')} 
                placeholder="Enter your name"
              />
            </IonItem>
            
            {/* Bio Input */}
            <IonItem>
              <IonLabel position="stacked">Bio</IonLabel>
              <IonTextarea 
                value={tempBio} 
                onIonChange={(e) => setTempBio(e.detail.value || '')} 
                placeholder="Tell us about yourself"
                rows={3}
                autoGrow
              />
            </IonItem>
          </div>
        </IonContent>
      </IonModal>
    </IonItem>
  );
};

export default Profile;