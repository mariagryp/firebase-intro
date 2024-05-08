import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../main";
import { useEffect, useState } from "react";
import { Person } from "./Input";

const PersonsList = () => {
  //state som innehåller person
  const [persons, setPersons] = useState<Person[]>([]);

  //hämta alla document i collection __ EN GÅNG__
  /* const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "persons"));
    const personsList = querySnapshot.docs.map((doc) => doc.data() as Person);
    setPersons(personsList);
  }; */

  //hämta data varje gång datan förändras
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "persons"), (snapshot) => {
      const personsList: Person[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Person),
        id: doc.id,
      }));
      setPersons(personsList);
    });

    return () => unsubscribe();
  }, []);

  const content = persons.map((person) => (
    <li key={person.id}>
      {person.firstname} {person.lastname}
    </li>
  ));

  return (
    <>
      {/* <button onClick={getData}>Get Data</button> */}
      <ul>{content}</ul>
    </>
  );
};

export default PersonsList;
