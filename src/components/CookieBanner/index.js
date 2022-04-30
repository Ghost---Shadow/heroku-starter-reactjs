import {
  Modal, Text, Group, Button, Checkbox, Stack,
} from '@mantine/core';
import { useEffect, useState } from 'react';

const COOKIE_KEYS = {
  HIDE_COOKIE_BANNER: 'HIDE_COOKIE_BANNER',
  TWITTER_TRACKING_ACCEPTED: 'TWITTER_TRACKING_ACCEPTED',
  SWITTER_TRACKING_ACCEPTED: 'SWITTER_TRACKING_ACCEPTED',
};

/* eslint-disable */
const initTwitterTracking = () => {
  !(function (e, t, n, s, u, a) {
    e.twq || (s = e.twq = function () {
      s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
    }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
      a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
  }(window, document, 'script'));
  twq('init', 'potato');
  twq('track', 'PageView');
};
/* eslint-enable */

/* eslint-disable */
const initSwitterTracking = () => {
  !(function (e, t, n, s, u, a) {
    e.twq || (s = e.twq = function () {
      s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
    }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
      a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
  }(window, document, 'script'));
  twq('init', 'tomato');
  twq('track', 'PageView');
};
/* eslint-enable */

const checkLocalStorageFlag = (key) => localStorage.getItem(key) === 'true';

const adRegistry = [
  {
    key: COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED,
    init: initTwitterTracking,
  },
  {
    key: COOKIE_KEYS.SWITTER_TRACKING_ACCEPTED,
    init: initSwitterTracking,
  },
];

const initCookies = () => {
  adRegistry.forEach((ad) => {
    if (checkLocalStorageFlag(ad.key)) {
      ad.init();
    }
  });
};

// Run EXACTLY once.
initCookies();

function CookieBanner() {
  const [hideCookieBanner, setHideCookieBanner] = useState(
    checkLocalStorageFlag(COOKIE_KEYS.HIDE_COOKIE_BANNER),
  );
  const [acceptanceLut, setAcceptanceLut] = useState(
    adRegistry.reduce((acc, next) => ({
      ...acc,
      [next.key]: checkLocalStorageFlag(next.key),
    }), {}),
  );
  const [triggerAcceptAll, setTriggerAcceptAll] = useState(false);

  const setHideCookieBannerWrapper = (value) => {
    setHideCookieBanner(value);
    localStorage.setItem(COOKIE_KEYS.HIDE_COOKIE_BANNER, value);
  };

  const onAcceptSelected = () => {
    setHideCookieBannerWrapper(true);
    adRegistry.forEach((ad) => {
      localStorage.setItem(ad.key, acceptanceLut[ad.key]);
    });
    initCookies();
  };

  const markettingAccepted = Object.keys(acceptanceLut)
    .reduce((acc, next) => acc && acceptanceLut[next], true);
  const markettingIndeterminate = Object.keys(acceptanceLut)
    .reduce((acc, next) => acc || acceptanceLut[next], false) && !markettingAccepted;

  const setMarkettingAccepted = (value) => {
    setAcceptanceLut((oldAcceptanceLut) => Object.keys(oldAcceptanceLut).reduce((acc, next) => ({
      ...acc,
      [next]: value,
    }), {}));
  };

  const onAcceptAll = () => {
    setMarkettingAccepted(true);
    // We need to trigger it so that the state finishes updating
    setTriggerAcceptAll(true);
  };

  useEffect(() => {
    if (!triggerAcceptAll) return;
    onAcceptSelected();
  }, [triggerAcceptAll]);

  const updateAcceptanceLut = (key, value) => {
    setAcceptanceLut((oldAcceptanceLut) => ({
      ...oldAcceptanceLut,
      [key]: value,
    }));
  };

  return (
    <Modal
      title="Cookie Policy"
      withCloseButton={false}
      opened={!hideCookieBanner}
      centered
    >
      <Stack>
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          I agree to sell my privacy (demo, not connected to any ad campaign)
        </Text>
        <Group position="apart">
          <Group align="flex-start">
            <Checkbox checked disabled label="Essentials" />
            <Stack align="stretch">
              <Checkbox
                checked={markettingAccepted}
                indeterminate={markettingIndeterminate}
                label="Marketing"
                onChange={(e) => setMarkettingAccepted(e.currentTarget.checked)}
              />
              <Checkbox
                checked={acceptanceLut[COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED]}
                label="Twitter"
                onChange={(e) => updateAcceptanceLut(
                  COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED,
                  e.currentTarget.checked,
                )}
              />
              <Checkbox
                checked={acceptanceLut[COOKIE_KEYS.SWITTER_TRACKING_ACCEPTED]}
                label="Switter"
                onChange={(e) => updateAcceptanceLut(
                  COOKIE_KEYS.SWITTER_TRACKING_ACCEPTED,
                  e.currentTarget.checked,
                )}
              />
            </Stack>
          </Group>
          <Stack align="stretch">
            <Button onClick={onAcceptSelected}>Accept Selected</Button>
            <Button onClick={onAcceptAll}>Accept All</Button>
          </Stack>
        </Group>
      </Stack>
    </Modal>
  );
}

export default CookieBanner;
