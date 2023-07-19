// Event class based on NIP-01
class Event {
  constructor(name, metadata, timestamp, source, version) {
    this.name = name;
    this.metadata = metadata;
    this.timestamp = timestamp;
 
  }
}

// Example usage:
const event = new Event(
  "Transfer", // Event name
  { from: "0x123abc", to: "0x456def", amount: 100 }, // Metadata object
  Math.floor(Date.now() / 1000), // Timestamp in seconds
  "1.0" // Event version
);

console.log(event);

