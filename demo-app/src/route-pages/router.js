import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(()=> import("./home"))
const Main = React.lazy(()=> import("./main"))
const Default = React.lazy(()=> import("./default-page"))
export default function RouterModule() {
    return (
        <BrowserRouter>
            <Suspense fallback = {<div>Loading...</div>}>
            <Routes>
                <Route index element={<Home />}/>
                    <Route path="main" element={<Main />} />
                        <Route path="*" element={<Default />} />
                    
            </Routes>
            </Suspense>
            <p>We wrap our content first with 'BrowserRouter'. Then we define our 'Routes'. An application can have multiple 'Routes'. Our basic example only uses one. 'Route's can be nested. The first 'Route' has a path of / and renders the Layout component. The nested Route inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs. The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /. Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
        </BrowserRouter>
    )

}