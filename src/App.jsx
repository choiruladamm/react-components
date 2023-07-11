/* eslint-disable no-unused-vars */

import DragAndDrop from "./components/DragAndDrop/DnD"
import InfiniteScrolling from "./components/InfiniteScrolling/InfiniteScrolling"
import Pagination from "./components/Pagination/Pagination"

const App = () => {
  return (
    <div className="font-[Inter] h-screen grid place-items-center">
      <DragAndDrop />
    </div>
  )
}

export default App