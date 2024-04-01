import { Avatar, Button, Text } from '@mantine/core';
import { useStyles } from './styles';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import img from '@/public/images/325618096_916058312744106_937079095616907402_n.jpg';
import Contact from '../Contact';
import TextBlind from '@/components/TextBlind/TextBlind';

export default function AvartaInfo() {
  const { classes, cx } = useStyles();

  return (
    <div className="flex h-full mobile:flex-col laptop:h-[100vh]">
      <div
        className={cx(
          classes.leftSection,
          'h-full w-2/5 mobile:h-[45vh] mobile:w-full laptop:w-[30%]',
        )}
      >
        <div
          className={cx(
            classes.leftSection,
            'flex h-5/6  items-center justify-end pr-[50px] mobile:h-full mobile:justify-center mobile:pr-0',
          )}
        >
          <div className="flex flex-col">
            <div className={classes.wrapperAvatar}>
              <Avatar
                size={220}
                src={img}
                href="https://www.facebook.com/khangnguyen20.04/"
                component="a"
                radius={'xl'}
                color="red"
                className={classes.avatar}
              />
            </div>
            <div className="h-[80px]">
              <div className={classes.shadowAvatar} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cx(
          classes.rightSection,
          'h-full w-3/5 mobile:h-full mobile:w-full laptop:w-[70%]',
        )}
      >
        <div className="content flex h-5/6 items-center mobile:flex-col tablet:relative tablet:flex-col laptop:ml-[20px] laptop:justify-between">
          <div className="grpText top-[40%] flex  flex-1 items-start justify-center tablet:absolute tablet:flex-none tablet:p-0">
            <div className="flex flex-col mobile:items-center laptop:items-end">
              <Text
                className={cx(
                  classes.textFirstName,
                  classes.text,
                  'mobile:text-[40px]',
                )}
              >
                Nguyen Nguyen
              </Text>
              <Text
                className={cx(
                  classes.textLastName,
                  classes.text,
                  'mobile:text-[40px]',
                )}
              >
                <p className={classes.lastName}>Khang</p>
              </Text>
              <TextBlind
                text="Web Developer"
                className={classes.textPosition}
              />
            </div>
          </div>
          <div className="grpBtn  w-1/3 mobile:mt-[5px] mobile:flex mobile:w-full mobile:justify-center tablet:absolute tablet:top-[80%] tablet:right-[25%]">
            <Button className={classes.btnFb}>
              <a
                href="https://www.facebook.com/khangnguyen20.04"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandFacebookFilled className={classes.iconFB} />
              </a>
            </Button>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
