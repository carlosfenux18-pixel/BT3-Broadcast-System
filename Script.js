// ============================
// BT3 Broadcast System
// Overlay Script v1.0
// ============================

// Datos temporales
const overlayData = {
    leftName: "FENUX",
    leftSocial: "@fenux_bt3",

    rightName: "PICACHOLE",
    rightSocial: "@picachole",

    round: "TOP 16"
};

// Referencias

const leftName = document.getElementById("left-name");
const leftSocial = document.getElementById("left-social");

const rightName = document.getElementById("right-name");
const rightSocial = document.getElementById("right-social");

const round = document.getElementById("round");

// Actualizar overlay

function updateOverlay() {

    leftName.textContent = overlayData.leftName;
    leftSocial.textContent = overlayData.leftSocial;

    rightName.textContent = overlayData.rightName;
    rightSocial.textContent = overlayData.rightSocial;

    round.textContent = overlayData.round;
}

// Animación de entrada

window.addEventListener("load", () => {

    document.querySelector(".left").classList.add("show");
    document.querySelector(".right").classList.add("show");

    updateOverlay();

});

// Funciones futuras para panel

function setCasterLeft(name, social){

    overlayData.leftName = name;
    overlayData.leftSocial = social;

    updateOverlay();

}

function setCasterRight(name, social){

    overlayData.rightName = name;
    overlayData.rightSocial = social;

    updateOverlay();

}

function setRound(value){

    overlayData.round = value;

    updateOverlay();

}
