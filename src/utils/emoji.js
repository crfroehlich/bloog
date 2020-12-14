import emoji from 'node-emoji';

class EmojiHelper {
  emojify(text) {
    return emoji.emojify(text, (name) => name);
  }
  clean(text) {
    const emojified = this.emojify(text);
    return emoji.strip(emojified);
  }
}

export const emojiTools = new EmojiHelper();
export default emojiTools;