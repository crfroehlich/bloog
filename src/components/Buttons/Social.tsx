
// @ts-expect-error ts-migrate(6142) FIXME: Module './ButtonIcon' was resolved to '/home/fro/c... Remove this comment to see the full error message
import { ButtonIcon } from './ButtonIcon';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Link'.
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link to={link} target={'_blank'} rel={'noopener noreferrer'}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ButtonIcon {...props} />
    </Link>
  );
};

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Facebook = (props: any) => <SocialButton icon={FB} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Github = (props: any) => <SocialButton icon={GH} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Gitlab = (props: any) => <SocialButton icon={GL} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Linkedin = (props: any) => <SocialButton icon={LI} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Mail = (props: any) => <SocialButton icon={MA} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Rss = (props: any) => <SocialButton icon={RS} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Slack = (props: any) => <SocialButton icon={SL} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Twitch = (props: any) => <SocialButton icon={TC} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export const Twitter = (props: any) => <SocialButton icon={TW} {...props} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
}