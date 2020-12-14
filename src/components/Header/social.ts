// @ts-expect-error ts-migrate(6142) FIXME: Module '../Buttons/Social' was resolved to '/home/... Remove this comment to see the full error message
import { SocialButtons } from '../Buttons/Social';

const SocialButtonsBuilder = (baseProps: any) => {
  const iconBaseProps = baseProps;
  const buttons: any = [];
  const create = (config: any, name: any, optConfig: any) => {
    if (config && config.length > 0) {
      const btn = SocialButtons[name];
      if (btn) {
        const link = optConfig && optConfig.linkFn ? optConfig.linkFn(config) : config;
        const title =
          optConfig && optConfig.titleFn ? optConfig.titleFn(name) : `Follow on ${name}`;
        const additionalProps =
          optConfig && optConfig.additionalProps ? optConfig.additionalProps : {};
        buttons.push(
          btn({
            link: link,
            key: `${name}-social`,
            title: title,
            ...iconBaseProps,
            ...additionalProps,
          })
        );
      }
    }
  };
  const get = () => buttons;
  return {
    get: get,
    create: create,
  };
};

export const social = (iconBaseProps: any, socialConfig: any) => {
  const buttons = SocialButtonsBuilder(iconBaseProps);
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.facebook, 'Facebook');
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.github, 'Github');
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.gitlab, 'Gitlab');
  buttons.create(socialConfig.linkedin, 'Linkedin', {
    additionalProps: {
      fill: iconBaseProps.stroke,
      hoverFill: iconBaseProps.hoverStroke,
    },
  });
  buttons.create(socialConfig.mail, 'Mail', {
    linkFn: (address: any) => `mailto:${address}`,
    titleFn: () => `Send email to owner`,
  });
  buttons.create(socialConfig.gmail, 'Mail', {
    linkFn: (address: any) => `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${address}`,
    titleFn: () => `Send email to owner`,
  });
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.slack, 'Slack');
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.twitch, 'Twitch');
  buttons.create(socialConfig.twitter, 'Twitter', {
    additionalProps: {
      fill: iconBaseProps.stroke,
      hoverFill: iconBaseProps.hoverStroke,
    },
  });
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
  buttons.create(socialConfig.youtube, 'Youtube');
  return buttons.get();
};
