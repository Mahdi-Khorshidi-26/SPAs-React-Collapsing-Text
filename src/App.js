import { useState } from "react";

const box = {
  fontSize: "18px",
  color: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "lightgray",
  padding: "20px",
  margin: "10px",
  borderRadius: "10px",
};

export default function CollapseText() {
  return (
    <div style={box}>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        tempore veniam est quidem incidunt ea ipsa ut, quo pariatur, at tempora
        animi voluptates itaque consequuntur vel fuga fugiat eius placeat.
        Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo pariatur,
        at tempora animi voluptates itaque consequuntur vel fuga fugiat eius
        placeat. Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo
        pariatur, at tempora animi voluptates itaque consequuntur vel fuga
        fugiat eius placeat. Accusamus tempore veniam est quidem incidunt ea
        ipsa ut, quo pariatur, at tempora animi voluptates itaque consequuntur
        vel fuga fugiat eius placeat.
      </Text>
      <br />
      <br />
      <br />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        tempore veniam est quidem incidunt ea ipsa ut, quo pariatur, at tempora
        animi voluptates itaque consequuntur vel fuga fugiat eius placeat.
        Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo pariatur,
        at tempora animi voluptates itaque consequuntur vel fuga fugiat eius
        placeat. Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo
        pariatur, at tempora animi voluptates itaque consequuntur vel fuga
        fugiat eius placeat. Accusamus tempore veniam est quidem incidunt ea
        ipsa ut, quo pariatur, at tempora animi voluptates itaque consequuntur
        vel fuga fugiat eius placeat.
      </Text>
      <br />
      <br />
      <br />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        tempore veniam est quidem incidunt ea ipsa ut, quo pariatur, at tempora
        animi voluptates itaque consequuntur vel fuga fugiat eius placeat.
        Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo pariatur,
        at tempora animi voluptates itaque consequuntur vel fuga fugiat eius
        placeat. Accusamus tempore veniam est quidem incidunt ea ipsa ut, quo
        pariatur, at tempora animi voluptates itaque consequuntur vel fuga
        fugiat eius placeat. Accusamus tempore veniam est quidem incidunt ea
        ipsa ut, quo pariatur, at tempora animi voluptates itaque consequuntur
        vel fuga fugiat eius placeat.
      </Text>
      <br />
      <br />
      <br />
    </div>
  );
}

function Text({ children, collapseNum = 30 }) {
  const [isExpanded, setIsExpanded] = useState(true);
  let displayText = isExpanded
    ? children.split(" ").slice(0, collapseNum).join(" ") + "..."
    : children;
  return (
    <div>
      {displayText}
      <button onClick={() => setIsExpanded((e) => !e)}>
        {isExpanded ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}
