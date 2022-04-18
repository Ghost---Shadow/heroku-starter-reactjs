import { Input } from '@mantine/core';
import { useField } from 'formik';

function TextField(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <Input invalid={meta.touched && meta.error} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default TextField;
