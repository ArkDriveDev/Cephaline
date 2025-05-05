import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Profile from '../components/Profile';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Profile/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
