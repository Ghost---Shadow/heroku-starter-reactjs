import TrucksBody from './components/TrucksBody';
import { getFoodTrucksNearbyFast, getFoodTrucksNearby } from './api';
import { getUserLocation } from './utils';

function TrucksPage() {
  return (
    <TrucksBody
      getFoodTrucksNearbyFast={getFoodTrucksNearbyFast}
      getFoodTrucksNearby={getFoodTrucksNearby}
      getUserLocation={getUserLocation}
    />
  );
}

export default TrucksPage;
