import React, {Component} from "react";
import { createRoot } from "react-dom/client";
import MAIN from "./MAIN";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MAIN/>)