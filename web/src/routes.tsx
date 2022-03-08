import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

export default function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}
