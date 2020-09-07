import React from 'react';
import { Button } from 'react-native';

const NewsButton = () => {
  return (
     <Button
      title="Go to News"
      onPress={() => navigation.navigate('News')}
    />
  );
}

export default NewsButton;