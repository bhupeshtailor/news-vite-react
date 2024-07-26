import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import News from "./pages/News";
import { useState } from "react";


export default function Router() {
    const pageSize = 5;
    const apiKey = import.meta.env.VITE_NEWS_API

    const [progress, setProgress] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout progress={progress} setProgress={setProgress} />}>
                    <Route index element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />

                    <Route exact path="/business" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />

                    <Route exact path="/entertainment" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

                    <Route exact path="/health" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />

                    <Route exact path="/science" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />

                    <Route exact path="/sports" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />

                    <Route exact path="/technology" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />

                </Route>
            </Routes>
        </BrowserRouter >
    );
}