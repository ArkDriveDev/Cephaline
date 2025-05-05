import React, { useState, useRef } from 'react';
import { IonAvatar, IonItem, IonLabel, IonImg, IonButton, IonIcon, IonAlert } from '@ionic/react';
import { camera } from 'ionicons/icons';

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwUjiUutJvuQ0vQfeBInl1_0akbZphNjTcA&s');
  const [showAlert, setShowAlert] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Try to load cached image on component mount
  React.useEffect(() => {
    const cachedImage = localStorage.getItem('profileImage');
    if (cachedImage) {
      setProfileImage(cachedImage);
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setProfileImage(imageDataUrl);
        
        // Cache the image data URL in localStorage
        localStorage.setItem('profileImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <IonItem>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
        
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        
        <IonLabel style={{ textAlign: 'center', marginTop: '10px' }}>
          <h2>Profile</h2>
          <p>Developer</p>
        </IonLabel>
        
        <IonButton 
          fill="outline" 
          style={{ marginTop: '10px' }}
          onClick={() => setShowAlert(true)}
        >
          Edit Profile
        </IonButton>
      </div>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Edit Profile'}
        message={'What would you like to edit?'}
        buttons={[
          {
            text: 'Change Photo',
            handler: triggerFileInput
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]}
      />
    </IonItem>
  );
};

export default Profile;