
import ButtonIcon from './ButtonIcon';
import { Link } from '..';
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

type SocialButtonProps = {
    background?: string;
    hoverFill?: string;
    hoverStroke?: string;
    fill?: string;
    stroke?: string;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'link' does not exist on type 'SocialButt... Remove this comment to see the full error message
const SocialButton = ({ link, ...props }: SocialButtonProps) => {
  // const theme = useTheme();
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
