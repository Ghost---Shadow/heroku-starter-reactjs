import {
  Modal, Text, Group, Button, Checkbox, Stack,
} from '@mantine/core';
import { useEffect, useState } from 'react';

const COOKIE_KEYS = {
  HIDE_COOKIE_BANNER: 'HIDE_COOKIE_BANNER',
  TWITTER_TRACKING_ACCEPTED: 'TWITTER_TRACKING_ACCEPTED',
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

const checkLocalStorageFlag = (key) => localStorage.getItem(key) === 'true';

function CookieBanner() {
  const [hideCookieBanner, setHideCookieBanner] = useState(
    checkLocalStorageFlag(COOKIE_KEYS.HIDE_COOKIE_BANNER),
  );
  const [twitterAccepted, setTwitterAccepted] = useState(
    checkLocalStorageFlag(COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED),
  );

  const setHideCookieBannerWrapper = (value) => {
    setHideCookieBanner(value);
    localStorage.setItem(COOKIE_KEYS.HIDE_COOKIE_BANNER, value);
  };

  const initCookies = () => {
    if (checkLocalStorageFlag(COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED)) {
      initTwitterTracking();
    }
  };

  useEffect(() => {
    initCookies();
  }, []);

  const onAcceptAll = () => {
    setHideCookieBannerWrapper(true);
    localStorage.setItem(COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED, true);
    initCookies();
  };

  const onAcceptSelected = () => {
    setHideCookieBannerWrapper(true);
    localStorage.setItem(COOKIE_KEYS.TWITTER_TRACKING_ACCEPTED, twitterAccepted);
    initCookies();
  };

  return (
    <Modal
      title="Cookie Policy"
      withCloseButton={false}
      opened={!hideCookieBanner}
    >
      <Stack>
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          I agree to sell my privacy (demo, not connected to any ad campaign)
        </Text>
        <Group>
          <Group align="flex-start">
            <Checkbox checked disabled label="Essentials" />
            <Checkbox checked={twitterAccepted} label="Twitter" onChange={(e) => setTwitterAccepted(e.currentTarget.checked)} />
          </Group>

          <Group align="flex-end">
            <Button onClick={onAcceptSelected}>Accept Selected</Button>
            <Button onClick={onAcceptAll}>Accept All</Button>
          </Group>
        </Group>
      </Stack>
    </Modal>
  );
}

export default CookieBanner;
