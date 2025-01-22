import Header from "/Components/Header";
import Entry from "/Components/Entry";
import data from "/data.js";
export default function App() {
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key = {entry.id}
                {...entry}
            />
        )
    })
  return (
    <>
      <Header />
      <main class='container'>
        {entryElements}
      </main>
    </>
  )
}
