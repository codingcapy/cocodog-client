
/*
author: Paul Kim
date: December 8, 2023
version: 1.0
description: router for CapySocial2
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import HomePage, { pageLoader } from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostsPage, { postsLoader } from "./pages/PostsPage";
import ProfilePage, { userPostsLoader } from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage, { postDetailsLoader } from "./pages/PostDetailsPage";
import MaintenancePage from "./pages/MaintenancePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/cocodog-client/maintenance" element={<HomePage />} loader={pageLoader} />
                <Route path="/cocodog-client/posts/maintenance" element={<PostsPage />} loader={postsLoader} />
                <Route path="/cocodog-client/users/maintenance" element={<LoginPage />} />
                <Route path="/cocodog-client/users/maintenance2" element={<SignupPage />} />
                <Route path="/cocodog-client/posts/:postId" element={<PostDetailsPage />} loader={postDetailsLoader} />
                <Route path="/cocodog-client/users/:userId" element={<ProfilePage />} loader={userPostsLoader} />
                <Route path="/cocodog-client/posts/create" element={<CreatePostPage />} />
                <Route path="/cocodog-client" element={<MaintenancePage />} />
                <Route path="/cocodog-client/posts/" element={<MaintenancePage />} />
                <Route path="/cocodog-client/users/login" element={<MaintenancePage />} />
                <Route path="/cocodog-client/users/signup" element={<MaintenancePage />} />
            </Route>
        )
    )
    return router
}