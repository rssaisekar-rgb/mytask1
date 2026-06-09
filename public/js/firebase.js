import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOUR8VYoVfmdwCQ2w5yZtBuo3FdbHrBR0",
  authDomain: "mytasks-a8f6c.firebaseapp.com",
  projectId: "mytasks-a8f6c",
  storageBucket: "mytasks-a8f6c.firebasestorage.app",
  messagingSenderId: "412547729269",
  appId: "1:412547729269:web:2cb908bbe68cbec5d7b53c",
  measurementId: "G-PEC8SKG927"
};

export const app = initializeApp(firebaseConfig);