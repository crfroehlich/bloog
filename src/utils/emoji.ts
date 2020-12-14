// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'node... Remove this comment to see the full error message
import emoji from 'node-emoji';

class EmojiHelper {
  emojify(text: any) {
    return emoji.emojify(text, (name: any) => name);
  }

  clean(text: any) {
    const emojified = this.emojify(text);
    return emoji.strip(emojified);
  }
}

export const emojiTools = new EmojiHelper();
export default emojiTools;