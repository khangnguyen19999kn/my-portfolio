import { Button, Loader, Text, TextInput, Textarea } from '@mantine/core';
import { useStyles } from './styles';

import { useTranslation } from 'react-i18next';

import { notifications } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import axios from 'axios';
import Contact from '../Contact';
import { useState } from 'react';
export default function Footer() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length > 0 ? null : 'Message is required'),
    },
  });

  const sendMessage = () => {
    setIsSent(true);
    axios
      .post('https://server-oasis-perfume.onrender.com/api/v1/portfolio', {
        ...form.values,
      })
      .then(() => {
        setIsSent(false);
        notifications.show({
          title: 'Thông báo',
          message:
            'Cám ơn bạn đã liên hệ với tôi, sẽ liên hệ bạn sớm nhất có thể',
          color: 'teal',
          autoClose: 5000,
        });
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={cx(classes.root, 'relative mobile:h-full mobile:flex-col')}>
      <div
        className={`absolute z-10 h-full w-full bg-[#fffafa91] ${
          isSent ? 'block' : 'hidden'
        }`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <Loader />
        </div>
      </div>
      <div
        className={cx(
          'w-2/5 mobile:h-1/3 mobile:w-full mobile:items-center mobile:p-0 mobile:text-center tablet:p-0',
          classes.leftSection,
        )}
      >
        <Text className={classes.titleExp}>{t('contact.contact')}</Text>
        <Text>{t('contact.subContact')}</Text>
      </div>
      <div
        className={cx('w-3/5 mobile:w-full mobile:px-4', classes.rightSection)}
      >
        <div className="pt-[100px] mobile:p-0">
          <form
            onSubmit={form.onSubmit(() => {
              sendMessage();
            })}
          >
            <Text>{t('contact.t3')}</Text>
            <TextInput
              {...form.getInputProps('email')}
              placeholder={t('contact.t1') || ''}
            />
            <Textarea
              {...form.getInputProps('message')}
              className="mt-3"
              placeholder={t('contact.t2') || ''}
            />
            <Button
              type="submit"
              className={cx('mx-auto mt-3', classes.buttonSend)}
            >
              Gửi
            </Button>
          </form>
          <div className="mt-10">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
