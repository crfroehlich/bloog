import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Loadable from 'react-loadable';
// @ts-expect-error ts-migrate(6142) FIXME: Module './loading' was resolved to '/mnt/k/code/sc... Remove this comment to see the full error message
import LoadingProvider from './loading';

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens: any) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

const LoadableComponent = Loadable({
  // @ts-expect-error ts-migrate(6142) FIXME: Module './LiveProvider' was resolved to '/mnt/k/co... Remove this comment to see the full error message
  loader: () => import('./LiveProvider'),
  loading: LoadingProvider,
});

/* eslint-disable react/jsx-key */
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'code' implicitly has an 'any' typ... Remove this comment to see the full error message
const CodeBlock = ({ children: code, ...props }) => {
  if (props['react-live']) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <LoadableComponent code={code} />;
  } else {
    const lang = props.className ? props.className.split('-')[1] : null;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Highlight {...defaultProps} code={code} language={lang ? lang : 'javascript'} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <pre className={className + ' pre'} style={style} p={3}>
            {cleanTokens(tokens).map((line: any, i: any) => {
              let lineClass = {};

              let isDiff = false;

              if (line[0] && line[0].content.length && line[0].content[0] === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content.length && line[0].content[0] === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              }
              const lineProps = getLineProps({ line, key: i });

              lineProps.style = lineClass;
              const diffStyle = {
                userSelect: 'none',
                MozUserSelect: '-moz-none',
                WebkitUserSelect: 'none',
              };

              let splitToken;

              return (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div {...lineProps} key={`${line}_${i}`}>
                  {line.map((token: any, key: any) => {
                    if (isDiff) {
                      if (
                        // @ts-expect-error ts-migrate(2447) FIXME: The '&' operator is not allowed for boolean types.... Remove this comment to see the full error message
                        (key === 0 || key === 1) &
                        (token.content.charAt(0) === '+' || token.content.charAt(0) === '-')
                      ) {
                        if (token.content.length > 1) {
                          splitToken = {
                            types: ['template-string', 'string'],
                            content: token.content.slice(1),
                          };
                          const firstChar = {
                            types: ['operator'],
                            content: token.content.charAt(0),
                          };

                          return (
                            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <React.Fragment key={`${token}_${key}`}>
                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                              <span
                                {...getTokenProps({ token: firstChar, key })}
                                // @ts-expect-error ts-migrate(2322) FIXME: Type '{ userSelect: string; MozUserSelect: string;... Remove this comment to see the full error message
                                style={diffStyle}
                              />
                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                              <span {...getTokenProps({ token: splitToken, key })} />
                            </React.Fragment>
                          );
                        } else {
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          return <span {...getTokenProps({ token, key })} style={diffStyle} />;
                        }
                      }
                    }
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    return <span {...getTokenProps({ token, key })} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    );
  }
};

export default CodeBlock;
