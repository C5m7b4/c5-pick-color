# c5-pick-color

Install:

```js
  npm install c5-pick-color
```

sample usage:

```js
import ColorPicker from 'c5-pick-color';

const App = () => {
  const [color, setColor] = useState('#000000');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPicker(!showPicker)}>Click me</button>
      {showPicker && (
        <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
      )}
    </div>
  );
};
```

I wanted to understand how to write a color picker component so I rewrote all the code
from react-pick-color. This was a fun journey. I plan on making a few changed:

[ ] make modal wrapper around Picker so it will pop up where the mouse is
