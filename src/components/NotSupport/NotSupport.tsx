import { useTranslation } from 'react-i18next';
import { useNotSupportStyle } from './notSupportStyle';
export default function NotSupport() {
  const { classes, cx } = useNotSupportStyle();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <div className="flex justify-center pt-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6023/6023986.png"
          alt="mobile"
        />
      </div>
      <div className="mt-20">
        <h1
          className={cx(
            classes.text,
            'animate-pulse bg-red-300 text-center text-xl font-semibold',
          )}
        >
          {t('error.t1')}
        </h1>
        <p className={cx(classes.text, 'text-center text-2xl font-normal')}>
          {t('error.t2')}
        </p>
      </div>
    </div>
  );
}
