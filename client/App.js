import { useState } from "react";

export default function App() {
  const profiles = [
    { id: 1, name: "Alex", bio: "Loves hiking and coffee ☕" },
    { id: 2, name: "Jordan", bio: "Dog person 🐶" },
    { id: 3, name: "Taylor", bio: "Music lover 🎵" },
  ];

  const [index, setIndex] = useState(0);

  const nextProfile = () => {
    setIndex((prev) => (prev + 1) % profiles.length);
  };

  const profile = profiles[index];

  return (
    <div style={styles.container}>
      <h1>💘 DateMate</h1>

      <div style={styles.card}>
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>

        <button onClick={nextProfile} style={styles.button}>
          ❤️ Like
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
