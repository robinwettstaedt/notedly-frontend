import 'emoji-mart/css/emoji-mart.css';
import { Picker, Emoji, EmojiData } from 'emoji-mart';
import { useState } from 'react';

function App() {
  const [emoji, setEmoji] = useState<EmojiData>();

  const handleSelect = (choice: EmojiData) => {
    // delete choice['emoticons'];
    // delete choice['colons'];
    // if (choice.name) {
    //   delete choice.name;
    // }
    // delete choice['short_names'];

    setEmoji(choice);
  };

  return (
    <div className="App">
      <Picker emoji=":thumbsup:" color="blue" onSelect={handleSelect} />
      {emoji && <Emoji emoji={emoji} size={24} />}
    </div>
  );
}

export default App;
