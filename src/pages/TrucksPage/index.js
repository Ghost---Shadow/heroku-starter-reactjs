import TrucksBody from './components/TrucksBody';
import { getFoodTrucksNearbyFast, getFoodTrucksNearby } from './api';

function TrucksPage() {
  return (
    <TrucksBody
      getFoodTrucksNearbyFast={getFoodTrucksNearbyFast}
      getFoodTrucksNearby={getFoodTrucksNearby}
    />
  );
}

export default TrucksPage;
