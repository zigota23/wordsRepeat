import { Route, Routes } from "react-router-dom";
import LessonPage from "../pages/lesson";
import LessonListPage from "../pages/lessonList";
import MainPage from "../pages/main";
import VocabularyPage from "../pages/vocabulary";
import VocabularyListPage from "../pages/vocabularyList";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="vocabulary">
        <Route path="" element={<VocabularyPage />} />
        <Route path="list" element={<VocabularyListPage />} />
      </Route>
      <Route path="lesson">
        <Route path="" element={<LessonPage />} />
        <Route path="list" element={<LessonListPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
