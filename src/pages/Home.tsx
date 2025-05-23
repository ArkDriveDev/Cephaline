import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Profile from '../components/Profile';
import Searchbar from '../components/Searchbar';
import NewButton from '../components/NewButton';
import JournalCards from '../components/JournalCards';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Profile/>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <Searchbar />
  <NewButton />
</div>

<JournalCards/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
