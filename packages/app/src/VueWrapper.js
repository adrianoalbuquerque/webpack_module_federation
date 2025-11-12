import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';
import VueApp from 'VueApp/VueApp';

function VueWrapper() {
  const vueContainer = useRef(null);

  useEffect(() => {
    console.log('Montando o Vue no elemento:', container.current);
    const app = createApp(VueApp);
    app.mount(vueContainer.current);
    return () => {
      console.log('Desmontando o Vue.');
      app.unmount();
    } 
  }, []);

  return <div ref={vueContainer}></div>;
}

export default VueWrapper;
