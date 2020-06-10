import * as React from 'react';

const HelloWorld: React.FC = () => (
  <div>
    <p>👋 Hello, World!</p>
    <p>
      Try editing <code>src/HelloWorld.tsx</code> with your browser's network
      tools panel open; you'll see that the only thing sent to the browser is
      the updated version of <i>one</i> file (without any bundling since
      Snowpack is being used).
    </p>
  </div>
);

export default HelloWorld;
