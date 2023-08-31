function MyComponent() {
    return (
      <div style={{
          position: 'fixed',
          bottom: '2vh', // 1% of viewport height from the bottom
          left: '92vw',   // 1% of viewport width from the left
          width: '8vw',  // 5% of viewport width
          height: '0.2vh', // 0.5% of viewport height
          color: 'rgba(0, 0, 0, 0.45)',// 70% transparent black
          fontSize: '0.5vw'
        }}>
            @ Developed by Denghu & Derek
        </div>
    );
  }

  export default MyComponent