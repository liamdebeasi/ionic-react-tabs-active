import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const h = useHistory();
  const onClick = () => {
    h.replace('/tab3');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <IonButton onClick={() => onClick()}>go to tab2 3</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
