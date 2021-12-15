import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import HomePage from "./pages/HomePage/HomePage";
import DashBoard from "./pages/Dashboard/Dashboard";
import RecipePage from "./pages/RecipePage/RecipePage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/addrecipe" component={AddRecipe} />
          <Route path="/dashboard/:user_name" component={DashBoard} />
          <Route path="/recipe/:recipe_name/:recipe_id" component={RecipePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
