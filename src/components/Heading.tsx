export const Heading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <p style={{ color: "white" }}>
        Based on the popular game{" "}
        <a
          style={{ color: "lightskyblue", fontWeight: "bold" }}
          href="https://www.powerlanguage.co.uk/wordle/">
          Wordle
        </a>
      </p>
    </div>
  );
};
