import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./screens/HomePage/HomePage"
import { ManChoose } from "./screens/ManChoose/ManChoose"
import { ProductPage } from "./screens/ProductPage/ProductPage"
import { WomanChoose } from "./screens/WomanChoose/WoomanChoose"
import { UserArea } from "./screens/UserAreaPage/UserArea"

export const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/UserArea" element={<UserArea />} />
        <Route path="/woman-choose" element={<WomanChoose />}/>
        <Route path="/man-choose" element={<ManChoose />}/>
        <Route path="/:linkFlag/:brand/:id" element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  )
}