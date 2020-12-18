import {
  Facebook as FB,
  GitHub as GH,
  Gitlab as GL,
  Linkedin as LI,
  Mail as MA,
  Rss as RS,
  Slack as SL,
  Twitch as TC,
  Twitter as TW,
  Youtube as YT,
} from 'react-feather';
import { Link } from '..';
import { ButtonIcon } from './ButtonIcon';

const SocialButton = (props) => {
  const { link } = props;
  return (
    <Link to={link} target={'_blank'} rel={'noopener noreferrer'}>
      <ButtonIcon {...props} />
    </Link>
  );
};

export const Facebook = (props: any) => <SocialButton icon={FB} {...props} />;
export const Github = (props: any) => <SocialButton icon={GH} {...props} />;
export const Gitlab = (props: any) => <SocialButton icon={GL} {...props} />;
export const Linkedin = (props: any) => <SocialButton icon={LI} {...props} />;
export const Mail = (props: any) => <SocialButton icon={MA} {...props} />;
export const Rss = (props: any) => <SocialButton icon={RS} {...props} />;
export const Slack = (props: any) => <SocialButton icon={SL} {...props} />;
export const Twitch = (props: any) => <SocialButton icon={TC} {...props} />;
export const Twitter = (props: any) => <SocialButton icon={TW} {...props} />;
export const Youtube = (props: any) => <SocialButton icon={YT} {...props} />;

export const SocialButtons = {
  Facebook,
  Github,
  Gitlab,
  Linkedin,
  Mail,
  Rss,
  Slack,
  Twitch,
  Twitter,
  Youtube,
};
