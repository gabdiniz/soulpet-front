import { Outlet } from "react-router-dom";
import "./Root.css";
import { Header } from "../../components/Header/Header";

export function Root() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}