import { useEffect, useState } from 'react';
import i18n from '@/i18n';
import { Select } from '@mantine/core';
import { useStyles } from './styles';

const ToggleLanguage = () => {
  const [value, setValue] = useState<string | null>(
    localStorage.getItem('language'),
  );
  const { classes, cx } = useStyles();
  useEffect(() => {
    if (value) {
      i18n.changeLanguage(value);
      localStorage.setItem('language', value);
    }
  }, [value]);

  return (
    <div>
      <Select
        id="language"
        defaultValue={i18n.language}
        onChange={setValue}
        data={[
          { value: 'en', label: 'English' },
          { value: 'vn', label: 'Vietnamese' },
        ]}
        classNames={{
          root: cx(classes.root, 'mobile:w-[100px]'),
          item: classes.item,
        }}
      />
    </div>
  );
};

export default ToggleLanguage;
