

import { defineComponent, ref } from 'vue';

const MyComponent = defineComponent({
  name: 'MyComponent',
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return () => (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello, Vue 3 + TypeScript + TSX!</h1>
        <p>Count: {count.value}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  },
});

export default MyComponent;


