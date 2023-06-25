import { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([])
  const addGuest = () => {
    setGuests([...guests, name])
    setName("")
  }
  return(<div>
    <h3>Guest List</h3>
    <ul>{guests.map((guest) => (<li key={guest}>{guest}</li>))}</ul>
    <input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
    <button onClick={addGuest}>Add Guest</button>
  </div>)
}
