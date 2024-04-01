import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { IconMapPinFilled } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { IconDeviceMobile } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

export default function AvartaInfo() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();

  return (
    <div className="info flex justify-around pb-[50px] mobile:w-full mobile:flex-col mobile:items-center mobile:justify-center mobile:pb-0 tablet:h-1/6 tablet:flex-col tablet:pb-1 laptop:h-1/6 laptop:items-end laptop:justify-around">
      <div className="flex items-center justify-center">
        <IconMapPinFilled className="mr-4 opacity-50 mobile:hidden tablet:hidden" />
        <div className="mobile:flex mobile:h-full mobile:flex-col mobile:items-center tablet:text-center">
          <Text className={cx(classes.textTitleInfo, 'mobile:text-14px')}>
            Address
          </Text>
          <a
            href="https://www.google.com/maps/place/51%2F1+Th%C3%A1i+B%C3%ACnh,+%E1%BA%A5p+Trung+Ch%C3%A1nh+1,+H%C3%B3c+M%C3%B4n,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8623446,106.6092318,17z/data=!3m1!4b1!4m6!3m5!1s0x31752a142a7c55f1:0xc01bb8708d4f540a!8m2!3d10.8623393!4d106.6114205!16s%2Fg%2F11c22hfwgk"
            target="_blank"
            rel="noreferrer"
            className="relative"
          >
            <div
              className={cx(
                classes.wrapperTextInfo,
                'absolute top-0 left-0 h-full w-full',
              )}
            />
            <Text className={cx(classes.textInfo, classes.text, 'h-full')}>
              {t('intro.t1')}
            </Text>
          </a>
        </div>
      </div>
      <div className="h-[50px] border-l border-[gray] mobile:h-[1px] mobile:border-t tablet:m-[auto] tablet:h-1 tablet:w-[20%] tablet:border-none tablet:bg-red-200"></div>
      <div className="flex items-center justify-center">
        <IconDeviceMobile className="mr-4 opacity-50 mobile:hidden tablet:hidden" />
        <div className="mobile:flex mobile:h-full mobile:flex-col mobile:items-center tablet:text-center">
          <Text className={classes.textTitleInfo}>Phone</Text>
          <a
            href="https://zalo.me/0334146207 "
            target="_blank"
            rel="noreferrer"
            className="relative"
          >
            <div
              className={cx(
                classes.wrapperTextInfo,
                'absolute top-0 left-0 h-full w-full',
              )}
            />
            <Text className={cx(classes.textInfo, classes.text)}>
              0334146207
            </Text>
          </a>
        </div>
      </div>
      <div className="h-[50px] border-l border-[gray] mobile:h-[1px] mobile:border-t tablet:m-[auto] tablet:h-1 tablet:w-[20%] tablet:border-none tablet:bg-red-200"></div>
      <div className="flex items-center justify-center">
        <IconMail className="mr-4 opacity-50 mobile:hidden tablet:hidden" />
        <div className="mobile:flex mobile:h-full mobile:flex-col mobile:items-center tablet:text-center">
          <Text className={classes.textTitleInfo}>Email</Text>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRfDWmvnvjtFFWgPBBpJkHbLnVpGqQFmwDPdDBpCcRRmXncBFpcdscpWQKFbwFTqDbfbbW"
            target="_blank"
            rel="noreferrer"
            className="relative"
          >
            <div
              className={cx(
                classes.wrapperTextInfo,
                'absolute top-0 left-0 h-full w-full',
              )}
            />
            <Text className={cx(classes.textInfo, classes.text)}>
              khang.nguyen19999kn@gmail.com
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
