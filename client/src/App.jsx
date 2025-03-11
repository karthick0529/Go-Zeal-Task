import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificationForm from "./components/CertificationForm";
import CertificationView from "./components/CertificationView";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CertificationForm />} />
          <Route path="/certification-view" element={<CertificationView />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
