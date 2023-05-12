import React from 'react';
import Button from './Button';

export default function Submit({ ...props }) {
  return <Button type="submit" variant="form" style={{ display: 'block', margin: '0 auto' }} {...props}>Submit</Button>;
}
