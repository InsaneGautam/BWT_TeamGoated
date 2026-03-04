const RiskHeatmap = () => {
  return (
    <div>
      <h2>Risk Heatmap</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 50px)",
        gap: "5px"
      }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: `rgba(255,0,0,${Math.random()})`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RiskHeatmap;
