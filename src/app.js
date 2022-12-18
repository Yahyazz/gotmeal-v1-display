import "regenerator-runtime";
import "./styles/style.css";
import main from "./script/view/main.js";
import homeLogo from './image/logo.png';
import imgCooking from './image/cooking.svg';
import imgBarbecue from './image/bbq.svg';
import myIcon from './image/icon.png';

document.addEventListener("DOMContentLoaded", main);

const logoImg = document.getElementById("logo");
logoImg.src = homeLogo;

const imageCooking = document.getElementById("cooking");
imageCooking.src = imgCooking;

const imageBarbecue = document.getElementById("bbq");
imageBarbecue.src = imgBarbecue;

const imageIcon = document.getElementById("icon");
imageIcon.href = myIcon;