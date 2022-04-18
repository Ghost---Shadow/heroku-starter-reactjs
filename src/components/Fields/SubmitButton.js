import { Button } from '@mantine/core';
import PropTypes from 'prop-types';

function SubmitButton(props) {
  const { children, ...rest } = props;
  // const { submitForm } = useFormikContext();

  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
