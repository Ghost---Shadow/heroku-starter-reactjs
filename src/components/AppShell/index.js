import { AppShell, Header } from '@mantine/core';
import PropTypes from 'prop-types';
import CookieBanner from '../CookieBanner';

function CustomAppShell({ children }) {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">GKE Starter App</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <CookieBanner />
      {children}
    </AppShell>
  );
}

CustomAppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomAppShell;
