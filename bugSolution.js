```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```