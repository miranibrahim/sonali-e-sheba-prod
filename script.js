// ---------- Login page logic ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (!phone || !pin) return;

    // No backend — just remember the PIN locally so the dashboard
    // can display it back as the "Bank Balance".
    sessionStorage.setItem("sonali_phone", phone);
    sessionStorage.setItem("sonali_pin", pin);

    window.location.href = "dashboard.html";
  });

  const registerLink = document.getElementById("registerLink");
  if (registerLink) {
    registerLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Registration is not available in this demo.");
    });
  }
}

// ---------- Dashboard page logic ----------
const bankBtn = document.getElementById("bankBalanceBtn");
const walletBtn = document.getElementById("walletBalanceBtn");
const balanceDisplay = document.getElementById("balanceDisplay");
const balanceLabel = document.getElementById("balanceLabel");
const balanceValue = document.getElementById("balanceValue");

if (bankBtn && walletBtn) {
  // If nobody logged in, send them back to the login screen.
  const storedPin = sessionStorage.getItem("sonali_pin");
  if (!storedPin) {
    window.location.href = "index.html";
  }

  let shown = false;
  let mode = "bank";

  function render() {
    bankBtn.classList.toggle("active", mode === "bank");
    walletBtn.classList.toggle("active", mode === "wallet");

    if (!shown) {
      balanceDisplay.classList.add("hidden");
      return;
    }

    balanceDisplay.classList.remove("hidden");
    balanceLabel.textContent = mode === "bank" ? "Bank Balance" : "Wallet Balance";
    balanceValue.textContent = mode === "bank" ? storedPin : "0.00";
  }

  bankBtn.addEventListener("click", function () {
    mode = "bank";
    shown = true;
    render();
  });

  walletBtn.addEventListener("click", function () {
    mode = "wallet";
    shown = true;
    render();
  });

  render();
}
