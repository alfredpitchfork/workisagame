'use client'
import Head from "next/head";
import { useState } from "react";
import { doc, query, collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {
  useDocumentData,
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";

const AdminPage = () => {
  const [snapshot, loading, error] = useCollection(
    collection(db, "masterList")
  );
  const masterList = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const [bingoEntry, setBingoEntry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const options = ["Common", "Uncommon", "Rare"];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const entrySubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "masterList"), {
      entry: bingoEntry,
      rarity: selectedOption,
    });
    setSelectedOption(null);
    setBingoEntry("");
    console.log("document written with ID: ", docRef.id);
  };

  return (
    <div>
      <Head>
        <title>Bingo!</title>
        <link rel="icon" href="/faviduck.png" />
      </Head>
      <div className="main_body h-screen w-screen flex justify-center m-10">
        <form id="signUpForm" onSubmit={entrySubmit}>
          <input
            type="text"
            id="bingoEntry"
            placeholder="Type in Entry"
            onChange={(e) => setBingoEntry(e.target.value)}
            value={bingoEntry}
          />

          <div>
            <div onClick={toggling}>{selectedOption || "Select a rarity"}</div>
            {isOpen && (
              <li>
                {options.map((option) => (
                  <ul onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ul>
                ))}
              </li>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          {masterList?.map((bingoCell) => (
            <p key={Math.random()}>
              {bingoCell.entry} : {bingoCell.rarity}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
