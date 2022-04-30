import { AppShell, Header } from '@mantine/core';
import PropTypes from 'prop-types';

function CustomAppShell({ children }) {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Heroku Starter App</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}

CustomAppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomAppShell;
