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
